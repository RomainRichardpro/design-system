import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';
import { InputContainer } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/InputContainer',
  component: InputContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**InputContainer** est le composant de champ de saisie du Design System. Il orchestre trois sous-composants — **InputLabel**, **TextInput** et **SupportingText** — en une unité cohérente, accessible et stylée.

### Composition

| Sous-composant | Rôle |
|---|---|
| \`InputLabel\` | Label affiché au-dessus du champ, avec support d'une description et d'un indicateur "Obligatoire" |
| \`TextInput\` | Champ de saisie (interne DS) avec états, statuts, icône et focus ring |
| \`SupportingText\` | Message d'aide ou de validation affiché sous le champ |

### Quand l'utiliser

Utiliser \`InputContainer\` pour tout champ de formulaire nécessitant un label et/ou un message d'aide. Pour un input sans label ni feedback, utiliser \`TextInput\` directement.

### Slot enfant (\`children\`)

Par défaut, \`InputContainer\` rend un \`TextInput\` interne avec \`state\` et \`status\` propagés automatiquement. Pour remplacer ce comportement, passer un nœud React custom dans \`children\` — l'association ARIA reste à la charge du composant parent.

---

### Accessibilité

- Le label est lié à l'input via \`htmlFor\` / \`useId\` — navigation clavier et lecteurs d'écran corrects
- \`aria-required\` est posé sur l'input quand \`isRequired={true}\`
- \`aria-describedby\` lie l'input au SupportingText quand \`withSupportingText={true}\`
- \`aria-invalid\` est propagé sur l'input quand \`status="Error"\`
- Le SupportingText passe en \`role="alert"\` quand \`status="Error"\` et \`state !== "Disabled"\`

---

### Tokens CSS utilisés

| Token | Usage |
|---|---|
| \`--spacing-03\` | Gap entre les éléments internes (6px) |
| \`--border-brand-primary-default\` | Bordure input Default |
| \`--background-neutral-default\` | Fond input |
| \`--text-neutral-default\` | Texte saisi |
| \`--text-neutral-alt\` | Placeholder + icône |
| \`--text-brand-primary-default\` | Couleur SupportingText Information |
| \`--text-status-error-default\` | Couleur SupportingText Error |
| \`--text-status-success-default\` | Couleur SupportingText Success |
| \`--focus\` | Couleur du focus ring |
| \`--border-width-02\` | Épaisseur focus ring |
| \`--background-disabled\` / \`--text-disabled\` | État Disabled |
| \`--background-neutral-alt\` / \`--border-neutral-raised\` | État Read-only |
        `.trim(),
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texte du label affiché au-dessus du champ.',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description:
        'Description complémentaire affichée sous le label. Visible uniquement si `withDescription={true}`.',
      table: {
        type: { summary: 'string' },
      },
    },
    withDescription: {
      control: 'boolean',
      description: 'Affiche la description sous le label si `true` et si `description` est fourni.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    isRequired: {
      control: 'boolean',
      description:
        "Affiche un astérisque rouge après le label et pose `aria-required` sur l'input pour indiquer que le champ est obligatoire.",
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Active', 'Focus', 'Disabled', 'Read-only'],
      description:
        "État visuel du champ. Propagé au label, à l'input et au message d'aide. `Disabled` désactive l'input et grise l'ensemble. `Read-only` empêche la saisie sans désactiver le champ.",
      table: {
        defaultValue: { summary: 'Default' },
        type: { summary: 'InputContainerState' },
      },
    },
    status: {
      control: 'select',
      options: ['Default', 'Success', 'Error'],
      description:
        'Statut de validation du champ. Propagé à l\'input (`aria-invalid` en Error) et au SupportingText (couleur + icône). `Error` déclenche également `role="alert"` sur le SupportingText.',
      table: {
        defaultValue: { summary: 'Default' },
        type: { summary: 'InputContainerStatus' },
      },
    },
    withSupportingText: {
      control: 'boolean',
      description:
        "Affiche le message d'aide ou de validation sous le champ. Active également `aria-describedby` sur l'input.",
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    supportingText: {
      control: 'text',
      description:
        "Texte du message d'aide ou de validation. Affiché uniquement si `withSupportingText={true}`.",
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder affiché dans le TextInput par défaut quand le champ est vide.',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: false,
      description:
        'Icône Lucide affichée à gauche dans le TextInput par défaut. Non applicable si `children` est fourni.',
      table: {
        type: { summary: 'LucideIcon' },
      },
    },
    children: {
      control: false,
      description:
        'Slot pour un input personnalisé. Si absent, un `TextInput` DS est rendu automatiquement avec `state` et `status` propagés. Si présent, la propagation ARIA reste à la charge du slot.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: false,
      description: "Classe CSS additionnelle appliquée sur l'élément racine du composant.",
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    label: 'Adresse e-mail',
    description: 'Votre adresse professionnelle uniquement.',
    withDescription: false,
    isRequired: false,
    state: 'Default',
    status: 'Default',
    withSupportingText: true,
    supportingText: 'Saisissez votre adresse e-mail professionnelle.',
    placeholder: 'exemple@domaine.fr',
    icon: Mail,
  },
} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  name: 'Par défaut',
  parameters: {
    docs: {
      description: {
        story:
          "Configuration par défaut : label, icône Mail, placeholder et message d'aide visible. État `Default`, statut `Default`.",
      },
    },
  },
};

