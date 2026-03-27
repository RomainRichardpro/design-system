import type { Meta, StoryObj } from '@storybook/react';
import { OnboardingStep1 } from './OnboardingStep1';

const meta: Meta<typeof OnboardingStep1> = {
  title: 'Screens/OnboardingStep1',
  component: OnboardingStep1,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Onboarding étape 1/3 — split layout violet/blanc. Le panneau gauche ancre l\'identité visuelle (Vesterbro, accent violet), le panneau droit livre un formulaire dense et précis pour créer l\'espace de travail.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OnboardingStep1>;

export const Default: Story = {};
