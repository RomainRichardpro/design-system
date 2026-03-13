import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from '@romainrichardpro/react';

const meta = {
  title: 'Composants/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Le composant \`Checkbox\` permet à l'utilisateur de sélectionner ou désélectionner une option.
Il supporte trois états de sélection : **non coché**, **coché** et **indéterminé**.

### Accessibilité
- Utilise un \`<input type="checkbox">\` natif pour une compatibilité maximale avec les technologies d'assistance.
- L'état \`indeterminate\` est transmis aux screen readers via \`aria-checked="mixed"\`.
- La navigation clavier est entièrement supportée (\`Tab\` pour atteindre, \`Space\` pour basculer).
- Le focus visible est rendu via un halo conforme WCAG 2.1 AA (\`:focus-visible\`).
- Le label est toujours présent dans le DOM, même avec \`hideLabel\`.

### Usage typique
\`\`\`tsx
const [checked, setChecked] = useState(false);

<Checkbox
  label="Accepter les conditions"
  checked={checked}
  onChange={setChecked}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: { description: 'Texte du label — obligatoire pour l\'accessibilité.', control: 'text' },
    hideLabel: { description: 'Masque le label visuellement tout en le conservant pour les screen readers.', control: 'boolean' },
    checked: { description: 'État coché.', control: 'boolean' },
    indeterminate: { description: 'État indéterminé — typique d\'une sélection partielle dans un groupe.', control: 'boolean' },
    disabled: { description: 'Désactive l\'interaction.', control: 'boolean' },
    onChange: { description: 'Callback déclenché au changement d\'état.', action: 'onChange' },
  },
  args: {
    label: 'Label',
    hideLabel: false,
    checked: false,
    indeterminate: false,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(val) => {
          setChecked(val);
          args.onChange?.(val);
        }}
      />
    );
  },
};

export const NonCoche: Story = {
  name: 'Non coché',
  args: { checked: false },
};

export const Coche: Story = {
  name: 'Coché',
  args: { checked: true },
};

export const Indetermine: Story = {
  name: 'Indéterminé',
  args: { indeterminate: true },
};

export const DisabledNonCoche: Story = {
  name: 'Désactivé — non coché',
  args: { disabled: true, checked: false },
};

export const DisabledCoche: Story = {
  name: 'Désactivé — coché',
  args: { disabled: true, checked: true },
};

export const DisabledIndetermine: Story = {
  name: 'Désactivé — indéterminé',
  args: { disabled: true, indeterminate: true },
};

export const SansLabel: Story = {
  name: 'Label masqué',
  args: { hideLabel: true },
};

export const LabelLong: Story = {
  name: 'Label long',
  args: {
    label: 'En cochant cette case, vous acceptez nos conditions générales d\'utilisation ainsi que notre politique de confidentialité.',
  },
};

export const ToutesLesVariantes: Story = {
  name: 'Toutes les variantes',
  parameters: { controls: { disable: true } },
  render: () => {
    const rows = [
      { label: 'Non coché — Default' },
      { label: 'Coché — Default', checked: true },
      { label: 'Indéterminé — Default', indeterminate: true },
      { label: 'Non coché — Disabled', disabled: true },
      { label: 'Coché — Disabled', checked: true, disabled: true },
      { label: 'Indéterminé — Disabled', indeterminate: true, disabled: true },
    ] as const;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {rows.map((props) => (
          <Checkbox key={props.label} {...props} />
        ))}
      </div>
    );
  },
};

export const Controle: Story = {
  name: 'Contrôlé',
  parameters: { controls: { disable: true } },
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
        <Checkbox label="Recevoir la newsletter" checked={checked} onChange={setChecked} />
        <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>
          État courant : <strong>{checked ? 'coché' : 'non coché'}</strong>
        </p>
      </div>
    );
  },
};
