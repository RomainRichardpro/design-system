import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';
import { InputContainer } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/InputContainer',
  component: InputContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
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
        'Description complémentaire affichée sous le label. Visible uniquement si `withDescription=true`.',
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
        'Affiche un astérisque rouge après le label pour indiquer que le champ est obligatoire.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Active', 'Focus', 'Disabled', 'Read-only'],
      description: "État visuel du champ. Propagé au label, à l'input et au message d'aide.",
      table: {
        defaultValue: { summary: 'Default' },
        type: { summary: 'InputContainerState' },
      },
    },
    status: {
      control: 'select',
      options: ['Default', 'Success', 'Error'],
      description: "Statut de validation du champ. Propagé à l'input et au message d'aide.",
      table: {
        defaultValue: { summary: 'Default' },
        type: { summary: 'InputContainerStatus' },
      },
    },
    withSupportingText: {
      control: 'boolean',
      description: "Affiche le message d'aide ou de validation sous le champ.",
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    supportingText: {
      control: 'text',
      description: "Texte du message d'aide ou de validation.",
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder affiché dans le TextInput par défaut.',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: false,
      description: 'Icône Lucide affichée à gauche du TextInput par défaut.',
      table: {
        type: { summary: 'LucideIcon' },
      },
    },
    children: {
      control: false,
      description:
        'Slot pour un input personnalisé. Si absent, un TextInput par défaut est rendu avec `state` et `status` propagés.',
      table: {
        type: { summary: 'ReactNode' },
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

export const Default: Story = {
  name: 'Par défaut',
};

export const WithDescription: Story = {
  name: 'Avec description',
  args: {
    withDescription: true,
  },
};

export const WithoutDescription: Story = {
  name: 'Sans description',
  args: {
    withDescription: false,
  },
};

export const WithoutSupportingText: Story = {
  name: "Sans message d'aide",
  args: {
    withSupportingText: false,
  },
};

export const Required: Story = {
  name: 'Obligatoire',
  args: {
    isRequired: true,
  },
};

export const StateDisabled: Story = {
  name: 'État — Désactivé',
  args: {
    state: 'Disabled',
    withSupportingText: true,
    supportingText: 'Ce champ est désactivé.',
  },
};

export const StateReadOnly: Story = {
  name: 'État — Lecture seule',
  args: {
    state: 'Read-only',
    withSupportingText: true,
    supportingText: 'Ce champ est en lecture seule.',
  },
};

export const StatusSuccess: Story = {
  name: 'Statut — Succès',
  args: {
    status: 'Success',
    withSupportingText: true,
    supportingText: 'Adresse e-mail valide.',
  },
};

export const StatusError: Story = {
  name: 'Statut — Erreur',
  args: {
    status: 'Error',
    withSupportingText: true,
    supportingText: 'Ce champ est obligatoire.',
  },
};

export const WithCustomInput: Story = {
  name: 'Slot personnalisé',
  args: {
    label: 'Champ natif',
    withSupportingText: true,
    supportingText: "Exemple d'utilisation du pattern slot avec un <input> natif.",
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
          boxSizing: 'border-box',
        }}
      />
    </InputContainer>
  ),
};

export const AllStates: Story = {
  name: 'Tous les états',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '360px' }}>
      <InputContainer
        label="État par défaut"
        state="Default"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Message d'aide."
      />
      <InputContainer
        label="État focus"
        state="Focus"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Message d'aide."
      />
      <InputContainer
        label="État désactivé"
        state="Disabled"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Ce champ est désactivé."
      />
      <InputContainer
        label="État lecture seule"
        state="Read-only"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Ce champ est en lecture seule."
      />
      <InputContainer
        label="Statut succès"
        status="Success"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Valeur valide."
      />
      <InputContainer
        label="Statut erreur"
        status="Error"
        placeholder="exemple@domaine.fr"
        icon={Mail}
        withSupportingText
        supportingText="Ce champ est obligatoire."
      />
    </div>
  ),
};
