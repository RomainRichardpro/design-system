# CLAUDE.md — Design System Romain Richard

Ce fichier est lu automatiquement par Claude Code à chaque session.
Il constitue le contrat permanent du projet : règles, conventions, décisions, workflow.
Ne pas modifier sans validation de Romain.

---

## 1. Contexte du projet

Design System personnel open-source de Romain Richard.
Indépendant de tout employeur — portable dans le temps.

- **GitHub** : https://github.com/RomainRichardpro/design-system
- **Figma** : fichier `skRy27piDeBGQwD8Bi0EAU` ("POC-NEW-DS")
- **Licence** : MIT

Romain est **Lead System Designer** (6 ans de design, 2 ans de spécialisation DS).
Il est aussi Lead System Designer chez Bpifrance depuis février 2025.

---

## 2. Rôles

| Qui | Rôle |
|---|---|
| Romain | Lead Designer — conception Figma, décisions design, validation |
| Claude (claude.ai) | Tech Lead / Architecte — réflexion, architecture, composants complexes |
| Claude Code | Exécution — remplacement de fichiers, tâches répétitives, automatisation |

**Claude Code ne prend pas de décisions d'architecture.** Il exécute ce qui a été décidé avec claude.ai.

---

## 3. Stack technique

```
pnpm + Turborepo (monorepo)
TypeScript strict (pas de any)
React
CSS Modules + CSS Variables
Storybook 7
Vitest + Testing Library + jest-axe
```

---

## 4. Structure du monorepo

