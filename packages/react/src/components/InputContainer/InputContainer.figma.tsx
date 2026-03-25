import figma from '@figma/code-connect';
import { InputContainer } from './InputContainer';

// État par défaut
figma.connect(
  InputContainer,
  'https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU?node-id=8130:1144',
  {
    props: {
      label: figma.string('Label'),
      description: figma.string('Description'),
      withDescription: figma.boolean('with Description'),
      withSupportingText: figma.boolean('with supporting-text'),
      isRequired: figma.boolean('is Required'),
      status: figma.enum('Status', {
        Default: 'Default',
        Success: 'Success',
        Error: 'Error',
      }),
    },
    example: ({ label, description, withDescription, withSupportingText, isRequired, status }) => (
      <InputContainer
        label={label}
        description={description}
        withDescription={withDescription}
        withSupportingText={withSupportingText}
        isRequired={isRequired}
        status={status}
      />
    ),
  }
);

// État disabled
figma.connect(
  InputContainer,
  'https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU?node-id=8130:1144',
  {
    variant: { State: 'Disabled' },
    props: {
      label: figma.string('Label'),
      description: figma.string('Description'),
      withDescription: figma.boolean('with Description'),
      withSupportingText: figma.boolean('with supporting-text'),
      isRequired: figma.boolean('is Required'),
      status: figma.enum('Status', {
        Default: 'Default',
        Success: 'Success',
        Error: 'Error',
      }),
    },
    example: ({ label, description, withDescription, withSupportingText, isRequired, status }) => (
      <InputContainer
        label={label}
        description={description}
        withDescription={withDescription}
        withSupportingText={withSupportingText}
        isRequired={isRequired}
        state="Disabled"
        status={status}
      />
    ),
  }
);

// État read-only
figma.connect(
  InputContainer,
  'https://www.figma.com/design/skRy27piDeBGQwD8Bi0EAU?node-id=8130:1144',
  {
    variant: { State: 'Read-only' },
    props: {
      label: figma.string('Label'),
      description: figma.string('Description'),
      withDescription: figma.boolean('with Description'),
      withSupportingText: figma.boolean('with supporting-text'),
      isRequired: figma.boolean('is Required'),
      status: figma.enum('Status', {
        Default: 'Default',
        Success: 'Success',
        Error: 'Error',
      }),
    },
    example: ({ label, description, withDescription, withSupportingText, isRequired, status }) => (
      <InputContainer
        label={label}
        description={description}
        withDescription={withDescription}
        withSupportingText={withSupportingText}
        isRequired={isRequired}
        state="Read-only"
        status={status}
      />
    ),
  }
);
