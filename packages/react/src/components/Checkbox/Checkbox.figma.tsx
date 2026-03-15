import figma from '@figma/code-connect';
import { Checkbox } from './Checkbox';

// État par défaut
figma.connect(
  Checkbox,
  'https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU?node-id=133:998',
  {
    props: {
      selection: figma.enum('Selection', {
        Unselected: 'Unselected',
        Selected: 'Selected',
        Indeterminate: 'Indeterminate',
      }),
      label: figma.string('Label'),
      displayLabel: figma.boolean('Display label'),
    },
    example: ({ selection, label, displayLabel }) => (
      <Checkbox
        selection={selection}
        label={label}
        displayLabel={displayLabel}
      />
    ),
  }
);

// État disabled
figma.connect(
  Checkbox,
  'https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU?node-id=133:998',
  {
    variant: { State: 'Disabled' },
    props: {
      selection: figma.enum('Selection', {
        Unselected: 'Unselected',
        Selected: 'Selected',
        Indeterminate: 'Indeterminate',
      }),
      label: figma.string('Label'),
      displayLabel: figma.boolean('Display label'),
    },
    example: ({ selection, label, displayLabel }) => (
      <Checkbox
        selection={selection}
        state="Disabled"
        label={label}
        displayLabel={displayLabel}
      />
    ),
  }
);