```
design-system/
├── packages/
│   ├── tokens/          # Design tokens → CSS Variables + JSON
│   ├── react/           # Composants React
│   └── storybook/       # Documentation et vitrine
├── CLAUDE.md
├── turbo.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

**Namespaces** : `@romainrichardpro/tokens`, `@romainrichardpro/react`, `@romainrichardpro/storybook`

---

## 5. Tokens

### Source de vérité
Figma Variables — fichier `skRy27piDeBGQwD8Bi0EAU`

### Collections Figma
- Primitives
- Semantic Numbers
- Semantic Colors (light / dark)
- Typography

### Build (Style Dictionary v4)
- `usesDtcg: true`
- Transformers custom : `color/figma-hex`, `number/px-or-opacity`
- Format Figma JSON propriétaire : `$value` est un objet `{hex, alpha, components}` — toujours lire via `token.original.$value`
- Sorties : `colors-light.css`, `colors-dark.css`, `numbers.css`, `typography.css`, `tokens.json`

### Nomenclature
Échelle numérique (`spacing.01`, `spacing.02`…) — pas de t-shirt sizing.

### Exports package tokens
```
@romainrichardpro/tokens/css/colors-light
@romainrichardpro/tokens/css/colors-dark
@romainrichardpro/tokens/css/numbers
@romainrichardpro/tokens/css/typography
```

### Imports Storybook preview
```js
@romainrichardpro/tokens/css/colors-light
@romainrichardpro/tokens/css/numbers
@romainrichardpro/tokens/css/typography
```

---

## 6. Règles absolues — à ne jamais enfreindre

### 6.1 Figma est la source de vérité
- Toujours lire Figma avant d'implémenter ou modifier un composant.
- Reproduire exactement ce qui est dans Figma : variants, props, états, tailles, tokens.
- Si quelque chose semble étrange ou incohérent : **le signaler, mais l'implémenter quand même**.
- C'est Romain qui décide si c'est une erreur ou une intention design.
- **Ne jamais corriger, améliorer ou interpréter le design de sa propre initiative.**

### 6.2 Anti-régression
- Identifier le périmètre exact de chaque changement avant de toucher au code.
- Ne modifier que ce périmètre — rien d'autre.
- Ne jamais modifier ce qui fonctionne déjà.
- Valider mentalement chaque ligne modifiée avant de l'écrire.

### 6.3 Accessibilité (WCAG 2.1 AA — non négociable)
- Navigation clavier complète
- Focus visible
- ARIA correct
- Compatibilité lecteurs d'écran
- Contrastes suffisants
- Logique d'états accessible

### 6.4 Sécurité
- Pas de `dangerouslySetInnerHTML`
- Pas de patterns XSS
- Pas de dépendances inutiles

### 6.5 Qualité de code
- TypeScript strict — pas de `any`
- CSS Modules + CSS Variables uniquement
- Pas de Tailwind
- Pas de sur-ingénierie
- Code lisible, maintenable, documenté

---

## 7. Workflow composants

### Ordre impératif pour chaque nouveau composant ou modification

```
1. Lire Figma via MCP (get_design_context)
2. Faire le diff avec le code existant
3. Identifier le périmètre exact des changements
4. Implémenter uniquement ce qui a changé
5. Vérifier les tests existants — ne pas les casser
6. Ajouter ou mettre à jour les tests
7. Mettre à jour la story Storybook
8. Push GitHub
```

### IDs Figma — format
- URLs Figma : format tiret (`18-765`)
- Appels MCP : format deux-points (`18:765`)

---

## 8. Conventions composants React

### API
- `children` pour le contenu textuel (pas de prop `label`)
- Props booléennes sans valeur : `<Button loading />` pas `<Button loading={true} />`
- `forwardRef` systématique
- `displayName` défini

### CSS Modules
- Classes : kebab-case avec préfixe sémantique (`level-primary`, `size-m`, `is-loading`)
- États disabled : sélecteur `:disabled` natif uniquement — **pas** `[aria-disabled='true']`
- L'attribut `aria-disabled` sert à la communication avec les lecteurs d'écran, pas au style

### États loading
- Pas de `disabled` HTML natif en état loading
- `aria-busy="true"` + `aria-disabled="true"` exposés
- Click bloqué via handler (`if (loading) return`)
- `loadingLabel` (défaut : `"Chargement en cours"`) dans un `<span class="srOnly">`

### data-attributes
- `data-level` et `data-size` obligatoires sur le `<button>` natif (utilisés par les tests)

---

## 9. Composants existants

### Button (`packages/react/src/components/Button/`)
- **Commit** : `638ceff`
- **Fichiers** : `Button.tsx`, `Button.module.css`, `Button.test.tsx`
- **Story** : `packages/storybook/src/stories/components/Button.stories.tsx`
- **API** : `children`, `level` (`primary`|`secondary`), `size` (`xs`|`s`|`m`|`l`), `loading`, `loadingLabel`, `disabled` + props HTML natives
- **Tokens Primary** : `--background-accent-default` (noir), `border-radius: var(--radius-03)`
- **Tokens Secondary** : `--background-accent-inverse-default`, `border: var(--border-width-03) solid var(--border-accent-default)`, `border-radius: var(--radius-03)`
- **Spinner** : SVG inline, 16px en XS / 24px en S-M-L
- **Tests** : 20 tests — 20 passants

---

## 10. Tests

### Couverture minimale par composant
- Rendu de base (children, props par défaut, props custom, className, props HTML)
- États disabled (désactivé, click bloqué, aria-disabled)
- États loading (aria-busy, texte sr-only, click bloqué)
- Interactions (click, clavier Enter, clavier Space)
- Accessibilité axe (default, secondary, disabled, loading)

### Commandes
```bash
# Depuis packages/react
pnpm test --reporter=verbose

