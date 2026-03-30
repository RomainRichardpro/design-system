# Design spatial

## Système de tokens spacing et size

Tous les espacements passent par les tokens du DS. Jamais de valeur px arbitraire.

```css
/* ✅ Correct */
.container {
  padding: var(--spacing-06);
  gap: var(--spacing-04);
}

/* ❌ Incorrect */
.container {
  padding: 24px;
  gap: 16px;
}
```

Les tokens `--spacing-*` et `--size-*` suivent une échelle numérique. Vérifier les valeurs disponibles dans `packages/tokens/build/css/numbers.css`.

---

## Hiérarchie visuelle

### Le test du flou

Flouter l'écran (ou prendre un screenshot et le flouter). Peut-on encore identifier :
- L'élément le plus important ?
- Le deuxième plus important ?
- Des groupements clairs ?

Si tout a le même poids flou, il y a un problème de hiérarchie.

### Hiérarchie multi-dimensionnelle

Ne pas s'appuyer sur la taille seule. Combiner :

| Outil | Hiérarchie forte | Hiérarchie faible |
|-------|-----------------|-------------------|
| **Taille** | Ratio 3:1 ou plus | Ratio < 2:1 |
| **Graisse** | Bold vs Regular | Medium vs Regular |
| **Couleur** | Fort contraste | Teintes similaires |
| **Position** | Haut/gauche (primaire) | Bas/droite |
| **Espace** | Entouré de blanc | Encombré |

La meilleure hiérarchie combine 2–3 dimensions simultanément : un titre plus grand, plus gras, ET avec plus d'espace au-dessus.

---

## Rythme d'espacement

L'espacement crée la structure sans bordures ni séparateurs. Les éléments qui appartiennent ensemble respirent moins entre eux que les éléments séparés.

**Ne pas appliquer mécaniquement** — composer. Des espacements identiques partout = absence de rythme.

Principe : groupements serrés pour les éléments liés, séparations généreuses pour les sections distinctes. Le contraste d'espacement est aussi expressif que le contraste typographique.

---

## Grilles et layouts

### Liberté de composition

Pas de grille imposée. Les options disponibles :

- **Split layout** — deux zones distinctes avec logiques différentes
- **Full-bleed** — un élément occupe toute la largeur pour l'impact
- **Centrage généreux** — formulaire centré avec espace négatif assumé
- **Stack compact** — densité contrôlée, utilitaire
- **Asymétrie** — colonne étroite + colonne large, déséquilibre intentionnel
- **Chevauchement** — éléments qui se superposent pour créer de la profondeur

Ce qui compte : l'intentionnalité. Un layout centré peut être aussi fort qu'une grille brisée — s'il est assumé jusqu'au bout.

### Cards — utiliser avec parcimonie

Les cards sont surutilisées. L'espacement et l'alignement créent naturellement des groupements visuels. Utiliser une card uniquement quand :
- Le contenu est véritablement distinct et actionnable
- Les éléments nécessitent une comparaison visuelle en grille
- Le contenu nécessite des limites d'interaction claires

**Jamais de cards imbriquées dans des cards** — bruit visuel, aplatir la hiérarchie.
**Jamais de grille de cards identiques** — même taille, icône + titre + texte, répété à l'infini.

---

## Ajustements optiques

Le texte aligné à `margin-left: 0` semble en retrait à cause de l'espace blanc des lettres — utiliser une légère marge négative (`-0.05em`) pour l'alignement optique.

Les icônes géométriquement centrées semblent souvent décalées — les icônes "play" doivent être légèrement décalées à droite, les flèches vers leur direction.

---

## Zones de tap

Les boutons peuvent être visuellement petits mais nécessitent de grandes zones de tap (44px minimum). Utiliser le padding ou les pseudo-éléments pour étendre la zone sans changer l'apparence visuelle.

---

## Profondeur et élévation

Créer de la profondeur par les couleurs de surface plutôt que par les ombres :
- `--background-neutral-default` → surface principale
- `--background-neutral-raised` → surface légèrement élevée
- `--background-neutral-inverse` → contraste fort, hiérarchie immédiate

Les ombres portées doivent être subtiles — si on les voit clairement, elles sont trop fortes.

---

**À éviter :** Valeurs d'espacement arbitraires hors tokens. Espacements identiques partout. Hiérarchie créée par la taille seule. Cards imbriquées. Grilles de cards identiques. Ombres trop visibles.
