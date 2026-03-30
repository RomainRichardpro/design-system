# Typographie

## Principes fondamentaux

### Rythme vertical

La hauteur de ligne est l'unité de base de tout espacement vertical. Si le corps de texte a `line-height: 1.5` sur `16px` (= 24px), les valeurs d'espacement doivent être des multiples de 24px. Cela crée une harmonie subconsciente — texte et espace partagent une fondation mathématique.

### Échelle et hiérarchie

L'erreur courante : trop de tailles trop proches (14px, 15px, 16px, 18px). La hiérarchie devient floue.

**Utiliser moins de tailles avec plus de contraste.** Un système à 5 niveaux couvre l'essentiel :

| Rôle | Token DS | Usage |
|------|----------|-------|
| xs | `--font-size-01` ou `--font-size-02` | Captions, métadonnées |
| sm | `--font-size-03` | UI secondaire, labels discrets |
| base | `--font-size-04` | Corps de texte |
| lg | `--font-size-05` ou `--font-size-06` | Sous-titres, texte d'accroche |
| xl+ | `--font-size-07` et au-delà | Titres, hero text |

Choisir un ratio et s'y tenir. Le contraste entre niveaux doit se ressentir immédiatement.

### Lisibilité et mesure

Utiliser `max-width: 65ch` pour les colonnes de texte long. La hauteur de ligne varie inversement à la longueur de ligne — les colonnes étroites demandent un interligne plus serré, les colonnes larges plus d'espace.

**Non-évident** : augmenter la hauteur de ligne pour le texte clair sur fond sombre. Le poids perçu est plus léger, le texte a besoin de plus d'air. Ajouter 0.05–0.1 à la valeur normale.

---

## Typographies du DS

### Vesterbro — `--font-family-tagline`

C'est une **arme éditoriale**. À utiliser avec parcimonie :
- Une seule occurrence par écran, pour le moment fort
- Titres principaux, accroche éditoriale, élément inoubliable
- Jamais pour du corps de texte, jamais pour des labels UI

Son impact vient de sa rareté. Utilisé partout, il perd toute force.

### Inter — `--font-family-body`

Porte tout le reste. La qualité ne vient pas de la fonte elle-même — elle vient de **comment on joue sur les graisses et les tailles**. Inter Regular, Medium, Semibold, Bold : ce sont quatre niveaux de hiérarchie disponibles.

**Ne jamais utiliser Inter partout avec les mêmes graisses** — c'est l'absence de décision typographique.

---

## Directives

**À faire :**
- Vesterbro pour les moments forts — titres éditoriaux, éléments d'identité
- Inter pour tout le reste — mais avec variation de graisse et taille assumée
- Contraste fort entre niveaux de hiérarchie (ratio 1.333 ou 1.5 minimum)
- `font-variant-numeric: tabular-nums` pour les données chiffrées alignées
- Hauteur de ligne adaptée au contexte — plus serrée pour les titres, plus aérée pour le corps

**À ne jamais faire :**
- Inter partout sans variation — signe d'absence de décision
- Typographie monospace comme raccourci pour "ambiance dev/technique"
- Grande icône arrondie au-dessus de chaque titre — template générique
- Tailles trop proches (ex. 14/15/16/18px) — hiérarchie floue
- Plus de deux familles de fontes par écran

---

## Implémentation CSS Modules

Tous les tokens typographiques via `var(--token)`. Jamais de valeurs px arbitraires.

```css
/* ✅ Correct */
.title {
  font-family: var(--font-family-tagline);
  font-size: var(--font-size-08);
  line-height: var(--line-height-tight);
  font-weight: var(--font-weight-bold);
}

.body {
  font-family: var(--font-family-body);
  font-size: var(--font-size-04);
  line-height: var(--line-height-normal);
  color: var(--text-neutral-default);
}

/* ❌ Incorrect */
.title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
}
```

---

## Accessibilité

- Jamais de `user-scalable=no` — les layouts qui cassent au zoom 200% ont un problème de layout, pas de zoom
- `rem` pour les tailles de texte — respecte les préférences du navigateur
- Minimum `--font-size-03` (≈ 14px) pour les textes UI, `--font-size-04` (≈ 16px) pour le corps
- Les liens dans le texte doivent avoir une zone de tap d'au moins 44px via padding ou line-height

---

**À éviter :** Plus de deux familles de fontes. Tailles identiques sur des éléments de niveaux différents. Valeurs px arbitraires hors tokens. Vesterbro utilisé comme fonte de corps.
