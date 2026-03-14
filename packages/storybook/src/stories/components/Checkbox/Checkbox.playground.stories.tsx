import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from '@romainrichardpro/react';
import DocsPage from './Checkbox.docs.mdx';

const meta = {
  title: 'Composants/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      page: DocsPage,
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: "Texte du label — obligatoire pour l'accessibilité, même si masqué visuellement avec `hideLabel`.",
      table: {
        type: { summary: 'string' },
      },
    },
    hideLabel: {
      control: 'boolean',
      description: "Masque le label visuellement. Le texte reste dans le DOM pour les technologies d'assistance.",
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'État coché — composant contrôlé. Toujours associer à `onChange` pour gérer les mises à jour.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: "État indéterminé — utilisé typiquement pour représenter une sélection partielle dans un groupe de cases.",
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: "Désactive l'interaction. Tous les états visuels (coché, indéterminé) sont préservés.",
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: "Callback déclenché au changement d'état. Reçoit la nouvelle valeur `boolean`.",
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    id: {
      control: 'text',
      description: "Identifiant HTML. Auto-généré via `useId()` si absent — l'association `<label for>` est toujours garantie.",
      table: {
        type: { summary: 'string' },
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
    label: 'Accepter les conditions',
    checked: false,
    indeterminate: false,
    disabled: false,
    hideLabel: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(val) => {
          setChecked(val);
          args.onChange?.(val);
        }}
      />
    );
  },
};
