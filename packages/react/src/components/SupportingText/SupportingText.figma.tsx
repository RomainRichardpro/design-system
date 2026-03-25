import figma from '@figma/code-connect';
import { SupportingText } from './SupportingText';

// État par défaut
figma.connect(
  SupportingText,
  'https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU?node-id=8129:813',
  {
    props: {
      text: figma.string('Text'),
      status: figma.enum('Status', {
        Information: 'Information',
        Success: 'Success',
        Error: 'Error',
      }),
    },
    example: ({ text, status }) => <SupportingText text={text} status={status} />,
  }
);

// État disabled
figma.connect(
  SupportingText,
  'https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU?node-id=8129:813',
  {
    variant: { State: 'Disabled' },
    props: {
      text: figma.string('Text'),
      status: figma.enum('Status', {
        Information: 'Information',
        Success: 'Success',
        Error: 'Error',
      }),
    },
    example: ({ text, status }) => (
      <SupportingText text={text} status={status} state="Disabled" />
    ),
  }
);
