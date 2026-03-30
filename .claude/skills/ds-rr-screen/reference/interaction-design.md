# Design d'interaction

## Les huit états interactifs

Chaque élément interactif nécessite ces états :

| État | Quand | Traitement visuel |
|------|-------|-------------------|
| **Default** | Au repos | Style de base |
| **Hover** | Pointeur dessus (pas touch) | Légère élévation, changement de couleur |
| **Focus** | Focus clavier/programmatique | Ring visible (voir ci-dessous) |
| **Active** | En cours d'appui | Enfoncé, plus sombre |
| **Disabled** | Non interactif | Opacité réduite, pas de pointeur |
| **Loading** | En cours de traitement | Spinner, skeleton |
| **Error** | État invalide | Bordure rouge, icône, message |
| **Success** | Action complétée | Check vert, confirmation |

**L'erreur courante** : concevoir hover sans focus, ou inversement. Ils sont différents. Les utilisateurs clavier ne voient jamais les états hover.

---

## Focus rings — les faire correctement

**Jamais `outline: none` sans remplacement** — violation d'accessibilité. Les composants DS gèrent le focus via le token `--focus`. Utiliser les props correctement suffit dans la majorité des cas.

Pour les éléments custom :
```css
.customElement:focus {
  outline: none;
}

.customElement:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}
```

---

## Formulaires — composants DS

Les composants `InputContainer`, `TextInput`, `InputLabel`, `SupportingText` gèrent l'accessibilité de base. Utiliser leurs props correctement :

```tsx
/* ✅ Correct */
<InputContainer
  label="Adresse e-mail"
  isRequired
  status="Error"
  withSupportingText
  supportingText="Veuillez entrer une adresse e-mail valide."
>
  <TextInput
    type="email"
    placeholder="vous@exemple.fr"
  />
</InputContainer>

/* ❌ Incorrect — placeholder comme label */
<input
  type="email"
  placeholder="Adresse e-mail *"
/>
```

**Règles formulaire :**
- Valider **au blur**, pas à chaque frappe (exception : force du mot de passe)
- Placer les erreurs **sous** le champ via `supportingText`
- Labels toujours visibles — le placeholder disparaît à la saisie
- `isRequired` sur tous les champs obligatoires

---

## États d'erreur — partie intégrante du design

Les états d'erreur font partie du design, pas d'un afterthought. L'état erreur doit être aussi soigné visuellement que l'état par défaut.

```tsx
/* État erreur complet */
<InputContainer
  label="Nom de l'espace"
  isRequired
  status="Error"
  withSupportingText
  supportingText="Ce nom est déjà utilisé. Choisissez un autre nom."
>
  <TextInput value="acme" />
</InputContainer>
```

---

## États de chargement

- **Optimistic UI** : mettre à jour l'interface immédiatement, gérer les échecs avec grâce. Utiliser pour les actions à faible risque. Éviter pour les paiements ou actions destructives.
- **Button loading** : utiliser la prop `loading` du composant Button — elle gère le spinner et désactive l'interaction.
- **Feedback de soumission** : état loading → transition vers succès ou erreur.

---

## Navigation clavier

- Tab order logique suivant le flux visuel de l'écran
- Un seul `<h1>` par écran
- Les boutons utilisent des verbes d'action (`aria-label` si icône seule)
- Skip links pour sauter la navigation sur les écrans complexes

---

## Actions destructives

L'undo est meilleur que les modales de confirmation — les utilisateurs cliquent sur "Confirmer" machinalement. Utiliser une confirmation uniquement pour les actions vraiment irréversibles (suppression de compte, données critiques).

---

**À éviter :** Supprimer les focus rings sans remplacement. Placeholder comme label. Zones de tap < 44×44px. Messages d'erreur génériques. Tous les boutons en primary. Modales pour des actions non-destructives.
