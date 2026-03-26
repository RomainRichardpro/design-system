# Contrat Composants & Tokens — Design System @romainrichardpro
Ce fichier est le contrat de référence pour la génération d'interfaces par Claude Code. Il liste les composants React disponibles, leur API exacte, leur node Figma associé, ainsi que l'ensemble des tokens CSS à utiliser.

**Règle absolue** : 
toute interface générée doit exclusivement utiliser les composants et tokens listés ici. Aucune valeur arbitraire (couleur hex, px hardcodé, etc.) n'est autorisée si un token équivalent existe.

**Règle tokens critique** : 
les variables CSS ne portent PAS de préfixe `--color-`. Correct : `--background-neutral-default`, `--text-neutral-default`, `--border-brand-primary-default`, `--focus`. Jamais : `--color-background-*`, `--color-text-*`, `--color-border-*`, `--color-icon-*`.
---
## Convention d'identification
Tous les composants du DS exposent un attribut `data-component` sur leur nœud racine.
Format : `data-component="ds-rr-[nom]"`
| Composant | Valeur |
|---|---|
| `<Button>` | `data-component="ds-rr-button"` |
| `<Checkbox>` | `data-component="ds-rr-checkbox"` |
| `<InputContainer>` | `data-component="ds-rr-input-container"` |
| `<SupportingText>` | `data-component="ds-rr-supporting-text"` |
Usages :
- **Inspection** : DevTools → attribut `data-component` visible immédiatement
- **Tests** : `document.querySelectorAll('[data-component^="ds-rr"]')`
- **Debugging** : identifier ce qui vient du DS vs code local
- **Audit** : base pour des outils d'analyse automatique
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
#### Props
| Prop | Type | Défaut | Description |
|---|---|---|---|
| children | `React.ReactNode` | — | Contenu du bouton (label) |
| level | `'primary' \| 'secondary' \| 'tertiary' \| 'ghost' \| 'danger'` | `'primary'` | Niveau visuel |
| size | `'xs' \| 's' \| 'm' \| 'l'` | `'m'` | Taille |
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
<Button level="primary" size="m">Confirmer</Button>
<Button level="secondary" size="s">Annuler</Button>
<Button level="primary" loading>Enregistrer</Button>
<Button level="primary" disabled>Non disponible</Button>
<Button level="danger" size="m">Supprimer</Button>
```
#### Tokens utilisés
- Couleurs : `--background-brand-primary-default`, `--text-brand-primary-on-default`, `--border-brand-primary-default`
- Radius : `--radius-02` (6px)
- Spacing : `--spacing-04` (8px), `--spacing-05` (12px), `--spacing-06` (16px)
- Tailles : `--size-09` (32px), `--size-10` (40px), `--size-11` (48px)
- Typographie : `--font-size-14`, `--font-weight-medium`
---
### `<Checkbox>`
#### Import
```tsx
import { Checkbox } from '@romainrichardpro/react';
```
#### Figma
- Node ID : `133:998`
#### Props
| Prop | Type | Défaut | Description |
|---|---|---|---|
| label | `string` | — | **Obligatoire.** Texte du label |
| checked | `boolean` | `false` | État coché |
| indeterminate | `boolean` | `false` | État indéterminé |
| disabled | `boolean` | `false` | Désactive l'interaction |
| hideLabel | `boolean` | `false` | Masque le label visuellement (reste dans le DOM) |
| onChange | `(checked: boolean) => void` | — | Callback au changement d'état |
| id | `string` | — | ID HTML — auto-généré via `useId()` si absent |
| className | `string` | — | Classe CSS additionnelle |
#### Exemples d'usage
```tsx
<Checkbox label="Accepter les CGU" onChange={(v) => console.log(v)} />
<Checkbox label="Recevoir les notifications" checked onChange={(v) => console.log(v)} />
<Checkbox label="Tout sélectionner" indeterminate onChange={(v) => console.log(v)} />
<Checkbox label="Option non disponible" disabled />
```
#### Tokens utilisés
- Couleurs fond : `--background-accent-default`, `--background-disabled`
- Couleurs bordure : `--border-accent-default`, `--border-disabled`
- Couleurs icône : `--icon-accent-on-default`, `--icon-disabled`
- Couleurs texte : `--text-neutral-default`, `--text-disabled`
- Focus : `--focus`
- Tailles : `--size-08` (24px — box), `--size-06` (16px — icône)
- Radius : `--radius-01` (4px — box), `--radius-02` (6px — halo focus)
- Bordures : `--border-width-02` (1.5px), `--border-width-03` (2px — halo focus)
- Espacements : `--spacing-01` (2px), `--spacing-04` (8px)
- Typographie : `--font-family-text`, `--font-size-16`, `--font-weight-regular`
---
### `<InputContainer>`
#### Import
```tsx
import { InputContainer } from '@romainrichardpro/react';
```
#### Figma
- Node ID : à compléter
#### Props
| Prop | Type | Défaut | Description |
|---|---|---|---|
| label | `string` | — | Label du champ |
| description | `string` | — | Description optionnelle sous le label |
| withDescription | `boolean` | `false` | Affiche la description |
| isRequired | `boolean` | `false` | Marque le champ comme obligatoire |
| state | `'Default' \| 'Hover' \| 'Active' \| 'Focus' \| 'Disabled' \| 'Read-only'` | `'Default'` | État du champ |
| status | `'Default' \| 'Success' \| 'Error'` | `'Default'` | Statut de validation |
| withSupportingText | `boolean` | `false` | Affiche le SupportingText sous le champ |
| supportingText | `string` | — | Texte d'aide ou d'erreur |
| placeholder | `string` | — | Placeholder du champ texte |
| icon | `LucideIcon` | — | Icône optionnelle (depuis `lucide-react`) |
| children | `React.ReactNode` | — | Remplace le TextInput par défaut (slot) |
| className | `string` | — | Classe CSS additionnelle |
#### Notes d'usage
- Par défaut, `InputContainer` rend un `TextInput` interne. Passer `children` le remplace.
- L'`id` et l'`aria-describedby` sont gérés automatiquement via `useId()`.
- Pattern d'erreur standard : `status="Error"` + `withSupportingText` + `supportingText`.
#### Exemples d'usage
```tsx
// Champ simple obligatoire
<InputContainer
  label="Adresse email"
  placeholder="jean.dupont@email.com"
  isRequired
