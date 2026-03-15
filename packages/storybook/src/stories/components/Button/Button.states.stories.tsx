import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/Button/States',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: { disable: true },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button level="primary" size="m">
        Action
      </Button>
      <Button level="secondary" size="m">
        Action
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button level="primary" size="m" disabled>
        Action
      </Button>
      <Button level="secondary" size="m" disabled>
        Action
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  name: 'Loading',
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button level="primary" size="m" loading loadingLabel="Enregistrement en cours">
        Enregistrer
      </Button>
      <Button level="secondary" size="m" loading loadingLabel="Enregistrement en cours">
        Enregistrer
      </Button>
    </div>
  ),
};

export const Overview: Story = {
  name: "Vue d'ensemble",
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr 1fr',
        gap: '12px 24px',
        alignItems: 'center',
      }}
    >
      {/* En-têtes */}
      <span
        style={{
          fontSize: '11px',
          color: 'var(--text-neutral-subtle, #888)',
          fontFamily: 'sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      />
      <span
        style={{
          fontSize: '11px',
          color: 'var(--text-neutral-subtle, #888)',
          fontFamily: 'sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        Primary
      </span>
      <span
        style={{
          fontSize: '11px',
          color: 'var(--text-neutral-subtle, #888)',
          fontFamily: 'sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        Secondary
      </span>
      {/* Default */}
      <span
        style={{
          fontSize: '13px',
          fontFamily: 'sans-serif',
          color: 'var(--text-neutral-default, #222)',
        }}
      >
        Default
      </span>
      <Button level="primary" size="m">
        Action
      </Button>
      <Button level="secondary" size="m">
        Action
      </Button>
      {/* Disabled */}
      <span
        style={{
          fontSize: '13px',
          fontFamily: 'sans-serif',
          color: 'var(--text-neutral-default, #222)',
        }}
      >
        Disabled
      </span>
      <Button level="primary" size="m" disabled>
        Action
      </Button>
      <Button level="secondary" size="m" disabled>
        Action
      </Button>
      {/* Loading */}
      <span
        style={{
          fontSize: '13px',
          fontFamily: 'sans-serif',
          color: 'var(--text-neutral-default, #222)',
        }}
      >
        Loading
      </span>
      <Button level="primary" size="m" loading loadingLabel="Chargement">
        Action
      </Button>
      <Button level="secondary" size="m" loading loadingLabel="Chargement">
        Action
      </Button>
    </div>
  ),
};
