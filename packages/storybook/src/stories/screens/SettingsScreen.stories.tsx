import type { Meta, StoryObj } from '@storybook/react';
import { SettingsScreen } from './SettingsScreen';

const meta = {
  title: 'Screens/Settings',
  component: SettingsScreen,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SettingsScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
