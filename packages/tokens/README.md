# @romainrichardpro/tokens

Design tokens du Design System @romainrichardpro — générés depuis Figma Variables via Style Dictionary v4.

---

## Installation

```bash
pnpm add @romainrichardpro/tokens
```

## Imports CSS

```js
import '@romainrichardpro/tokens/css/colors-light';   // Mode clair (défaut)
import '@romainrichardpro/tokens/css/colors-dark';    // Mode sombre
import '@romainrichardpro/tokens/css/numbers';        // Espacements, tailles, radius, bordures
import '@romainrichardpro/tokens/css/typography';     // Typographie
```

## Build

```bash
pnpm build
```

Génère les fichiers CSS dans `build/css/` à partir des sources JSON via Style Dictionary v4.

---

## Structure des sources

```
src/
├── numbers.tokens.json           # Spacing, sizes, radius, border-width, opacity
├── colors-light-mode.tokens.json # Couleurs sémantiques — mode clair
├── colors-dark-mode.tokens.json  # Couleurs sémantiques — mode sombre
├── typo.tokens.json              # Typographie (font-family, font-weight, font-size)
└── primitives.tokens.json        # Valeurs primitives brutes — voir ci-dessous
```

---

## Rôle de `primitives.tokens.json`

`primitives.tokens.json` est le fichier source exporté directement depuis les **Variables Figma** (collection "Primitives" du fichier `skRy27piDeBGQwD8Bi0EAU`).

Il contient les valeurs brutes (couleurs hexadécimales, chiffres) qui servent de **matière première** aux tokens sémantiques. Il **n'est pas buildé directement** par Style Dictionary : les tokens sémantiques (`colors-light-mode.tokens.json`, `colors-dark-mode.tokens.json`) y font référence via des alias Figma, résolus automatiquement à l'export.

Ce fichier est conservé dans le repo pour deux raisons :

1. **Traçabilité** — conserver la source Figma telle quelle, sans transformation
2. **Référence** — permettre de retrouver la valeur primitive derrière n'importe quel token sémantique

Il ne doit pas être importé ni consommé directement dans les composants.

---

## Configuration Style Dictionary

Voir `sd.config.ts` — transformers custom :

- `color/figma-hex` — lit `token.original.$value.hex` depuis le format JSON Figma propriétaire
- `number/px-or-opacity` — convertit les valeurs numériques en `px` ou en nombre décimal selon le type
