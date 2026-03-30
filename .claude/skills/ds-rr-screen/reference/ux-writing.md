# UX Writing

## Labels de boutons

**Jamais "OK", "Envoyer", "Oui/Non"** — ambigu et paresseux. Utiliser des patterns verbe + objet :

| Mauvais | Bon | Pourquoi |
|---------|-----|----------|
| OK | Enregistrer les modifications | Dit ce qui va se passer |
| Envoyer | Créer le compte | Orienté résultat |
| Oui | Supprimer le message | Confirme l'action |
| Annuler | Continuer à modifier | Clarifie ce que "annuler" signifie |
| Cliquez ici | Télécharger le PDF | Décrit la destination |

**Pour les actions destructives**, nommer la destruction :
- "Supprimer" pas "Retirer" (supprimer est permanent, retirer suggère récupérable)
- "Supprimer 5 éléments" pas "Supprimer la sélection" (montrer le nombre)

---

## Messages d'erreur — la formule

Chaque message d'erreur doit répondre à : (1) Que s'est-il passé ? (2) Pourquoi ? (3) Comment corriger ?

| Situation | Modèle |
|-----------|--------|
| **Erreur de format** | "[Champ] doit être [format]. Exemple : [exemple]" |
| **Champ obligatoire** | "Veuillez saisir [ce qui manque]" |
| **Permission refusée** | "Vous n'avez pas accès à [chose]. [Que faire à la place]" |
| **Erreur réseau** | "Impossible de joindre [chose]. Vérifiez votre connexion et [action]." |
| **Erreur serveur** | "Une erreur est survenue de notre côté. [Action alternative]" |

**Ne jamais blâmer l'utilisateur** : "Veuillez saisir une date au format JJ/MM/AAAA" pas "Vous avez saisi une date invalide".

**Jamais d'humour pour les erreurs** — l'utilisateur est déjà frustré. Être utile, pas spirituel.

---

## États vides — des opportunités

Les états vides sont des moments d'onboarding :
1. Reconnaître brièvement
2. Expliquer la valeur de remplir
3. Fournir une action claire

"Aucun projet pour l'instant. Créez le premier pour commencer." pas juste "Aucun élément".

---

## Contenu réaliste — toujours

L'écran doit pouvoir être livré demain. Utiliser :
- Noms français plausibles (pas "John Doe" ou "Lorem ipsum")
- Emails vraisemblables (pas "test@test.com")
- Messages d'erreur précis et humains
- Données qui racontent une vraie histoire

---

## Cohérence terminologique

Choisir un terme et s'y tenir :

| Incohérent | Cohérent |
|------------|----------|
| Supprimer / Retirer / Effacer | Supprimer |
| Paramètres / Préférences / Options | Paramètres |
| Se connecter / S'identifier / Entrer | Se connecter |
| Créer / Ajouter / Nouveau | Créer |

La variété crée la confusion.

---

## Ton et voix

**La voix** est la personnalité de la marque — constante partout.
**Le ton** s'adapte au moment.

| Moment | Ton |
|--------|-----|
| Succès | Affirmatif, bref : "C'est fait. Vos modifications sont en ligne." |
| Erreur | Empathique, utile : "Ça n'a pas fonctionné. Voici quoi essayer..." |
| Chargement | Rassurant : "Enregistrement en cours..." |
| Confirmation destructive | Sérieux, clair : "Supprimer ce projet ? Cette action est irréversible." |

---

## Éviter le contenu redondant

Si le titre explique déjà, l'intro est redondante. Si le bouton est clair, ne pas l'expliquer à nouveau. Dire les choses une fois, les dire bien.

---

## Écrire pour l'accessibilité

- **Texte des liens** : sens autonome — "Voir les plans tarifaires" pas "Cliquez ici"
- **Alt text** : décrire l'information, pas l'image — "Revenus en hausse de 40% au T4" pas "Graphique"
- **Boutons icône** : `aria-label` obligatoire pour le contexte lecteur d'écran
- `alt=""` pour les images décoratives

---

**À éviter :** Jargon sans explication. Blâmer l'utilisateur. Erreurs vagues ("Une erreur est survenue" sans suite). Terminologie variable. Humour dans les états d'erreur. Lorem ipsum. Anglicismes évitables.
