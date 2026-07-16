/*
 * MechWarrior Online loadout string codec.
 *
 * The format uses a little-endian 6-bit alphabet, followed by ordered
 * component sections. This module only handles the wire format; validation
 * against the local mech and equipment data is performed by app.js.
 */
(function attachMwoCodec(root) {
  "use strict";

  const ALPHABET = "0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmno";
  const DECODE = new Map(Array.from(ALPHABET, (character, index) => [character, index]));
  const COMPONENTS = Object.freeze([
    Object.freeze({ name: "centre_torso", terminator: "p" }),
    Object.freeze({ name: "right_torso", terminator: "q" }),
    Object.freeze({ name: "left_torso", terminator: "r" }),
    Object.freeze({ name: "left_arm", terminator: "s" }),
    Object.freeze({ name: "right_arm", terminator: "t" }),
    Object.freeze({ name: "left_leg", terminator: "u" }),
    Object.freeze({ name: "right_leg", terminator: "v" }),
    Object.freeze({ name: "head", terminator: "w" }),
  ]);
  const MIN_LENGTH = 36;

  class MwoCodecError extends Error {
    constructor(message) {
      super(message);
      this.name = "MwoCodecError";
    }
  }

  function encodeValue(value, minCharacters, maxCharacters = minCharacters) {
    if (!Number.isSafeInteger(value) || value < 0) {
      throw new MwoCodecError(`Cannot encode invalid value: ${value}`);
    }
    let remainder = value;
    let encoded = "";
    for (let index = 0; index < minCharacters; index += 1) {
      encoded += ALPHABET[remainder & 0x3f];
      remainder = Math.floor(remainder / 64);
    }
    while (remainder > 0 && encoded.length < maxCharacters) {
      encoded += ALPHABET[remainder & 0x3f];
      remainder = Math.floor(remainder / 64);
    }
    if (remainder > 0) throw new MwoCodecError(`Value is too large to encode: ${value}`);
    return encoded;
  }

  function createReader(text) {
    return { text, position: 0 };
  }

  function readExactly(reader, characterCount) {
    let value = 0;
    for (let index = 0; index < characterCount; index += 1) {
      const character = reader.text[reader.position];
      const bits = DECODE.get(character);
      if (bits === undefined) {
        throw new MwoCodecError(`Unexpected character at ${reader.position + 1}: ${character ?? "end of code"}`);
      }
      value += bits * (64 ** index);
      reader.position += 1;
    }
    return value;
  }

  function readAvailable(reader, maxCharacters) {
    let value = 0;
    let readCount = 0;
    while (readCount < maxCharacters) {
      const bits = DECODE.get(reader.text[reader.position]);
      if (bits === undefined) break;
      value += bits * (64 ** readCount);
      reader.position += 1;
      readCount += 1;
    }
    if (!readCount) {
      throw new MwoCodecError(`Expected an encoded value at ${reader.position + 1}`);
    }
    return value;
  }

  function decode(input) {
    const code = String(input || "").trim();
    if (code.length < MIN_LENGTH || code[0] !== "A") {
      throw new MwoCodecError("This is not a supported MWO loadout code.");
    }

    const reader = createReader(code);
    reader.position = 1;
    const chassisId = readExactly(reader, 2);
    const armorStructure = readExactly(reader, 1);
    const heatsinksGuidance = readExactly(reader, 1);
    const actuatorState = readExactly(reader, 1);
    const isOmni = Boolean(heatsinksGuidance & 0x8);
    const components = {};

    for (const definition of COMPONENTS) {
      const component = {
        armor: readExactly(reader, 2),
        omnipod: null,
        itemIds: [],
      };
      if (definition.name !== "centre_torso" && isOmni) {
        component.omnipod = readAvailable(reader, 6);
      }
      while (reader.text[reader.position] === "|") {
        reader.position += 1;
        component.itemIds.push(readAvailable(reader, 6));
      }
      const terminator = reader.text[reader.position];
      if (terminator !== definition.terminator) {
        throw new MwoCodecError(
          `Malformed ${definition.name} section: expected ${definition.terminator}, found ${terminator ?? "end of code"}`,
        );
      }
      reader.position += 1;
      components[definition.name] = component;
    }

    const rearArmor = {
      centre_torso: readExactly(reader, 2),
      left_torso: readExactly(reader, 2),
      right_torso: readExactly(reader, 2),
    };
    if (reader.position !== code.length) {
      throw new MwoCodecError(`Unexpected trailing data at ${reader.position + 1}`);
    }

    return {
      chassisId,
      isOmni,
      actuatorState,
      upgrades: {
        armorType: armorStructure & 0x7,
        structureType: armorStructure >> 3,
        heatSinkType: (heatsinksGuidance & 0x7) >> 1,
        artemis: Boolean(heatsinksGuidance & 0x1),
      },
      components,
      rearArmor,
    };
  }

  function encode(loadout) {
    const isOmni = Boolean(loadout?.isOmni);
    const upgrades = loadout?.upgrades || {};
    let code = "A";
    code += encodeValue(Number(loadout?.chassisId), 2);
    code += encodeValue(
      (Number(upgrades.structureType || 0) << 3) | Number(upgrades.armorType || 0),
      1,
    );
    code += encodeValue(
      (Number(upgrades.heatSinkType || 0) << 1)
        | (upgrades.artemis ? 1 : 0)
        | (isOmni ? 0x8 : 0),
      1,
    );
    code += encodeValue(Number(loadout?.actuatorState || 0), 1);

    for (const definition of COMPONENTS) {
      const component = loadout?.components?.[definition.name] || {};
      code += encodeValue(Number(component.armor || 0), 2);
      if (definition.name !== "centre_torso" && isOmni) {
        const omnipod = Number(component.omnipod);
        if (!Number.isSafeInteger(omnipod) || omnipod <= 0) {
          throw new MwoCodecError(`Missing omnipod for ${definition.name}`);
        }
        code += encodeValue(omnipod, 3, 6);
      }
      for (const itemId of component.itemIds || []) {
        code += `|${encodeValue(Number(itemId), 1, 6)}`;
      }
      code += definition.terminator;
    }

    code += encodeValue(Number(loadout?.rearArmor?.centre_torso || 0), 2);
    code += encodeValue(Number(loadout?.rearArmor?.left_torso || 0), 2);
    code += encodeValue(Number(loadout?.rearArmor?.right_torso || 0), 2);
    return code;
  }

  const api = Object.freeze({
    ALPHABET,
    COMPONENTS,
    MwoCodecError,
    decode,
    encode,
    encodeValue,
  });

  root.MWOCodec = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
}(typeof globalThis !== "undefined" ? globalThis : this));
