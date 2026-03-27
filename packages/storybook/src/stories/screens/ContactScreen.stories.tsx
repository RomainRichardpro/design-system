import type { Meta, StoryObj } from '@storybook/react';
import { ContactScreen } from './ContactScreen';

const meta: Meta<typeof ContactScreen> = {
  title: 'Screens/Contact',
  component: ContactScreen,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Formulaire de contact — layout centré éditorial, une colonne, typographie Vesterbro dominante.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContactScreen>;

export const Default: Story = {};
