import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';
import { InputContainer } from '@romainrichardpro/react';
import DocsPage from './InputContainer.docs.mdx';

const meta = {
  title: 'Composants/InputContainer',
  component: InputContainer,
  parameters: {
    layout: 'padded',
    docs: {
      page: DocsPage,
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
        "Affiche un astérisque rouge après le label et pose `aria-required` sur l'input.",
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Active', 'Focus', 'Disabled', 'Read-only'],
      description:
        "État visuel du champ. Propagé au label, à l'input et au message d'aide.",
      table: {
        defaultValue: { summary: 'Default' },
        type: { summary: 'InputContainerState' },
      },
    },
    status: {
      control: 'select',
      options: ['Default', 'Success', 'Error'],
      description:
        "Statut de validation. Propagé à l'input (`aria-invalid` en Error) et au SupportingText.",
      table: {
        defaultValue: { summary: 'Default' },
        type: { summary: 'InputContainerStatus' },
      },
    },
    withSupportingText: {
      control: 'boolean',
      description:
        "Affiche le message d'aide sous le champ. Active également `aria-describedby` sur l'input.",
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    supportingText: {
      control: 'text',
      description:
        "Texte du message d'aide. Affiché uniquement si `withSupportingText={true}`.",
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder affiché dans le TextInput quand le champ est vide.',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: false,
      description:
        'Icône Lucide affichée à gauche dans le TextInput. Non applicable si `children` est fourni.',
      table: {
        type: { summary: 'LucideIcon' },
      },
    },
    children: {
      control: false,
      description:
        'Slot pour un input personnalisé. Si absent, un `TextInput` DS est rendu automatiquement.',
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

export const Playground: Story = {
  name: 'Playground',
};
