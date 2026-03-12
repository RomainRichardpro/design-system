import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Composants/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Le composant **Button** est l'action principale du Design System.

Il propose deux niveaux visuels :
- **Primary** — fond plein, utilisé pour l'action principale de la page.
- **Secondary** — contour, utilisé pour les actions secondaires ou alternatives.

Quatre tailles sont disponibles : \`xs\` (32px), \`s\` (40px), \`m\` (48px), \`l\` (56px).

**États gérés :** default · hover · active · focus · disabled · loading.

**Accessibilité :** navigation clavier complète, focus visible, aria-busy/aria-disabled, texte masqué pour les lecteurs d'écran en mode loading.
        `,
      },
    },
  },
  argTypes: {
    level: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Niveau visuel du bouton',
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l'],
      description: 'Taille du bouton',
    },
    loading: {
      control: 'boolean',
      description: 'Affiche un spinner et désactive le bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive le bouton',
    },
    children: {
      control: 'text',
      description: 'Texte affiché dans le bouton',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================
// Stories de référence
// ============================================================

export const PrimaryDefault: Story = {
  name: 'Primary — Default',
  args: {
    level: 'primary',
    size: 'm',
    children: 'Confirmer',
  },
};

export const SecondaryDefault: Story = {
  name: 'Secondary — Default',
  args: {
    level: 'secondary',
    size: 'm',
    children: 'Annuler',
  },
};

// ============================================================
// États
// ============================================================

export const PrimaryDisabled: Story = {
  name: 'Primary — Disabled',
  args: {
    level: 'primary',
    size: 'm',
    disabled: true,
    children: 'Indisponible',
  },
};

export const SecondaryDisabled: Story = {
  name: 'Secondary — Disabled',
  args: {
    level: 'secondary',
    size: 'm',
    disabled: true,
    children: 'Indisponible',
  },
};

export const PrimaryLoading: Story = {
  name: 'Primary — Loading',
  args: {
    level: 'primary',
    size: 'm',
    loading: true,
    children: 'Enregistrement…',
  },
};

export const SecondaryLoading: Story = {
  name: 'Secondary — Loading',
  args: {
    level: 'secondary',
    size: 'm',
    loading: true,
    children: 'Enregistrement…',
  },
};

// ============================================================
// Tailles
// ============================================================

export const Tailles: Story = {
  name: 'Tailles — XS / S / M / L',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <Button level="primary" size="xs">XS</Button>
      <Button level="primary" size="s">S</Button>
      <Button level="primary" size="m">M</Button>
      <Button level="primary" size="l">L</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Les quatre tailles disponibles : `xs` (32px), `s` (40px), `m` (48px), `l` (56px).',
      },
    },
  },
};

// ============================================================
// Vue d'ensemble des variantes
// ============================================================

export const VueEnsemble: Story = {
  name: 'Vue d\'ensemble',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'center' }}>
      <span style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#888', gridColumn: '1 / -1' }}>Primary</span>
      <Button level="primary" size="m">Default</Button>
      <Button level="primary" size="m" disabled>Disabled</Button>
      <Button level="primary" size="m" loading>Loading</Button>

      <span style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#888', gridColumn: '1 / -1', marginTop: '8px' }}>Secondary</span>
      <Button level="secondary" size="m">Default</Button>
      <Button level="secondary" size="m" disabled>Disabled</Button>
      <Button level="secondary" size="m" loading>Loading</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vue d\'ensemble des deux niveaux avec leurs états principaux.',
      },
    },
  },
};
