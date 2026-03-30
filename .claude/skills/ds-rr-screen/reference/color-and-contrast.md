# Couleur et contraste

## Tokens couleurs du DS

Toutes les couleurs passent par les tokens. Jamais de valeur hexadécimale arbitraire.

### Structure des tokens

| Catégorie | Exemples | Usage |
|-----------|----------|-------|
| `--background-*` | `--background-neutral-default`, `--background-brand-primary` | Fonds de surfaces et composants |
| `--text-*` | `--text-neutral-default`, `--text-neutral-alt`, `--text-neutral-inverse` | Textes |
| `--border-*` | `--border-neutral-default`, `--border-brand-primary-default` | Bordures |
| `--icon-*` | `--icon-neutral-default`, `--icon-neutral-alt` | Icônes |
| `--focus` | `--focus` | Focus ring — toujours ce token |

### Tokens d'accent

`--background-brand-primary` est le violet du DS. Sa force vient de sa rareté — l'utiliser avec intention, pas par défaut. Un fond `--background-brand-primary` sur une moitié d'écran dit quelque chose de fort. Saupoudré partout, il ne dit plus rien.

---

## Accessibilité WCAG AA — non négociable

| Type de contenu | Ratio minimum |
|-----------------|---------------|
| Texte body | 4.5:1 |
| Texte large (18px+ ou 14px bold) | 3:1 |
| Composants UI, icônes | 3:1 |
| Décorations non essentielles | Aucun |

### Combinaisons à risque dans le DS

- `--background-neutral-raised` (#D1D1D1) comme bordure sur fond blanc → ratio ~1.6:1, insuffisant. Utiliser `--text-neutral-alt` (#888888, ~3.5:1) pour les bordures d'inputs et éléments discrets.
- Texte gris sur fond coloré → utiliser une nuance de la couleur de fond, jamais du gris pur
- Placeholder text : doit aussi respecter 4.5:1 — le gris clair générique échoue presque toujours

---

## Principes de composition couleur

### La règle 60-30-10 — appliquée correctement

C'est une règle de **poids visuel**, pas de pixels :

- **60%** : Fonds neutres, espace blanc, surfaces de base
- **30%** : Couleurs secondaires — texte, bordures, états inactifs
- **10%** : Accent — CTAs, highlights, états de focus

L'erreur courante : utiliser l'accent partout "parce que c'est la couleur de marque". Les couleurs d'accent fonctionnent *parce qu'elles sont rares*. La surutilisation tue leur pouvoir.

### Les fonds ne sont pas neutres

Le DS a plusieurs niveaux de fond :
- `--background-neutral-default` — surface principale
- `--background-neutral-subtle` — surface légèrement distincte
- `--background-neutral-raised` — surface élevée
- `--background-neutral-inverse` — fond sombre (noir)
- `--background-brand-primary` — accent violet

Un fond `--background-neutral-inverse` sur un panneau crée une hiérarchie immédiate sans border ni shadow. C'est plus fort et plus propre.

---

## Directives

**À faire :**
- S'engager dans une palette cohérente — dominante neutre, accent violet tranchant
- Utiliser les fonds sombres (`--background-neutral-inverse`) pour créer de la hiérarchie entre zones
- Vérifier les ratios de contraste avant de livrer — ne pas faire confiance à l'œil seul
- Utiliser `--text-neutral-alt` pour les éléments discrets (labels secondaires, placeholders, métadonnées)

**À ne jamais faire :**
- Valeurs hexadécimales arbitraires — tout passe par les tokens
- Texte `--text-neutral-alt` sur fond `--background-brand-primary` sans vérification du contraste
- Palette cyan/violet/dégradé générique — fingerprint AI slop
- Texte en dégradé pour "l'impact" — décoratif, pas signifiant
- Fond sombre avec accents lumineux/néon par défaut — paraît "cool" sans vraie décision
- Glassmorphisme décoratif — transparence sans intention
- `--background-neutral-raised` comme bordure sur fond blanc — ratio insuffisant

---

## Mode sombre

Le DS génère `colors-light.css` et `colors-dark.css`. Le mode sombre n'est pas l'inversion du mode clair — les tokens sémantiques changent de valeur, pas de nom. Utiliser les tokens correctement garantit que le mode sombre fonctionne sans surcharge CSS.

---

## Implémentation CSS Modules

```css
/* ✅ Correct */
.card {
  background-color: var(--background-neutral-default);
  border: 1px solid var(--border-neutral-default);
  color: var(--text-neutral-default);
}

.cardAccent {
  background-color: var(--background-brand-primary);
  color: var(--text-neutral-inverse);
}

/* ❌ Incorrect */
.card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  color: #1a1a1a;
}
```

---

**À éviter :** Valeurs hexadécimales hors tokens. Gris pur sur fond coloré. Surcharge de l'accent violet. Contraste non vérifié sur les bordures et placeholders.
