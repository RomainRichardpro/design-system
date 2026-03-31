import type { Meta, StoryObj } from '@storybook/react';
import { SupportingText } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/SupportingText',
  component: SupportingText,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**SupportingText** est le composant de message d'aide ou de validation du Design System. Il s'affiche sous un champ de saisie pour guider l'utilisateur ou lui communiquer le résultat d'une validation.

### Composition

Le composant est composé de deux éléments :
- Une **icône** (Info, CircleCheck ou XCircle selon le statut) — décorative, masquée aux lecteurs d'écran
- Un **texte** dans un \`<p>\` — sémantique correcte pour le lecteur d'écran

### Les trois statuts

| Statut | Icône | Couleur | Usage |
|---|---|---|---|
| \`Information\` | Info | \`--text-brand-primary-default\` | Message d'aide neutre |
| \`Success\` | CircleCheck | \`--text-status-success-default\` | Validation positive |
| \`Error\` | XCircle | \`--text-status-error-default\` | Erreur de saisie |

### Usage en standalone vs dans InputContainer

\`SupportingText\` peut être utilisé seul ou intégré dans \`InputContainer\`. Dans \`InputContainer\`, il est piloté automatiquement via les props \`withSupportingText\`, \`supportingText\` et \`status\`. En standalone, le \`state\` doit être géré manuellement.

---

### Accessibilité

- \`role="alert"\` est posé **uniquement** quand \`status="Error"\` et \`state !== "Disabled"\` — l'erreur est annoncée automatiquement par les lecteurs d'écran
- L'icône porte \`aria-hidden="true"\` — elle est purement décorative
- Le texte est dans un \`<p>\` — sémantique correcte
- Utilisé via \`aria-describedby\` depuis le champ parent pour lier le message à l'input

---

### Tokens CSS utilisés

| Token | Usage |
|---|---|
| \`--spacing-02\` | Gap entre l'icône et le texte (4px) |
| \`--font-family-text\` | Police du texte |
| \`--font-size-14\` | Taille du texte (14px) |
| \`--font-weight-regular\` | Graisse du texte |
| \`--text-brand-primary-default\` | Couleur statut Information |
| \`--text-status-success-default\` | Couleur statut Success |
| \`--text-status-error-default\` | Couleur statut Error |
| \`--text-disabled\` | Couleur état Disabled (tous statuts) |
        `.trim(),
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: "Texte du message affiché à côté de l'icône.",
      table: {
        type: { summary: 'string' },
      },
    },
    status: {
      control: 'select',
      options: ['Information', 'Success', 'Error'],
      description:
        "Détermine l'icône et la couleur du message. `Information` pour un message d'aide, `Success` pour une validation positive, `Error` pour une erreur de saisie.",
      table: {
        defaultValue: { summary: 'Information' },
        type: { summary: 'SupportingTextStatus' },
      },
    },
    state: {
      control: 'select',
      options: ['Default', 'Disabled'],
      description:
        'État du composant. `Disabled` applique la couleur `--text-disabled` quelle que soit la valeur de `status`. En pratique, toujours piloté par le composant parent `InputContainer`.',
      table: {
        defaultValue: { summary: 'Default' },
        type: { summary: 'SupportingTextState' },
      },
    },
    className: {
      control: false,
      description: "Classe CSS additionnelle appliquée sur l'élément racine.",
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    text: 'Saisissez votre adresse e-mail professionnelle.',
    status: 'Information',
    state: 'Default',
  },
} satisfies Meta<typeof SupportingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Information: Story = {
  name: 'Statut — Information',
  args: {
    text: 'Saisissez votre adresse e-mail professionnelle.',
    status: 'Information',
    state: 'Default',
  },
  parameters: {
    docs: {
      description: {
        story:
          "Statut par défaut. L'icône Info et la couleur `--text-brand-primary-default` indiquent un message d'aide neutre.",
      },
    },
  },
};

export const Succes: Story = {
  name: 'Statut — Succès',
  args: {
    text: 'Adresse e-mail valide.',
    status: 'Success',
    state: 'Default',
  },
  parameters: {
    docs: {
      description: {
        story:
          "L'icône CircleCheck et la couleur `--text-status-success-default` confirment une validation positive. À afficher après un contrôle côté client ou serveur.",
      },
    },
  },
};

export const Erreur: Story = {
  name: 'Statut — Erreur',
  args: {
    text: 'Cette adresse e-mail est invalide.',
    status: 'Error',
    state: 'Default',
  },
  parameters: {
    docs: {
      description: {
        story:
          'L\'icône XCircle et la couleur `--text-status-error-default` signalent une erreur de saisie. Le composant passe automatiquement en `role="alert"` — le message est annoncé par les lecteurs d\'écran sans action supplémentaire.',
      },
    },
  },
};

export const Desactive: Story = {
  name: 'État — Désactivé',
  args: {
    text: 'Ce champ est désactivé.',
    status: 'Information',
    state: 'Disabled',
  },
  parameters: {
    docs: {
      description: {
        story:
          'État `Disabled` : la couleur passe en `--text-disabled` quelle que soit la valeur de `status`. En pratique, cet état est toujours piloté par le composant parent `InputContainer` — ne pas le définir manuellement en dehors de ce contexte.',
      },
    },
  },
};

export const TousLesStatuts: Story = {
  name: 'Tous les statuts',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-04)' }}>
      <SupportingText
        text="Saisissez votre adresse e-mail professionnelle."
        status="Information"
        state="Default"
      />
      <SupportingText text="Adresse e-mail valide." status="Success" state="Default" />
      <SupportingText text="Cette adresse e-mail est invalide." status="Error" state="Default" />
      <SupportingText
        text="Saisissez votre adresse e-mail professionnelle."
        status="Information"
        state="Disabled"
      />
      <SupportingText text="Adresse e-mail valide." status="Success" state="Disabled" />
      <SupportingText text="Cette adresse e-mail est invalide." status="Error" state="Disabled" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Vue comparative des trois statuts (Information, Success, Error) dans les deux états (Default et Disabled). En état `Disabled`, la couleur `--text-disabled` écrase la couleur de statut.',
      },
    },
  },
};

export const Playground: Story = {
  name: 'Playground',
};
