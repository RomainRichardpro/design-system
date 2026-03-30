---
name: polish-screen
description: Effectue une passe finale de qualité sur un écran du DS @romainrichardpro — alignement, espacement, cohérence, micro-détails — avant livraison.
user-invocable: true
argument-hint: "[nom de l'écran ou composant]"
---

## Préparation obligatoire

Lire `.claude/skills/ds-rr-screen/SKILL.md` avant de procéder. Le polish est la dernière étape, pas la première. Ne pas polir un écran fonctionnellement incomplet.

---

Effectuer une passe finale méticuleuse pour attraper tous les petits détails qui séparent un bon travail d'un excellent travail.

## Polish systématique

### Alignement et espacement

- **Alignement pixel-perfect** : tout s'aligne sur la grille
- **Espacements cohérents** : tous les gaps utilisent les tokens `--spacing-*` (pas de valeurs px isolées)
- **Alignement optique** : ajuster pour le poids visuel (les icônes nécessitent parfois un offset)
- **Rythme d'espacement** : variation assumée, pas les mêmes gaps partout

**Vérifier :**
- Inspecter les espacements avec les DevTools
- Chercher les valeurs px arbitraires dans le CSS
- Vérifier à plusieurs tailles de viewport

### Typographie

- **Cohérence de hiérarchie** : les mêmes éléments utilisent les mêmes tailles/graisses partout
- **Longueur de ligne** : 45–75 caractères pour le corps de texte long
- **Hauteur de ligne** : appropriée au contexte
- **Utilisation de Vesterbro** : une seule fois, pour le moment fort — pas répété
- **Inter** : variation de graisses assumée, pas uniforme

### Couleur et contraste

- **Ratios de contraste** : tous les textes respectent WCAG AA
- **Tokens cohérents** : zéro valeur hexadécimale, tout via `var(--token)`
- **`--background-neutral-raised` comme bordure** : vérifier le ratio — utiliser `--text-neutral-alt` si insuffisant
- **Pas de gris sur fond coloré** : utiliser une nuance de la couleur de fond
- **Focus indicators** : visibles avec contraste suffisant via `--focus`

### États interactifs

Chaque élément interactif a tous ses états :
- Default, Hover, Focus, Active, Disabled, Loading, Error, Success
- Transitions fluides (150–300ms, ease-out-quart)
- Aucun état abrupt (pas de changement instantané sans transition)

### Micro-interactions et transitions

- **Transitions fluides** : changements d'état animés (150–300ms)
- **Easing cohérent** : ease-out-quart/quint/expo — jamais bounce ou elastic
- **60fps** : animer uniquement `transform` et `opacity`
- **Motion intentionnelle** : la motion sert un but
- **`prefers-reduced-motion`** : respecté

### Contenu et copy

- **Terminologie cohérente** : les mêmes choses appelées de la même façon partout
- **Capitalisation cohérente** : appliquée de façon uniforme
- **Pas de lorem ipsum** : tout le contenu est réaliste et en français
- **Labels de boutons** : verbes d'action, spécifiques
- **Messages d'erreur** : utiles, précis, non-culpabilisants
- **Ponctuation cohérente** : points sur les phrases, pas sur les labels

### Formulaires et inputs

- **Tous les `InputContainer`** ont un `label` visible
- **`isRequired`** sur tous les champs obligatoires
- **Messages d'erreur** via `supportingText` — précis et en français
- **Tab order** : logique, suit le flux visuel
- **Validation** : au blur, pas à chaque frappe

### États et cas limites

- **États de chargement** : toutes les actions async ont un feedback (prop `loading` sur Button)
- **États vides** : guident vers l'action
- **États d'erreur** : message clair avec chemin de récupération
- **États de succès** : confirmation et orientation vers la suite

### Qualité du code

- Pas de `console.log` de debug
- Pas de code commenté mort
- Pas d'imports inutilisés
- Pas de TypeScript `any`
- Pas de valeurs CSS arbitraires hors tokens
- Noms de classes CSS Modules en camelCase

## Checklist finale

- [ ] Espacements via tokens `--spacing-*` partout
- [ ] Zéro valeur hexadécimale arbitraire
- [ ] Hiérarchie typographique cohérente
- [ ] Vesterbro utilisé une seule fois, au bon endroit
- [ ] Tous les états interactifs implémentés
- [ ] Toutes les transitions fluides (60fps, ease-out-quart)
- [ ] `prefers-reduced-motion` respecté
- [ ] Contenu réaliste en français
- [ ] Labels de boutons = verbes d'action
- [ ] Tous les `InputContainer` ont un label
- [ ] `isRequired` sur les champs obligatoires
- [ ] Messages d'erreur précis et utiles
- [ ] Ratios de contraste WCAG AA vérifiés
- [ ] Focus indicators visibles
- [ ] Tab order logique
- [ ] Un seul `<h1>` par écran
- [ ] Pas de `console.log`, pas de code mort
- [ ] Zéro `any` TypeScript

## Vérification finale

Avant de marquer comme terminé :
- **L'utiliser soi-même** : interagir vraiment avec l'écran
- **Tester les états** : pas seulement le happy path
- **Le test AI slop** : est-ce qu'un DA senior serait fier de signer cet écran ?

Le polish concerne les détails. Zoomer. Le regarder de loin. Chaque détail compte.