/>
// Champ avec description
<InputContainer
  label="Mot de passe"
  placeholder="••••••••"
  withDescription
  description="8 caractères minimum"
  isRequired
/>
// Champ en erreur
<InputContainer
  label="Adresse email"
  placeholder="jean.dupont@email.com"
  status="Error"
  withSupportingText
  supportingText="Cette adresse email est invalide."
  isRequired
/>
// Champ désactivé
<InputContainer
  label="Nom d'utilisateur"
  state="Disabled"
  placeholder="jean.dupont"
/>
```
---
### `<SupportingText>`
#### Import
```tsx
import { SupportingText } from '@romainrichardpro/react';
```
> ⚠️ Dans la majorité des cas, préférer `withSupportingText` + `supportingText` sur `<InputContainer>` — l'association ARIA est gérée automatiquement. Utiliser `<SupportingText>` directement uniquement hors du pattern `InputContainer`.
#### Figma
- Node ID : à compléter
#### Props
| Prop | Type | Défaut | Description |
|---|---|---|---|
| text | `string` | — | Texte affiché |
| state | `'Default' \| 'Disabled'` | `'Default'` | État |
| status | `'Information' \| 'Success' \| 'Error'` | `'Information'` | Détermine l'icône et la couleur |
| className | `string` | — | Classe CSS additionnelle |
#### Comportement
- `status="Error"` + `state="Default"` → `role="alert"` ajouté automatiquement
- Icône automatique : `Info` (Information), `CircleCheck` (Success), `XCircle` (Error)
#### Exemples d'usage
```tsx
<SupportingText text="8 caractères minimum." status="Information" />
<SupportingText text="Mot de passe enregistré." status="Success" />
<SupportingText text="Ce champ est obligatoire." status="Error" />
<SupportingText text="Option non disponible." state="Disabled" />
```
---
## Tokens disponibles
Source : `@romainrichardpro/tokens`
Imports CSS :
- `@romainrichardpro/tokens/css/colors-light`
- `@romainrichardpro/tokens/css/colors-dark`
- `@romainrichardpro/tokens/css/numbers`
- `@romainrichardpro/tokens/css/typography`
---
### Couleurs — Mode clair
> ⚠️ Pas de préfixe `--color-`. Utiliser directement `--focus`, `--background-*`, `--text-*`, `--border-*`, `--icon-*`.
#### Focus
| Token | Valeur |
|---|---|
| `--focus` | `#000000` |
#### Background
| Token | Valeur | Usage |
|---|---|---|
| `--background-disabled` | `#B0B0B0` | Fond désactivé |
| `--background-brand-primary-default` | `#000000` | Fond brand primaire |
| `--background-brand-primary-hover` | `#262626` | |
| `--background-brand-primary-active` | `#3D3D3D` | |
| `--background-brand-primary-inverse-default` | `#E7E7E7` | |
| `--background-brand-primary-inverse-hover` | `#D1D1D1` | |
| `--background-brand-primary-inverse-active` | `#B0B0B0` | |
| `--background-brand-secondary-default` | `#8546FF` | Violet |
| `--background-brand-secondary-hover` | `#6E13F3` | |
| `--background-brand-secondary-active` | `#590BCC` | |
| `--background-brand-secondary-inverse-default` | `#F4F1FF` | |
| `--background-brand-secondary-inverse-hover` | `#DAD0FF` | |
| `--background-brand-secondary-inverse-active` | `#BFABFF` | |
| `--background-accent-default` | `#000000` | |
| `--background-accent-inverse-default` | `#E7E7E7` | |
| `--background-status-success-default` | `#1E9B53` | |
| `--background-status-success-inverse-default` | `#F1FCF5` | |
| `--background-status-info-default` | `#1F5BF1` | |
| `--background-status-info-inverse-default` | `#EEF5FF` | |
| `--background-status-warning-default` | `#DB7904` | |
| `--background-status-warning-inverse-default` | `#FFFBEB` | |
| `--background-status-error-default` | `#E31F1F` | |
| `--background-status-error-inverse-default` | `#FEF2F2` | |
| `--background-neutral-default` | `#FFFFFF` | Fond page |
| `--background-neutral-alt` | `#F6F6F6` | Fond alternatif |
| `--background-neutral-raised` | `#D1D1D1` | Fond surélevé |
| `--background-neutral-inverse` | `#000000` | Fond inversé |
#### Border
| Token | Valeur |
|---|---|
| `--border-disabled` | `#B0B0B0` |
| `--border-brand-primary-default` | `#000000` |
| `--border-brand-primary-inverse-default` | `#F6F6F6` |
| `--border-brand-secondary-default` | `#8546FF` |
| `--border-brand-secondary-inverse-default` | `#F4F1FF` |
| `--border-accent-default` | `#000000` |
| `--border-status-success-default` | `#2FCC71` |
| `--border-status-info-default` | `#357BFC` |
| `--border-status-warning-default` | `#F7A109` |
| `--border-status-error-default` | `#F53E3E` |
| `--border-neutral-default` | `#FFFFFF` |
| `--border-neutral-alt` | `#F6F6F6` |
| `--border-neutral-raised` | `#D1D1D1` |
| `--border-neutral-inverse` | `#000000` |
#### Text
| Token | Valeur | Usage |
|---|---|---|
| `--text-disabled` | `#262626` | |
| `--text-brand-primary-default` | `#000000` | |
| `--text-brand-primary-on-default` | `#FFFFFF` | Texte sur fond brand primaire |
| `--text-brand-secondary-default` | `#8546FF` | |
| `--text-brand-secondary-on-default` | `#FFFFFF` | |
| `--text-accent-default` | `#000000` | |
| `--text-accent-on-default` | `#FFFFFF` | |
| `--text-status-success-default` | `#1E9B53` | |
| `--text-status-info-default` | `#1F5BF1` | |
| `--text-status-warning-default` | `#DB7904` | |
| `--text-status-error-default` | `#E31F1F` | |
| `--text-neutral-default` | `#000000` | Texte courant |
| `--text-neutral-alt` | `#888888` | Texte secondaire / placeholder |
| `--text-neutral-raised` | `#262626` | |
| `--text-neutral-inverse` | `#FFFFFF` | Texte sur fond sombre |
#### Icon
| Token | Valeur |
|---|---|
| `--icon-disabled` | `#262626` |
| `--icon-brand-primary-default` | `#000000` |
| `--icon-brand-primary-on-default` | `#FFFFFF` |
| `--icon-brand-secondary-default` | `#8546FF` |
| `--icon-neutral-default` | `#000000` |
| `--icon-neutral-alt` | `#888888` |
| `--icon-neutral-inverse` | `#FFFFFF` |
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
#### Tailles
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
1. **Composants uniquement** : n'utiliser que les composants listés ici. Pas d'invention.
2. **Tokens exclusivement** : toute couleur, espacement, taille ou radius référence un token. Aucune valeur arbitraire.
3. **Pas de style inline** : CSS Modules + CSS Variables uniquement. Jamais `style={{}}`.
4. **Accessibilité obligatoire** : WCAG 2.1 AA — navigation clavier, focus visible, ARIA, contrastes.
5. **Pas d'imports externes** : aucune librairie UI tierce (MUI, shadcn, Radix standalone…).
6. **Figma en sortie** : utiliser les node IDs listés pour instancier les vrais composants DS.
---
## Mise à jour de ce fichier
Cycle obligatoire à chaque nouveau composant :
1. Composant implémenté dans `packages/react`
2. Testé et documenté dans Storybook
3. Code Connect configuré (node ID Figma enregistré)
4. Entrée ajoutée dans ce fichier
**Dernière mise à jour** : Phase 5 — Button + Checkbox + InputContainer + SupportingText documentés.
