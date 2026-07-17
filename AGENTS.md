# Agent Rules

- Do not start, inspect, probe, or verify the local preview/dev server unless the user explicitly asks for it.
- The user manually handles whether the server is running and whether the app can be opened.

## Simulation UI Rules

- Keep simulation controls and HUD placement close to the in-game layout when practical; otherwise prioritize clear sightlines, comfortable reach, and immediate readability.
- Place elapsed time, total damage, DPS, and heat together immediately above the weapon firing controls.

## Quirk Parsing Rules

- Quirk names are parsed case-insensitively. Normalize quirk names and weapon lookup keys before matching.
- A multiplier quirk whose benefit is a reduction, such as cooldown, heat, duration, and spread, is stored as a negative value. Convert it to a positive summary value with `Math.max(0, -value)`.
- A multiplier quirk whose benefit is an increase, such as range, velocity, heat dissipation, and ROF, is stored as a positive value. Convert it with `Math.max(0, value)`.
- Summary values stack the general quirk, the weapon family quirk, and the best matching weapon-specific quirk. For example, `all_cooldown_multiplier + energy_cooldown_multiplier + best energy weapon cooldown`.
- Weapon-specific quirks are detected by stripping the stat suffix, such as `_cooldown_multiplier`, `_heat_multiplier`, `_range_multiplier`, `_velocity_multiplier`, `_duration_multiplier`, or `_spread_multiplier`, then matching the remaining prefix against weapon names, display names, and aliases in equipment data.
- Do not hard-code individual weapon names when the equipment data can infer the weapon family. Use the equipment weapon `hardpoint_type` or `stats.type` family: `energy`, `missile`, or `ballistic`.
- Energy laser rules: laser-specific quirks affect laser weapons, energy quirks affect all energy weapons, PPC weapons are affected by energy quirks, and standard laser quirks are separate from ER or pulse laser variants when the quirk name distinguishes them.
- Cooldown and heat summaries include `MAX`, `ENERGY`, `MISSILE`, and `BALLISTIC`. Heat summaries also include `HEAT DISSIPATION` after those entries.
- Range and velocity summaries include `MAX`, `ENERGY`, `MISSILE`, and `BALLISTIC`.
- Duration summaries include `ENERGY DURATION`, `MG ROF`, `RAC ROF`, and `AMS ROF` only when AMS ROF exists.
- The top-level summary includes `듀레이션/ROF`. Show laser duration and the highest ROF value as one row in the form `5% / 3% rof`; use `-%` for missing duration and `- rof` for missing ROF.
- Spread summaries do not have an energy entry. Keep the missing energy position as an empty slot for visual consistency.
- Durability summaries are total-only, not per body part. `MAX` is armor plus structure, followed by armor, structure, and critical-hit prevention.

- The top-level `쿼크 서머리` is its own info card. Do not render it inside the `QUIRKS` list/card.
- The `쿼크 서머리` card currently contains cooldown, heat, durability, range, velocity, and owned special quirk categories. Special categories currently recognized are ECM, jump jets, and NARC duration.

## Optimization Notes

- Treat extracted mech, equipment, loadout, omnipod, and quirk numeric values as effectively static unless there is a specific data update or extraction change.
- Prefer browser-memory caches for repeated derived values such as mech summaries, quirk summaries, hardpoint badges, and weapon quirk lookup indexes.
- Do not persist derived summary/cache values into `public/data/*.json` unless there is a deliberate data-generation reason.
- When optimizing stats views, avoid recalculating all mech rows or rebuilding the full stats list for selection-only changes; update the active row and detail panel from the current rendered entries.
- For weapon-specific quirk matching, build reusable lookup indexes from equipment data instead of repeatedly scanning every weapon for every mech and category.

## JSON Extraction Rules

- Use `tools/extract_mwo_data.py` for deliberate game-data updates. The generated browser data lives in `public/data/index.json`, `mechs.json`, `equipment.json`, `loadouts.json`, and `omnipods.json`.
- The local MWO installation is currently `F:\Game\Steam\steamapps\common\MechWarrior Online`. The extractor reads `Game\GameData.pak`, `Game\Localized\English_xml.pak`, and the chassis archives under `Game\mechs\*.pak`.
- A full extraction command is `python tools/extract_mwo_data.py --game-dir "F:\Game\Steam\steamapps\common\MechWarrior Online" --out public\data`.
- Full extraction refreshes every generated dataset from the currently installed game and can include unrelated balance-data or numeric-format changes. For a hardpoint-only refresh that preserves the existing equipment and loadout data, use `python tools/extract_mwo_data.py --game-dir "F:\Game\Steam\steamapps\common\MechWarrior Online" --out public\data --hardpoints-only`.
- Standard and omnipod weapon capacities come from each chassis archive's `*-hardpoints.xml`. Match the MDF or omnipod hardpoint `ID` to `<Hardpoint id="...">` and store the number of direct `<WeaponSlot>` children as `weapon_slots`.
- The MDF hardpoint `Slots` attribute is not the number of equippable weapons. Do not use it for hardpoint capacity. For example, an MDF value of `Slots="10"` can map to only three `<WeaponSlot>` entries.
- Do not infer maximum hardpoint capacity from the stock loadout. Stock equipment describes installed weapons, not all weapons the chassis can mount.
- App-side hardpoint counts, fitting limits, component badges, mech-list badges, and stats must use `hardpoint.weapon_slots`. Use a fallback of one only when the chassis hardpoint mapping genuinely has no matching entry.
- Preserve raw extracted attributes such as `Slots`; add `weapon_slots` instead of overwriting source fields with a different meaning.
- Hardpoint regression checks: `UM-SC` must be ballistic 2, energy 3, AMS 1; `UM-R60` ballistic 4, energy 2; `UM-R60L` ballistic 2, energy 4; and `HBK-4G` ballistic 3.
- After extraction changes, validate both standard mech definitions and omnipod definitions, run Python and JavaScript syntax checks, run `git diff --check`, and inspect generated-file scope before keeping the result.
