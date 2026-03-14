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
          'Composants',
          [
            'Button',
            ['Docs', 'Playground', 'Variants', 'States', 'Sizes', 'Usage'],
            'Checkbox',
            ['Docs', 'Playground', 'Variants', 'States', 'Usage'],
            '*',
          ],
          'Fondations',
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