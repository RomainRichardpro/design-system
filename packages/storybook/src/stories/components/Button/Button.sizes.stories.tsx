import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/Button/Sizes',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: { disable: true },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const XS: Story = {
  name: 'XS — 32px',
  args: { level: 'primary', size: 'xs', children: 'Bouton XS' },
};

export const S: Story = {
  name: 'S — 40px',
  args: { level: 'primary', size: 's', children: 'Bouton S' },
};

export const M: Story = {
  name: 'M — 48px',
  args: { level: 'primary', size: 'm', children: 'Bouton M' },
};

export const L: Story = {
  name: 'L — 56px',
  args: { level: 'primary', size: 'l', children: 'Bouton L' },
};

export const Overview: Story = {
  name: "Vue d'ensemble",
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
      <Button level="primary" size="xs">
        XS — 32px
      </Button>
      <Button level="primary" size="s">
        S — 40px
      </Button>
      <Button level="primary" size="m">
        M — 48px
      </Button>
      <Button level="primary" size="l">
        L — 56px
      </Button>
    </div>
  ),
};
