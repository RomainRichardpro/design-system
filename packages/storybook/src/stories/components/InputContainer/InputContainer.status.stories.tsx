import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';
import { InputContainer } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/InputContainer/Status',
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
    status: 'Default',
    placeholder: 'exemple@domaine.fr',
    icon: Mail,
    withSupportingText: true,
    supportingText: 'Saisissez votre adresse e-mail professionnelle.',
  },
};

export const Success: Story = {
  name: 'Success',
  args: {
    label: 'Adresse e-mail',
    status: 'Success',
    placeholder: 'exemple@domaine.fr',
    icon: Mail,
    withSupportingText: true,
    supportingText: 'Adresse e-mail valide.',
  },
};

export const Error: Story = {
  name: 'Error',
  args: {
    label: 'Adresse e-mail',
    status: 'Error',
    placeholder: 'exemple@domaine.fr',
    icon: Mail,
    withSupportingText: true,
    supportingText: 'Cette adresse e-mail est invalide.',
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
          {
            status: 'Default',
            label: 'Default',
            supporting: 'Saisissez votre adresse e-mail professionnelle.',
          },
          { status: 'Success', label: 'Success', supporting: 'Adresse e-mail valide.' },
          {
            status: 'Error',
            label: 'Error',
            supporting: 'Cette adresse e-mail est invalide.',
          },
        ] as const
      ).map(({ status, label, supporting }) => (
        <>
          <span
            key={`label-${status}`}
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
            key={status}
            label="Adresse e-mail"
            status={status}
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
