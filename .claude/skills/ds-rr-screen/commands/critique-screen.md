---
name: critique-screen
description: Évalue un écran du DS @romainrichardpro d'un point de vue UX et design : hiérarchie visuelle, architecture d'information, résonance émotionnelle, charge cognitive. Génère un rapport scoré avec feedback actionnable.
user-invocable: true
argument-hint: "[nom de l'écran ou composant]"
---

## Préparation obligatoire

Lire `.claude/skills/ds-rr-screen/SKILL.md` avant de procéder.

---

Conduire une critique design holistique. Évaluer si l'interface fonctionne vraiment — pas seulement techniquement, mais comme expérience designée. Penser comme un directeur artistique qui donne du feedback.

## Phase 1 — Critique design

### 1. Détection AI slop — critique

**C'est le contrôle le plus important.** Est-ce que ça ressemble à toutes les autres interfaces IA de 2024–2025 ?

Vérifier contre toutes les directives **À ne jamais faire** du skill — ce sont les fingerprints du travail générique. Le test : si on montrait cet écran à quelqu'un en disant "une IA l'a fait", est-ce qu'il le croirait immédiatement ?

### 2. Hiérarchie visuelle
- L'œil va-t-il vers l'élément le plus important en premier ?
- Y a-t-il une action primaire claire ? Visible en 2 secondes ?
- La taille, la couleur et la position communiquent-elles l'importance correctement ?
- Y a-t-il une compétition visuelle entre des éléments qui devraient avoir des poids différents ?

### 3. Architecture d'information et charge cognitive
- La structure est-elle intuitive ? Un nouvel utilisateur comprendrait-il l'organisation ?
- Le contenu lié est-il groupé logiquement ?
- Y a-t-il trop de choix simultanés ? Si > 4 options visibles à un point de décision, signaler.
- La navigation est-elle claire et prévisible ?
- La complexité est-elle révélée progressivement, ou déversée d'emblée ?

### 4. Parcours émotionnel
- Quelle émotion cet écran évoque-t-il ? Est-ce intentionnel ?
- Correspond-il à la personnalité du DS @romainrichardpro ?
- Inspire-t-il confiance ? Professionnalisme ? Clarté ?
- L'utilisateur cible se sentirait-il "c'est fait pour moi" ?
- Y a-t-il des moments d'anxiété à des points à enjeux (formulaires, actions irréversibles) ? Sont-ils adressés (messages rassurants, indicateurs de progression, option undo) ?

### 5. Découvrabilité et affordances
- Les éléments interactifs sont-ils évidemment interactifs ?
- Un utilisateur saurait-il quoi faire sans instructions ?
- Les états hover/focus fournissent-ils un feedback utile ?
- Y a-t-il des fonctionnalités cachées qui devraient être plus visibles ?

### 6. Composition et équilibre
- Le layout est-il équilibré ou inconfortablement pesant ?
- L'espace négatif est-il utilisé intentionnellement ou subi ?
- Y a-t-il un rythme visuel dans les espacements et répétitions ?
- L'asymétrie est-elle designée ou accidentelle ?

### 7. Typographie comme communication
- La hiérarchie typographique signale-t-elle clairement l'ordre de lecture ?
- Le corps de texte est-il confortable à lire ?
- Vesterbro est-il utilisé au bon endroit — moment fort, pas partout ?
- Y a-t-il assez de contraste entre les niveaux de titres ?

### 8. Couleur avec intention
- La couleur est-elle utilisée pour communiquer, pas juste décorer ?
- La palette est-elle cohérente ?
- L'accent violet attire-t-il l'attention sur les bons éléments ?
- Le sens passe-t-il toujours sans la couleur ?

### 9. États et cas limites
- États vides : guident-ils vers l'action, ou disent-ils juste "rien ici" ?
- États de chargement : réduisent-ils le temps d'attente perçu ?
- États d'erreur : sont-ils utiles et non-culpabilisants ?
- États de succès : confirment-ils et orientent-ils vers la suite ?

### 10. Microcopy et voix
- L'écriture est-elle claire et concise ?
- Les labels et boutons sont-ils sans ambiguïté ?
- Le texte d'erreur aide-t-il l'utilisateur à corriger le problème ?
- Le contenu est-il en français, réaliste, précis ?

---

## Phase 2 — Présentation des résultats

### Score de santé design

| # | Heuristique | Score | Problème clé |
|---|-------------|-------|--------------|
| 1 | Visibilité de l'état du système | ? | |
| 2 | Correspondance avec le monde réel | ? | |
| 3 | Contrôle et liberté | ? | |
| 4 | Cohérence et standards | ? | |
| 5 | Prévention des erreurs | ? | |
| 6 | Reconnaissance plutôt que rappel | ? | |
| 7 | Flexibilité et efficacité | ? | |
| 8 | Design esthétique et minimaliste | ? | |
| 9 | Récupération après erreur | ? | |
| 10 | Aide et documentation | ? | |
| **Total** | | **??/40** | |

**Niveaux :** 35–40 Excellent · 28–34 Bon · 20–27 Acceptable · 12–19 Faible · 0–11 Critique

### Verdict AI slop
**Commencer ici.** Pass/fail : est-ce générique ? Lister les fingerprints spécifiques. Être direct.

### Impression générale
Réaction brute — ce qui fonctionne, ce qui ne fonctionne pas, et la plus grande opportunité.

### Ce qui fonctionne
2–3 points réussis avec précision sur pourquoi ils fonctionnent.

### Problèmes prioritaires
Les 3–5 problèmes design les plus impactants, par ordre d'importance.

Pour chaque problème, tagger **P0–P3** :
- **[P?] Quoi** : Nommer le problème clairement
- **Pourquoi ça compte** : Comment ça nuit aux utilisateurs
- **Correction** : Quoi faire concrètement
- **Commande suggérée** : `/audit-screen`, `/polish-screen`

### Observations mineures
Notes rapides sur les petits problèmes à adresser.

---

## Phase 3 — Actions recommandées

Lister les commandes en ordre de priorité :

1. **`/commande`** — Description courte (contexte spécifique de la critique)

Terminer par `/polish-screen` comme dernière étape.

> Tu peux me demander de lancer ces commandes une par une, toutes en même temps, ou dans l'ordre que tu préfères.
> Relance `/critique-screen` après les corrections pour voir le score évoluer.
