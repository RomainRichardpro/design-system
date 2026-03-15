import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/Checkbox/Variants',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    controls: { disable: true },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  name: 'Non coché',
  args: { label: 'Option', checked: false },
};

export const Checked: Story = {
  name: 'Coché',
  args: { label: 'Option', checked: true },
};

export const Indeterminate: Story = {
  name: 'Indéterminé',
  args: { label: 'Option', indeterminate: true },
};

export const HiddenLabel: Story = {
  name: 'Label masqué',
  args: {
    label: "Option (label accessible uniquement par lecteur d'écran)",
    hideLabel: true,
    checked: false,
  },
};

export const Overview: Story = {
  name: "Vue d'ensemble",
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Non coché" checked={false} />
      <Checkbox label="Coché" checked={true} />
      <Checkbox label="Indéterminé" indeterminate={true} />
      <Checkbox label="Label masqué (visible uniquement pour les SR)" hideLabel={true} />
    </div>
  ),
};
