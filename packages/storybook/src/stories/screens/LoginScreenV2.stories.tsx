import type { Meta, StoryObj } from '@storybook/react';
import { LoginScreenV2 } from './LoginScreenV2';

const meta: Meta<typeof LoginScreenV2> = {
  title: 'Screens/Login V2',
  component: LoginScreenV2,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Écran de connexion v2 — fond noir, card blanche centrée, glow violet. Direction radicalement différente du split layout v1.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginScreenV2>;

export const Default: Story = {};
