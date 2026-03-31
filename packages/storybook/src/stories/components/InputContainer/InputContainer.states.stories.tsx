import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';
import { InputContainer } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/InputContainer/States',
  component: InputContainer,
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    label: 'Adresse e-mail',
    state: 'Default',
    placeholder: 'exemple@domaine.fr',
    icon: Mail,
    withSupportingText: true,
    supportingText: "Message d'aide.",
  },
};

export const Hover: Story = {
  name: 'Hover',
  args: {
    label: 'Adresse e-mail',
    state: 'Hover',
    placeholder: 'exemple@domaine.fr',
    icon: Mail,
    withSupportingText: true,
    supportingText: "Message d'aide.",
  },
};

export const Focus: Story = {
  name: 'Focus',
  args: {
    label: 'Adresse e-mail',
    state: 'Focus',
    placeholder: 'exemple@domaine.fr',
    icon: Mail,
    withSupportingText: true,
    supportingText: "Message d'aide.",
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    label: 'Adresse e-mail',
    state: 'Disabled',
    placeholder: 'exemple@domaine.fr',
    icon: Mail,
    withSupportingText: true,
    supportingText: 'Ce champ est désactivé.',
  },
};

export const ReadOnly: Story = {
  name: 'Read-only',
  args: {
    label: 'Adresse e-mail',
    state: 'Read-only',
    placeholder: 'exemple@domaine.fr',
    icon: Mail,
    withSupportingText: true,
    supportingText: 'Ce champ est en lecture seule.',
  },
};

export const Overview: Story = {
  name: "Vue d'ensemble",
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '16px 24px',
        alignItems: 'start',
        width: '500px',
      }}
    >
      {(
        [
          { state: 'Default', label: 'Default', supporting: "Message d'aide." },
          { state: 'Hover', label: 'Hover', supporting: "Message d'aide." },
          { state: 'Focus', label: 'Focus', supporting: "Message d'aide." },
          { state: 'Disabled', label: 'Disabled', supporting: 'Ce champ est désactivé.' },
          { state: 'Read-only', label: 'Read-only', supporting: 'Ce champ est en lecture seule.' },
        ] as const
      ).map(({ state, label, supporting }) => (
        <>
          <span
            key={`label-${state}`}
            style={{
              fontSize: '11px',
              fontFamily: 'sans-serif',
              color: 'var(--text-neutral-subtle, #888)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              paddingTop: '6px',
            }}
          >
            {label}
          </span>
          <InputContainer
            key={state}
            label="Adresse e-mail"
            state={state}
            placeholder="exemple@domaine.fr"
            icon={Mail}
            withSupportingText
            supportingText={supporting}
          />
        </>
      ))}
    </div>
  ),
};
