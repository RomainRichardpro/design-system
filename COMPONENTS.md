# Contrat Composants & Tokens — Design System @romainrichardpro

Ce fichier est le contrat de référence pour la génération d'interfaces par Claude Code. Il liste les composants React disponibles, leur API exacte, leur node Figma associé, ainsi que l'ensemble des tokens CSS à utiliser.

**Règle absolue** : toute interface générée doit exclusivement utiliser les composants et tokens listés ici. Aucune valeur arbitraire (couleur hex, px hardcodé, etc.) n'est autorisée si un token équivalent existe.

---

## Convention d'identification

Tous les composants du DS exposent un attribut `data-component` sur leur nœud racine.

Format : `data-component="ds-rr-[nom]"`

| Composant | Valeur |
|---|---|
| `<Button>` | `data-component="ds-rr-button"` |
| `<Checkbox>` | `data-component="ds-rr-checkbox"` |

Cet attribut est **toujours présent**, non configurable via props, et s'ajoute aux autres attributs `data-*` existants.

Usages :
- **Inspection** : DevTools → attribut `data-component` visible immédiatement sur n'importe quel élément
- **Tests** : `document.querySelectorAll('[data-component^="ds-rr"]')` pour lister tous les composants DS dans une page
- **Debugging** : identifier instantanément ce qui vient du DS vs ce qui est du code local
- **Audit** : base pour des outils d'analyse automatique d'utilisation des composants

---


## Fichier Figma

- File key : `skRy27piDeBGQwD8Bi0EAU`
- Nom : POC-NEW-DS
- URL : https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU

---

## Composants disponibles

### `<Button>`

#### Import

```tsx
import { Button } from '@romainrichardpro/react';
```

#### Figma

- Node ID : `18:797`
- Composant Figma : Button

#### Props

| Prop | Type | Défaut | Description |
|---|---|---|---|
| children | `React.ReactNode` | — | Contenu du bouton (label) |
| level | `'primary' \| 'secondary' \| 'tertiary' \| 'ghost' \| 'danger'` | `'primary'` | Niveau visuel du bouton |
| size | `'xs' \| 's' \| 'm' \| 'l'` | `'m'` | Taille du bouton |
| loading | `boolean` | `false` | État de chargement (aria-busy, bloque le clic) |
| loadingLabel | `string` | `'Chargement en cours'` | Label accessible pendant le chargement |
| disabled | `boolean` | `false` | État désactivé natif |
| onClick | `() => void` | — | Handler de clic |
| type | `'button' \| 'submit' \| 'reset'` | `'button'` | Type HTML |

#### Attributs HTML générés

- `data-level` : valeur de `level`
- `data-size` : valeur de `size`

#### Exemples d'usage

```tsx
// Bouton primaire standard
<Button level="primary" size="m">Confirmer</Button>

// Bouton secondaire petit
<Button level="secondary" size="s">Annuler</Button>

// Bouton en chargement
<Button level="primary" loading>Enregistrer</Button>

// Bouton désactivé
<Button level="primary" disabled>Non disponible</Button>

// Bouton danger
<Button level="danger" size="m">Supprimer</Button>
```

#### Tokens utilisés par ce composant

- Couleurs : `--color-background-brand-primary-*`, `--color-text-brand-primary-*`, `--color-border-brand-primary-*`
- Radius : `--radius-02` (6px)
- Spacing : `--spacing-04` (8px), `--spacing-05` (12px), `--spacing-06` (16px)
- Tailles : `--size-09` (32px sm), `--size-10` (40px md), `--size-11` (48px lg)
- Typographie : `--font-size-14`, `--font-weight-medium`

---

### `<Checkbox>`

#### Import

```tsx
import { Checkbox } from '@romainrichardpro/react';
```

#### Figma

- Node ID : `133:998`
- Composant Figma : Checkbox

#### Props