# Depuis la racine
pnpm --filter @romainrichardpro/react test
```

---

## 11. Storybook

### Commande
```bash
pnpm --filter @romainrichardpro/storybook dev
```

### Conventions stories
- Titre : `Composants/NomComposant`
- `tags: ['autodocs']`
- Documentation en **français**
- Stories obligatoires : Default, États (Disabled, Loading), Tailles, Niveaux, Playground
- `layout: 'centered'` par défaut
- `argTypes` documentés en français

---

## 12. Figma MCP

### Outil principal
`get_design_context` avec `fileKey` + `nodeId` explicites

### Clé de fichier
`skRy27piDeBGQwD8Bi0EAU`

### Variables
`get_variable_defs` pour accéder aux tokens Figma

### Collections Figma (pour référence)
- Typography
- Primitives
- Semantic Numbers
- Semantic Colors light/dark

---

## 13. Décisions techniques définitives

Ces décisions sont prises et ne se remettent pas en question sauf demande explicite de Romain.

| Décision | Choix |
|---|---|
| Monorepo | pnpm + Turborepo |
| Framework | React + TypeScript strict |
| Style | CSS Modules + CSS Variables |
| Tests | Vitest + Testing Library + jest-axe |
| Documentation | Storybook 7, en français |
| Tokens | Style Dictionary v4, `usesDtcg: true` |
| Nomenclature tokens | Échelle numérique (pas t-shirt) |
| Figma | Source de vérité absolue |
| Code Connect | Prévu — à mettre en place après stabilisation des composants |
| Component tokens | Intentionnellement minimaliste — pas de sur-tokenisation |

---

## 14. Prochaines étapes

1. Composant **Checkbox** (node Figma `133:927`)
2. **Code Connect** — mapping Figma ↔ React
3. **GitHub Actions** CI/CD
4. Automatisation progressive du workflow

---

## 15. Ce que Claude Code ne doit pas faire

- Modifier l'architecture sans validation de claude.ai et Romain
- Prendre des décisions de design
- Corriger ce qui semble étrange dans Figma
- Toucher à des fichiers hors du périmètre de la tâche en cours
- Supprimer des tests existants
- Introduire des dépendances non validées
- Utiliser `any` en TypeScript
- Utiliser `dangerouslySetInnerHTML`
- Utiliser Tailwind
---

## 16. Règles Git

- Toujours travailler directement sur `main`
- Ne jamais créer de branche feature ou de PR
- Chaque session se termine par `git push origin main`
- Ce repo est un projet solo sans process de review

---

## 17. Génération d'interfaces

Avant toute génération d'interface ou de maquette Figma, consulter `COMPONENTS.md`.

Ce fichier liste :
- les composants React disponibles avec leur API exacte
- les node IDs Figma correspondants
- l'ensemble des tokens CSS à utiliser

Règle absolue : aucune valeur arbitraire (couleur hex, px hardcodé, etc.) si un token existe.

---

## 18. Workflow — Génération d'interfaces et maquettes Figma

Ce workflow permet de générer des interfaces codées conformes au DS,
puis de les exporter comme maquettes Figma.

### Étape 1 — Description (claude.ai)

Décrire l'écran en langage naturel à Claude.
Claude génère le prompt structuré pour Claude Code.

### Étape 2 — Génération du code (Claude Code)

Claude Code lit COMPONENTS.md comme référence unique et produit :
- `packages/storybook/src/stories/screens/NomEcran.tsx`
- `packages/storybook/src/stories/screens/NomEcran.module.css`
- `packages/storybook/src/stories/screens/NomEcran.stories.tsx`

Règles strictes :
- Uniquement les composants de `@romainrichardpro/react`
- Uniquement les tokens CSS de `@romainrichardpro/tokens` (variables CSS, aucune valeur arbitraire)
- Accessibilité WCAG 2.1 AA obligatoire
- Story sous `Screens/NomEcran`

### Étape 3 — Itération design (localhost:6006)

Valider le rendu dans Storybook.
Itérer via des prompts de correction jusqu'à validation complète.
Ne passer à l'étape suivante qu'une fois le rendu validé.

### Étape 4 — Génération maquette Figma (Claude Code + figma-use)

Une fois le rendu validé, utiliser figma-use (localhost:38451) pour générer
la maquette dans le fichier Figma `skRy27piDeBGQwD8Bi0EAU`.

Règles :
- Page cible : "Screens" (créer si elle n'existe pas)
- Vraies instances des composants DS obligatoires :
  - Button → node ID `18:797`
  - Checkbox → node ID `133:998`
- Variables Figma à lier sur les éléments natifs via leur nom slash :
  `background/neutral/default`, `background/neutral/alt`,
  `text/neutral/default`, `text/neutral/alt`,
  `text/brand/secondary/default`, `spacing/*`, `radius/*`, etc.
- Si figma-use ne supporte pas la liaison de variables sur un node,
  utiliser la valeur résolue et le documenter dans le rapport

### Outils et leurs capacités

| Outil | Lecture | Écriture nodes | Variables liées |
|---|---|---|---|
| MCP officiel Figma | ✅ | ❌ | ❌ |
| figma-use (localhost:38451) | ✅ | ✅ | À confirmer par test |

### Identification des composants DS dans le DOM

Tous les composants portent `data-component="ds-rr-[nom]"` sur leur nœud racine.
Vérification rapide dans DevTools Console :

```js
document.querySelectorAll('[data-component^="ds-rr"]')
  .forEach(el => console.log(el.dataset.component))
```
