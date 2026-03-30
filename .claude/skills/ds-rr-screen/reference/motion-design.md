# Motion design

## Durées — la règle 100/300/500

| Durée | Usage | Exemples |
|-------|-------|----------|
| **100–150ms** | Feedback instantané | Appui bouton, toggle, changement de couleur |
| **200–300ms** | Changements d'état | Ouverture menu, tooltip, hover |
| **300–500ms** | Changements de layout | Accordéon, modal, drawer |
| **500–800ms** | Animations d'entrée | Chargement page, reveals hero |

Les animations de sortie sont plus rapides que les entrées — utiliser ~75% de la durée d'entrée.

---

## Easing — choisir la bonne courbe

Ne pas utiliser `ease` — c'est un compromis rarement optimal.

| Courbe | Usage | CSS |
|--------|-------|-----|
| **ease-out** | Éléments qui entrent | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **ease-in** | Éléments qui sortent | `cubic-bezier(0.7, 0, 0.84, 0)` |
| **ease-in-out** | Toggles d'état | `cubic-bezier(0.65, 0, 0.35, 1)` |

Pour les micro-interactions, utiliser des courbes exponentielles — elles imitent la physique réelle (friction, décélération) :

```css
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);   /* Fluide, raffiné — défaut recommandé */
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);   /* Légèrement plus dramatique */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);     /* Vif, confiant */
```

**Éviter absolument bounce et elastic easing** — daté depuis 2015, amateur. Les objets réels décélèrent doucement, ils ne rebondissent pas.

---

## Seules deux propriétés à animer

**`transform` et `opacity` uniquement** — tout le reste provoque un recalcul de layout.

Pour les animations de hauteur (accordéons) : utiliser `grid-template-rows: 0fr → 1fr` plutôt qu'animer `height` directement.

```css
/* ✅ Correct — pas de recalcul layout */
.element {
  transition: transform 250ms var(--ease-out-quart),
              opacity 250ms var(--ease-out-quart);
}

/* ❌ Incorrect — recalcul layout */
.element {
  transition: width 250ms ease,
              height 250ms ease,
              padding 250ms ease;
}
```

---

## Animations d'entrée orchestrées

Un seul reveal orchestré à l'entrée de page crée plus d'impact que des micro-interactions dispersées. Utiliser `animation-delay` échelonné sur les blocs principaux — pas sur chaque élément.

```css
/* Stagger par bloc, pas par élément */
.panelLeft {
  animation: fadeIn 400ms var(--ease-out-quart) both;
}

.panelRight {
  animation: fadeIn 400ms var(--ease-out-quart) 100ms both;
}

.formField:nth-child(1) { animation-delay: 150ms; }
.formField:nth-child(2) { animation-delay: 200ms; }
.formField:nth-child(3) { animation-delay: 250ms; }

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Limiter le stagger total** — 10 éléments à 50ms = 500ms total, c'est trop. Réduire le délai par élément ou limiter le nombre d'éléments staggerés.

---

## Feedback de formulaire

- **Apparition d'erreur** : fade + léger translateY (pas de pop brutal)
- **État loading du Button** : transition vers le spinner, puis vers succès ou erreur
- **Focus** : transition `outline` et `box-shadow` courte (150ms)
- **Hover** : transition `background-color` et `transform` (150–200ms)

---

## prefers-reduced-motion — obligatoire

```css
/* Animation normale */
.card {
  animation: slideUp 500ms var(--ease-out-quart);
}

/* Alternative pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .card {
    animation: fadeIn 200ms ease-out;
  }
}

/* Ou désactiver globalement */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Ce qu'il faut préserver** : barres de progression, spinners de chargement (ralentis), indicateurs de focus — ils doivent fonctionner, juste sans mouvement spatial.

---

**À éviter :** Animer layout properties. Bounce/elastic easing. Ignorer `prefers-reduced-motion`. Stagger sur chaque élément individuel. Animations > 500ms pour du feedback UI. Animation utilisée pour masquer un chargement lent.