export const AvecDescription: Story = {
  name: 'Avec description',
  args: {
    withDescription: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Affiche une ligne de description complémentaire sous le label via `withDescription={true}`. Utile pour clarifier le format attendu ou le contexte du champ.',
      },
    },
  },
};

export const SansDescription: Story = {
  name: 'Sans description',
  args: {
    withDescription: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'La description est masquée (`withDescription={false}` par défaut). Le label seul est affiché au-dessus du champ.',
      },
    },
  },
};

export const SansMessageAide: Story = {
  name: "Sans message d'aide",
  args: {
    withSupportingText: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Le SupportingText est masqué (`withSupportingText={false}`). À utiliser quand le label seul suffit à guider l'utilisateur.",
      },
    },
  },
};

export const Obligatoire: Story = {
  name: 'Obligatoire',
  args: {
    isRequired: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Un astérisque rouge est affiché après le label et `aria-required` est posé sur l'input. Combine visuel et sémantique pour l'accessibilité.",
      },
    },
  },
};

export const EtatDesactive: Story = {
  name: 'État — Désactivé',
  args: {
    state: 'Disabled',
    withSupportingText: true,
    supportingText: 'Ce champ est désactivé.',
  },
  parameters: {
    docs: {
      description: {
        story:
          "État `Disabled` : le label est grisé, l'input est non interactif (attribut `disabled` HTML natif), le SupportingText passe en couleur `--text-disabled`. Le champ est exclu du flux de focus clavier.",
      },
    },
  },
};

export const EtatLectureSeule: Story = {
  name: 'État — Lecture seule',
  args: {
    state: 'Read-only',
    withSupportingText: true,
    supportingText: 'Ce champ est en lecture seule.',
  },
  parameters: {
    docs: {
      description: {
        story:
          "État `Read-only` : le champ reste focusable et lisible par les lecteurs d'écran, mais la saisie est bloquée. Le fond et la bordure changent visuellement pour distinguer cet état de `Disabled`.",
      },
    },
  },
};

export const StatutSucces: Story = {
  name: 'Statut — Succès',
  args: {
    status: 'Success',
    withSupportingText: true,
    supportingText: 'Adresse e-mail valide.',
  },
  parameters: {
    docs: {
      description: {
        story:
          "Statut `Success` : la bordure de l'input et l'icône du SupportingText passent en vert. À afficher après une validation positive côté client ou serveur.",
      },
    },
  },
};

export const StatutErreur: Story = {
  name: 'Statut — Erreur',
  args: {
    status: 'Error',
    withSupportingText: true,
    supportingText: 'Cette adresse e-mail est invalide.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Statut `Error` : `aria-invalid` est posé sur l\'input, le SupportingText passe en `role="alert"` pour être annoncé automatiquement par les lecteurs d\'écran, et la couleur passe en rouge.',
      },
    },
  },
};

export const SlotPersonnalise: Story = {
  name: 'Slot personnalisé',
  args: {
    label: 'Adresse e-mail',
    withSupportingText: true,
    supportingText: "Exemple d'utilisation du pattern slot avec un TextInput DS custom.",
  },
  render: (args) => (
    <InputContainer {...args}>
      <input
        type="email"
        placeholder="exemple@domaine.fr"
        aria-label="Adresse e-mail"
        style={{
          width: '100%',
          height: 'var(--sizes-09)',
          padding: '0 var(--spacing-04)',
          border: 'var(--border-width-01) solid var(--border-brand-primary-default)',
          borderRadius: 'var(--radius-01)',
          fontSize: 'var(--font-size-14)',
          fontFamily: 'var(--font-family-text)',
          boxSizing: 'border-box',
          background: 'var(--background-neutral-default)',
          color: 'var(--text-neutral-default)',
          outline: 'none',
        }}
      />
    </InputContainer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Pattern slot : passer un `<input>` natif ou tout autre élément en `children` pour contrôler finement le rendu sans perdre la structure du composant (label, supporting text). L'association ARIA (`aria-describedby`, `aria-required`) reste à la charge du slot.",
      },
    },
  },
};

export const TousLesEtats: Story = {
  name: 'Tous les états',
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-06)', width: '360px' }}
    >
      <InputContainer
        label="Default"
        state="Default"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Message d'aide."
      />
      <InputContainer
        label="Hover"
        state="Hover"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Message d'aide."
      />
      <InputContainer
        label="Focus"
        state="Focus"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Message d'aide."
      />
      <InputContainer
        label="Disabled"
        state="Disabled"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Ce champ est désactivé."
      />
      <InputContainer
        label="Read-only"
        state="Read-only"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Ce champ est en lecture seule."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Vue comparative de tous les états visuels : Default, Hover, Focus, Disabled et Read-only. Chaque état est propagé simultanément au label, à l'input et au SupportingText.",
      },
    },
  },
};

export const Playground: Story = {
  name: 'Playground',
};
