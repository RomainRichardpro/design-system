import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/Button/Variants',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: { disable: true },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Primary',
  args: {
    level: 'primary',
    size: 'm',
    children: 'Action principale',
  },
};

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    level: 'secondary',
    size: 'm',
    children: 'Action secondaire',
  },
};

export const Overview: Story = {
  name: "Vue d'ensemble",
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button level="primary" size="m">
        Primary
      </Button>
      <Button level="secondary" size="m">
        Secondary
      </Button>
    </div>
  ),
};
