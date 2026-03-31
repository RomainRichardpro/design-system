import type { Meta, StoryObj } from '@storybook/react';
import { SupportingText } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/SupportingText/Status',
  component: SupportingText,
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
} satisfies Meta<typeof SupportingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Information: Story = {
  name: 'Information',
  args: {
    text: 'Saisissez votre adresse e-mail professionnelle.',
    status: 'Information',
    state: 'Default',
  },
};

export const Success: Story = {
  name: 'Success',
  args: {
    text: 'Adresse e-mail valide.',
    status: 'Success',
    state: 'Default',
  },
};

export const Error: Story = {
  name: 'Error',
  args: {
    text: 'Cette adresse e-mail est invalide.',
    status: 'Error',
    state: 'Default',
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    text: 'Saisissez votre adresse e-mail professionnelle.',
    status: 'Information',
    state: 'Disabled',
  },
};

export const Overview: Story = {
  name: "Vue d'ensemble",
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
        Default
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
        Disabled
      </span>

      {/* Information */}
      <span style={{ fontSize: '13px', fontFamily: 'sans-serif', color: 'var(--text-neutral-default, #222)' }}>
        Information
      </span>
      <SupportingText text="Message d'aide." status="Information" state="Default" />
      <SupportingText text="Message d'aide." status="Information" state="Disabled" />

      {/* Success */}
      <span style={{ fontSize: '13px', fontFamily: 'sans-serif', color: 'var(--text-neutral-default, #222)' }}>
        Success
      </span>
      <SupportingText text="Valide." status="Success" state="Default" />
      <SupportingText text="Valide." status="Success" state="Disabled" />

      {/* Error */}
      <span style={{ fontSize: '13px', fontFamily: 'sans-serif', color: 'var(--text-neutral-default, #222)' }}>
        Error
      </span>
      <SupportingText text="Invalide." status="Error" state="Default" />
      <SupportingText text="Invalide." status="Error" state="Disabled" />
    </div>
  ),
};
