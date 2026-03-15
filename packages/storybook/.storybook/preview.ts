import type { Preview } from '@storybook/react';

import '@romainrichardpro/tokens/css/colors-light';
import '@romainrichardpro/tokens/css/numbers';
import '@romainrichardpro/tokens/css/typography';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: [
          'Introduction',
          ['Bienvenue', 'Installation', 'Contribuer'],
          'Fondations',
          ['Couleurs', 'Typographie', 'Espacements', 'Tailles', 'Radius', 'Bordures'],
          'Composants',
          [
            'Button',
            ['Docs', 'Playground', 'Variants', 'States', 'Sizes', 'Usage'],
            'Checkbox',
            ['Docs', 'Playground', 'Variants', 'States', 'Usage'],
            '*',
          ],
          '*',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
  },
};

export default preview;
