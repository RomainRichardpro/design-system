import type { Meta, StoryObj } from '@storybook/react';
import { SupportingText } from '@romainrichardpro/react';
import DocsPage from './SupportingText.docs.mdx';

const meta = {
  title: 'Composants/SupportingText',
  component: SupportingText,
  parameters: {
    layout: 'padded',
    docs: {
      page: DocsPage,
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
        'État du composant. `Disabled` applique la couleur `--text-disabled` quelle que soit la valeur de `status`. En pratique, toujours piloté par `InputContainer`.',
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

export const Playground: Story = {
  name: 'Playground',
};
