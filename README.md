# Design System — Romain Richard

Design System personnel open-source, conçu et développé par [Romain Richard](https://www.linkedin.com/in/romain-richard-digital/), Lead System Designer.

Figma est la source de vérité. Les tokens et composants sont définis dans Figma, puis implémentés en code et documentés dans Storybook.

---

## Stack technique

- **pnpm** — gestionnaire de paquets
- **Turborepo** — orchestration du monorepo
- **React** — bibliothèque de composants
- **TypeScript** (strict) — typage statique
- **CSS Modules** + **CSS Variables** — styles scopés et tokens
- **Style Dictionary v4** — génération des tokens
- **Storybook** — documentation et vitrine
- **Vitest** + **Testing Library** + **jest-axe** — tests unitaires et accessibilité

---

## Structure du projet

```
design-system/
├── packages/
│   ├── tokens/        # Design tokens — génération CSS Variables via Style Dictionary
│   ├── react/         # Composants React du Design System
│   └── storybook/     # Documentation, stories et vitrine
├── turbo.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

---

## Installation

```bash
# Cloner le repo
git clone https://github.com/RomainRichardpro/design-system.git
cd design-system

# Installer les dépendances
pnpm install
```

---

## Commandes

### Lancer Storybook en développement

```bash
pnpm --filter @romainrichardpro/storybook dev
```

Storybook est accessible sur [http://localhost:6006](http://localhost:6006).

### Builder les tokens

```bash
pnpm --filter @romainrichardpro/tokens build
```

Les fichiers générés sont disponibles dans `packages/tokens/build/css/`.

### Builder tout le projet

```bash
pnpm build
```

---

## Design Tokens

Les tokens sont exportés depuis Figma Variables et transformés en CSS Variables via Style Dictionary v4.

| Fichier généré | Contenu |
|---|---|
| `colors-light.css` | Tokens de couleurs — mode clair |
| `colors-dark.css` | Tokens de couleurs — mode sombre |
| `numbers.css` | Espacements, tailles, radius, bordures |
| `typography.css` | Familles, tailles et graisses de police |
| `tokens.json` | Tous les tokens au format JSON |

### Import dans un projet

```css
@import '@romainrichardpro/tokens/css/colors-light';
@import '@romainrichardpro/tokens/css/numbers';
@import '@romainrichardpro/tokens/css/typography';
```

---

## Roadmap

- [x] Phase 1 — Foundation : monorepo, tokens, Storybook
- [ ] Phase 2 — Composants : Button, Checkbox
- [ ] Phase 3 — Documentation complète dans Storybook
- [ ] Phase 4 — Code Connect (Figma ↔ code)
- [ ] Phase 5 — CI/CD, publication, automatisation

---

## Licence

MIT