| Prop | Type | Défaut | Description |
|---|---|---|---|
| label | `string` | — | Label visible associé à la checkbox |
| checked | `boolean` | `false` | État coché |
| indeterminate | `boolean` | `false` | État indéterminé |
| disabled | `boolean` | `false` | État désactivé |
| onChange | `(checked: boolean) => void` | — | Handler de changement |
| id | `string` | — | ID HTML (pour l'association label/input) |
| name | `string` | — | Attribut name HTML |
| value | `string` | — | Valeur HTML |

#### Exemples d'usage

```tsx
// Checkbox non cochée
<Checkbox label="Accepter les CGU" onChange={(v) => console.log(v)} />

// Checkbox cochée par défaut
<Checkbox label="Recevoir les notifications" checked onChange={(v) => console.log(v)} />

// Checkbox indéterminée
<Checkbox label="Tout sélectionner" indeterminate onChange={(v) => console.log(v)} />

// Checkbox désactivée
<Checkbox label="Option non disponible" disabled />
```

#### Tokens utilisés par ce composant

- Couleurs : `--color-background-brand-primary-*`, `--color-border-brand-primary-*`, `--color-background-disabled`, `--color-border-disabled`
- Radius : `--radius-01` (4px)
- Tailles : `--size-06` (16px — taille de la box)
- Spacing : `--spacing-02` (4px gap interne)
- Focus : `--color-focus`

---

## Tokens disponibles

Source : `@romainrichardpro/tokens`

Imports CSS disponibles :

- `@romainrichardpro/tokens/css/colors-light` — mode clair (défaut)
- `@romainrichardpro/tokens/css/colors-dark` — mode sombre
- `@romainrichardpro/tokens/css/numbers` — espacements, tailles, radius, bordures
- `@romainrichardpro/tokens/css/typography` — typographie

---

### Couleurs — Mode clair

#### Focus

| Token | Valeur |
|---|---|
| `--color-focus` | `#000000` |

#### Background

| Token | Valeur | Usage |
|---|---|---|
| `--color-background-disabled` | `#B0B0B0` | Fond désactivé |
| `--color-background-brand-primary-default` | `#000000` | Fond brand primaire |
| `--color-background-brand-primary-hover` | `#262626` | |
| `--color-background-brand-primary-active` | `#3D3D3D` | |
| `--color-background-brand-primary-inverse-default` | `#E7E7E7` | Fond brand primaire inversé |
| `--color-background-brand-primary-inverse-hover` | `#D1D1D1` | |
| `--color-background-brand-primary-inverse-active` | `#B0B0B0` | |
| `--color-background-brand-secondary-default` | `#8546FF` | Fond brand secondaire (violet) |
| `--color-background-brand-secondary-hover` | `#6E13F3` | |
| `--color-background-brand-secondary-active` | `#590BCC` | |
| `--color-background-brand-secondary-inverse-default` | `#F4F1FF` | |
| `--color-background-brand-secondary-inverse-hover` | `#DAD0FF` | |
| `--color-background-brand-secondary-inverse-active` | `#BFABFF` | |
| `--color-background-accent-default` | `#000000` | |
| `--color-background-accent-inverse-default` | `#E7E7E7` | |
| `--color-background-status-success-default` | `#1E9B53` | Succès |
| `--color-background-status-success-inverse-default` | `#F1FCF5` | |
| `--color-background-status-info-default` | `#1F5BF1` | Info |
| `--color-background-status-info-inverse-default` | `#EEF5FF` | |
| `--color-background-status-warning-default` | `#DB7904` | Avertissement |
| `--color-background-status-warning-inverse-default` | `#FFFBEB` | |
| `--color-background-status-error-default` | `#E31F1F` | Erreur |
| `--color-background-status-error-inverse-default` | `#FEF2F2` | |
| `--color-background-neutral-default` | `#FFFFFF` | Fond neutre (page) |
| `--color-background-neutral-alt` | `#F6F6F6` | Fond alternatif |
| `--color-background-neutral-raised` | `#D1D1D1` | Fond surélevé |
| `--color-background-neutral-inverse` | `#000000` | Fond inversé |

#### Border

| Token | Valeur |
|---|---|
| `--color-border-disabled` | `#B0B0B0` |
| `--color-border-brand-primary-default` | `#000000` |
| `--color-border-brand-primary-inverse-default` | `#F6F6F6` |
| `--color-border-brand-secondary-default` | `#8546FF` |
| `--color-border-brand-secondary-inverse-default` | `#F4F1FF` |
| `--color-border-accent-default` | `#000000` |
| `--color-border-status-success-default` | `#2FCC71` |
| `--color-border-status-info-default` | `#357BFC` |
| `--color-border-status-warning-default` | `#F7A109` |
| `--color-border-status-error-default` | `#F53E3E` |
| `--color-border-neutral-default` | `#FFFFFF` |
| `--color-border-neutral-alt` | `#F6F6F6` |
| `--color-border-neutral-raised` | `#D1D1D1` |
| `--color-border-neutral-inverse` | `#000000` |

#### Text

| Token | Valeur | Usage |
|---|---|---|
| `--color-text-disabled` | `#262626` | Texte désactivé |
| `--color-text-brand-primary-default` | `#000000` | Texte brand primaire |
| `--color-text-brand-primary-on-default` | `#FFFFFF` | Texte sur fond brand primaire |
| `--color-text-brand-secondary-default` | `#8546FF` | Texte brand secondaire |
| `--color-text-brand-secondary-on-default` | `#FFFFFF` | |
| `--color-text-accent-default` | `#000000` | |
| `--color-text-accent-on-default` | `#FFFFFF` | |
| `--color-text-status-success-default` | `#1E9B53` | |
| `--color-text-status-info-default` | `#1F5BF1` | |
| `--color-text-status-warning-default` | `#DB7904` | |
| `--color-text-status-error-default` | `#E31F1F` | |
| `--color-text-neutral-default` | `#000000` | Texte courant |
| `--color-text-neutral-alt` | `#888888` | Texte secondaire / placeholder |
| `--color-text-neutral-raised` | `#262626` | Texte surélevé |
| `--color-text-neutral-inverse` | `#FFFFFF` | Texte sur fond sombre |

#### Icon

| Token | Valeur |
|---|---|
| `--color-icon-disabled` | `#262626` |
| `--color-icon-brand-primary-default` | `#000000` |
| `--color-icon-brand-primary-on-default` | `#FFFFFF` |
| `--color-icon-brand-secondary-default` | `#8546FF` |
| `--color-icon-neutral-default` | `#000000` |
| `--color-icon-neutral-alt` | `#888888` |
| `--color-icon-neutral-inverse` | `#FFFFFF` |

---

### Numbers — Espacements, tailles, radius, bordures

#### Border width

| Token | Valeur |
|---|---|
| `--border-width-00` | `0px` |
| `--border-width-01` | `1px` |
| `--border-width-02` | `1.5px` |
| `--border-width-03` | `2px` |
| `--border-width-04` | `3px` |

#### Border radius

| Token | Valeur |
|---|---|
| `--radius-00` | `0px` |
| `--radius-01` | `4px` |
| `--radius-02` | `6px` |
| `--radius-03` | `8px` |
| `--radius-04` | `10px` |
| `--radius-05` | `12px` |
| `--radius-06` | `16px` |
| `--radius-07` | `24px` |
| `--radius-08` | `32px` |

#### Tailles (largeur / hauteur de composants)

| Token | Valeur |
|---|---|
| `--size-00` | `0px` |
| `--size-01` | `2px` |
| `--size-02` | `4px` |
| `--size-03` | `6px` |
| `--size-04` | `8px` |
| `--size-05` | `12px` |
| `--size-06` | `16px` |
| `--size-07` | `20px` |
| `--size-08` | `24px` |
| `--size-09` | `32px` |
| `--size-10` | `40px` |
| `--size-11` | `48px` |
| `--size-12` | `56px` |
| `--size-13` | `64px` |

#### Espacements

| Token | Valeur |
|---|---|
| `--spacing-00` | `0px` |
| `--spacing-01` | `2px` |
| `--spacing-02` | `4px` |
| `--spacing-03` | `6px` |
| `--spacing-04` | `8px` |
| `--spacing-05` | `12px` |
| `--spacing-06` | `16px` |
| `--spacing-07` | `20px` |
| `--spacing-08` | `24px` |
| `--spacing-09` | `32px` |
| `--spacing-10` | `40px` |
| `--spacing-11` | `48px` |
| `--spacing-12` | `56px` |
| `--spacing-13` | `64px` |

---

### Typographie

| Token | Valeur |
|---|---|
| `--font-family-tagline` | `vesterbro` |
| `--font-family-title` | `inter` |
| `--font-family-text` | `inter` |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |
| `--font-weight-extrabold` | `800` |
| `--font-style-italic` | `italic` |
| `--font-size-12` | `12px` |
| `--font-size-14` | `14px` |
| `--font-size-16` | `16px` |
| `--font-size-20` | `20px` |
| `--font-size-24` | `24px` |
| `--font-size-32` | `32px` |
| `--font-size-40` | `40px` |
| `--font-size-72` | `72px` |

---

## Règles de génération d'interfaces

1. **Composants uniquement** : n'utiliser que les composants listés dans ce fichier. Ne pas inventer de composants non existants dans le DS.
2. **Tokens exclusivement** : toute valeur de couleur, espacement, taille ou radius doit référencer un token CSS variable. Aucune valeur arbitraire.
3. **Pas de style inline** : les styles sont définis via CSS Modules + CSS Variables, jamais en `style={{}}` sauf cas exceptionnel documenté.
4. **Accessibilité obligatoire** : chaque interface générée doit respecter WCAG 2.1 AA — navigation clavier, focus visible, ARIA correct, contrastes.
5. **Figma en sortie** : lors de la génération d'une maquette Figma, utiliser les node IDs listés ici pour instancier les vrais composants de la librairie DS, pas des formes génériques.
6. **Pas d'imports externes** : n'importer aucune librairie UI tierce (MUI, shadcn, Radix standalone, etc.). Le DS est la seule source.

---

## Mise à jour de ce fichier

Ce fichier doit être mis à jour à chaque nouveau composant ajouté au DS, selon ce cycle :

1. Composant implémenté dans `packages/react`
2. Testé et documenté dans Storybook
3. Code Connect configuré (node ID Figma enregistré)
4. Entrée ajoutée dans ce fichier

**Dernière mise à jour** : Phase 4 — Button + Checkbox + Code Connect actifs.
