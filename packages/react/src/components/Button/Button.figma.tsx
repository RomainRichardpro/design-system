import figma from '@figma/code-connect';
import { Button } from './Button';

// État par défaut
figma.connect(
  Button,
  'https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU?node-id=18:797',
  {
    props: {
      level: figma.enum('Level', {
        Primary: 'Primary',
        Secondary: 'Secondary',
      }),
      size: figma.enum('Size', {
        XS: 'XS',
        S: 'S',
        M: 'M',
        L: 'L',
      }),
      label: figma.string('Label'),
    },
    example: ({ level, size, label }) => (
      <Button level={level} size={size}>
        {label}
      </Button>
    ),
  }
);

// État disabled
figma.connect(
  Button,
  'https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU?node-id=18:797',
  {
    variant: { State: 'Disabled' },
    props: {
      level: figma.enum('Level', {
        Primary: 'Primary',
        Secondary: 'Secondary',
      }),
      size: figma.enum('Size', {
        XS: 'XS',
        S: 'S',
        M: 'M',
        L: 'L',
      }),
      label: figma.string('Label'),
    },
    example: ({ level, size, label }) => (
      <Button level={level} size={size} state="Disabled">
        {label}
      </Button>
    ),
  }
);

// État loading
figma.connect(
  Button,
  'https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU?node-id=18:797',
  {
    variant: { State: 'Loading' },
    props: {
      level: figma.enum('Level', {
        Primary: 'Primary',
        Secondary: 'Secondary',
      }),
      size: figma.enum('Size', {
        XS: 'XS',
        S: 'S',
        M: 'M',
        L: 'L',
      }),
    },
    example: ({ level, size }) => (
      <Button level={level} size={size} state="Loading" />
    ),
  }
);
