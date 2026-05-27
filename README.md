# Blue Mage Data

Canonical Blue Mage spell data for [Blue Academy](https://github.com/RoarkGit/Blue-Academy) and [Strago](https://github.com/RoarkGit/Strago).

## Contents

### `spell.yaml`

Structured data for every Blue Mage spell, including:

| Field | Description |
|---|---|
| `id` | Kebab-case identifier |
| `name` | Display name |
| `number` | Spell number in the Blue Mage spellbook |
| `actionType` | `Spell` or `Ability` |
| `spellType` | `Magic` or `Physical` |
| `spellAspect` | Element (Earth, Fire, Ice, Lightning, Water, Wind) |
| `rank` | Rarity rank |
| `range` | Targeting range in yalms |
| `radius` | AoE radius in yalms (if applicable) |
| `cast` | Cast time in seconds |
| `recast` | Recast time in seconds |
| `mp` | MP cost (optional) |
| `hp` | HP cost as a percentage (optional) |
| `face` | `true` if the spell requires facing targets (optional) |
| `location` | Where the spell can be learned |
| `description` | In-game tooltip description |
| `target` | Array of valid targets (`enemy`, `self`, `ally`, etc.) |

### `images/`

PNG spell icons for every spell, named by spell `id` (e.g. `water_cannon.png`).

### `weeklyTargets.yaml`

Weekly rotation data for the Masked Carnivale and duty roulettes, organized by expansion and difficulty tier.

## Usage

```bash
npm install
```

This package is intended to be consumed as a submodule or dependency. Consumer repositories are automatically notified via GitHub Actions dispatch on every push to `main`.

## Consumers

- **[Blue Academy](https://github.com/RoarkGit/Blue-Academy)** — Community knowledge site for FFXIV Blue Mage players, covering guides, spell loadouts, and other resources.
- **[Strago](https://github.com/RoarkGit/Strago)** — Discord bot for the Blue Academy server with commands for spell lookup, character registration, and other Blue Mage utilities.
