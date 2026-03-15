import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// ─── Méta ────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Composants/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Le composant \`Button\` est le composant d'action principal du Design System.

Il existe en deux niveaux hiérarchiques (**Primary** et **Secondary**) et en quatre tailles (**XS**, **S**, **M**, **L**).

### Quand utiliser Primary ?
Action principale d'une page ou d'un bloc — une seule action Primary par vue.

### Quand utiliser Secondary ?
Actions secondaires, alternatives, ou actions en parallèle d'un Primary.

### Accessibilité
- Navigation clavier complète (Tab + Entrée/Espace)
- Focus visible via \`outline\`
- État \`disabled\` via l'attribut HTML natif
- État \`loading\` : \`aria-busy\` exposé, texte accessible via \`loadingLabel\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: 'Texte affiché dans le bouton',
      control: 'text',
    },
    level: {
      description: 'Hiérarchie visuelle du bouton',
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    size: {
      description: 'Taille du bouton',
      control: 'radio',
      options: ['xs', 's', 'm', 'l'],
    },
    loading: {
      description: 'Affiche un spinner et désactive le bouton',
      control: 'boolean',
    },
    loadingLabel: {
      description: "Texte lu par les lecteurs d'écran en état loading",
      control: 'text',
    },
    disabled: {
      description: 'Désactive le bouton',
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Label',
    level: 'primary',
    size: 'm',
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories de base ─────────────────────────────────────────────────────────

/** État par défaut du bouton Primary. */
export const PrimaryDefault: Story = {
  name: 'Primary — Default',
  args: {
    level: 'primary',
    children: 'Confirmer',
  },
};

/** État par défaut du bouton Secondary. */
export const SecondaryDefault: Story = {
  name: 'Secondary — Default',
  args: {
    level: 'secondary',
    children: 'Annuler',
  },
};

// ─── États ───────────────────────────────────────────────────────────────────

/** Bouton désactivé — aucune interaction possible. */
export const Disabled: Story = {
  name: 'État — Disabled',
  args: {
    children: 'Indisponible',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Le bouton est désactivé via l'attribut HTML natif `disabled`.",
      },
    },
  },
};

/** Bouton en cours de chargement — spinner visible, label accessible. */
export const Loading: Story = {
  name: 'État — Loading',
  args: {
    children: 'Confirmer',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Le contenu est remplacé par un spinner. `loadingLabel` ("Chargement en cours" par défaut) reste accessible aux lecteurs d\'écran via un span sr-only.',
      },
    },
  },
};

// ─── Tailles ─────────────────────────────────────────────────────────────────

/** Les quatre tailles disponibles sur Primary. */
export const Tailles: Story = {
  name: 'Tailles — Primary',
  parameters: {
    docs: {
      description: {
        story:
          'XS (32px), S (40px), M (48px), L (56px). La taille M est la taille par défaut recommandée.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button level="primary" size="xs">
        XS
      </Button>
      <Button level="primary" size="s">
        S
      </Button>
      <Button level="primary" size="m">
        M
      </Button>
      <Button level="primary" size="l">
        L
      </Button>
    </div>
  ),
};

/** Les quatre tailles disponibles sur Secondary. */
export const TaillesSecondary: Story = {
  name: 'Tailles — Secondary',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button level="secondary" size="xs">
        XS
      </Button>
      <Button level="secondary" size="s">
        S
      </Button>
      <Button level="secondary" size="m">
        M
      </Button>
      <Button level="secondary" size="l">
        L
      </Button>
    </div>
  ),
};

// ─── Niveaux côte à côte ──────────────────────────────────────────────────────

/** Comparaison Primary / Secondary en taille M. */
export const Niveaux: Story = {
  name: 'Niveaux — Comparaison',
  parameters: {
    docs: {
      description: {
        story:
          "Usage typique : un Primary pour l'action principale, un Secondary pour l'action alternative.",
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button level="primary" size="m">
        Confirmer
      </Button>
      <Button level="secondary" size="m">
        Annuler
      </Button>
    </div>
  ),
};

// ─── Loading par taille ───────────────────────────────────────────────────────

/** Le spinner est 16px en XS, 24px pour S/M/L. */
export const LoadingTailles: Story = {
  name: 'Loading — Tailles de spinner',
  parameters: {
    docs: {
      description: {
        story: '16px en XS, 24px pour S, M et L.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button level="primary" size="xs" loading>
        XS
      </Button>
      <Button level="primary" size="s" loading>
        S
      </Button>
      <Button level="primary" size="m" loading>
        M
      </Button>
      <Button level="primary" size="l" loading>
        L
      </Button>
    </div>
  ),
};

// ─── Playground ───────────────────────────────────────────────────────────────

/** Contrôle interactif — modifie toutes les props depuis le panneau Controls. */
export const Playground: Story = {
  name: 'Playground',
};
