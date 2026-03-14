import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/Checkbox/States',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    controls: { disable: true },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Non coché" checked={false} />
      <Checkbox label="Coché" checked={true} />
      <Checkbox label="Indéterminé" indeterminate={true} />
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Non coché — désactivé" checked={false} disabled />
      <Checkbox label="Coché — désactivé" checked={true} disabled />
      <Checkbox label="Indéterminé — désactivé" indeterminate={true} disabled />
    </div>
  ),
};

export const Overview: Story = {
  name: 'Vue d\'ensemble',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr 1fr',
        gap: '12px 32px',
        alignItems: 'center',
      }}
    >
      {/* En-têtes */}
      <span style={{ fontSize: '11px', color: 'var(--text-neutral-subtle, #888)', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }} />
      <span style={{ fontSize: '11px', color: 'var(--text-neutral-subtle, #888)', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Default</span>
      <span style={{ fontSize: '11px', color: 'var(--text-neutral-subtle, #888)', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Disabled</span>
      {/* Non coché */}
      <span style={{ fontSize: '13px', fontFamily: 'sans-serif', color: 'var(--text-neutral-default, #222)' }}>Non coché</span>
      <Checkbox label="Option" checked={false} />
      <Checkbox label="Option" checked={false} disabled />
      {/* Coché */}
      <span style={{ fontSize: '13px', fontFamily: 'sans-serif', color: 'var(--text-neutral-default, #222)' }}>Coché</span>
      <Checkbox label="Option" checked={true} />
      <Checkbox label="Option" checked={true} disabled />
      {/* Indéterminé */}
      <span style={{ fontSize: '13px', fontFamily: 'sans-serif', color: 'var(--text-neutral-default, #222)' }}>Indéterminé</span>
      <Checkbox label="Option" indeterminate={true} />
      <Checkbox label="Option" indeterminate={true} disabled />
    </div>
  ),
};
