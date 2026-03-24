import type { Meta, StoryObj } from '@storybook/react';
import { SupportingText } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/SupportingText',
  component: SupportingText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texte du message affiché sous le champ.',
      table: {
        type: { summary: 'string' },
      },
    },
    status: {
      control: 'select',
      options: ['Information', 'Success', 'Error'],
      description:
        "Détermine l'icône et la couleur du message. `Information` pour un message d'aide, `Success` pour une validation, `Error` pour une erreur de saisie.",
      table: {
        defaultValue: { summary: 'Information' },
        type: { summary: 'SupportingTextStatus' },
      },
    },
    state: {
      control: 'select',
      options: ['Default', 'Disabled'],
      description:
        'État du composant. `Disabled` applique la couleur désactivée quelle que soit la valeur de `status`.',
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
    text: "Texte d'aide ou de validation",
    status: 'Information',
    state: 'Default',
  },
} satisfies Meta<typeof SupportingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Information',
  args: {
    text: 'Saisissez votre adresse e-mail professionnelle.',
    status: 'Information',
    state: 'Default',
  },
};

export const Success: Story = {
  name: 'Succès',
  args: {
    text: 'Adresse e-mail valide.',
    status: 'Success',
    state: 'Default',
  },
};

export const Error: Story = {
  name: 'Erreur',
  args: {
    text: 'Ce champ est obligatoire.',
    status: 'Error',
    state: 'Default',
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  args: {
    text: 'Ce champ est désactivé.',
    status: 'Information',
    state: 'Disabled',
  },
};

export const AllVariants: Story = {
  name: 'Tous les variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '320px' }}>
      <SupportingText
        text="Saisissez votre adresse e-mail professionnelle."
        status="Information"
        state="Default"
      />
      <SupportingText text="Adresse e-mail valide." status="Success" state="Default" />
      <SupportingText text="Ce champ est obligatoire." status="Error" state="Default" />
      <SupportingText text="Ce champ est désactivé." status="Information" state="Disabled" />
    </div>
  ),
};
