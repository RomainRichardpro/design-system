import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@romainrichardpro/react';
import DocsPage from './Button.docs.mdx';

const meta = {
  title: 'Composants/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      page: DocsPage,
    },
  },
  argTypes: {
    level: {
      control: 'select',
      options: ['primary', 'secondary'],
      description:
        "Niveau visuel du bouton. `primary` pour l'action principale de la page, `secondary` pour les actions alternatives.",
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'ButtonLevel' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l'],
      description:
        'Taille du bouton. Correspond à une hauteur fixe de 32px (xs) / 40px (s) / 48px (m) / 56px (l).',
      table: {
        defaultValue: { summary: 'm' },
        type: { summary: 'ButtonSize' },
      },
    },
    loading: {
      control: 'boolean',
      description:
        "Affiche un spinner et rend le bouton non interactif. Toujours associer à `loadingLabel` pour l'accessibilité.",
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    loadingLabel: {
      control: 'text',
      description:
        'Texte lu par les lecteurs d\'écran quand `loading` est actif. Doit décrire l\'action en cours (ex. : "Enregistrement en cours").',
      table: {
        defaultValue: { summary: '"Chargement en cours"' },
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        "Désactive le bouton via l'attribut natif HTML. Le bouton est exclu du flux de focus.",
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    children: {
      control: 'text',
      description: "Contenu textuel du bouton. Doit décrire clairement l'action déclenchée.",
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: {
    level: 'primary',
    size: 'm',
    children: 'Confirmer',
    loading: false,
    disabled: false,
    loadingLabel: 'Chargement en cours',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
};
