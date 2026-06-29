# Agent Rules

- Do not start, inspect, probe, or verify the local preview/dev server unless the user explicitly asks for it.
- The user manually handles whether the server is running and whether the app can be opened.

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
