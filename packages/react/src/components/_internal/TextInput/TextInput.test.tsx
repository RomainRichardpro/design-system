import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Search } from 'lucide-react';
import { TextInput } from './TextInput';

expect.extend(toHaveNoViolations);

describe('TextInput — rendu', () => {
  it('rend un <input> type="text"', () => {
    render(<TextInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('affiche le placeholder', () => {
    render(<TextInput placeholder="Rechercher..." />);
    expect(screen.getByPlaceholderText('Rechercher...')).toBeInTheDocument();
  });

  it('affiche la valeur', () => {
    render(<TextInput value="mon texte" onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toHaveValue('mon texte');
  });

  it("transmet id et name à l'input", () => {
    render(<TextInput id="email" name="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'email');
    expect(input).toHaveAttribute('name', 'email');
  });

  it('expose data-state et data-status sur le wrapper', () => {
    const { container } = render(<TextInput state="Focus" status="Error" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveAttribute('data-state', 'Focus');
    expect(wrapper).toHaveAttribute('data-status', 'Error');
  });

  it("affiche l'icône quand icon est fournie", () => {
    const { container } = render(<TextInput icon={Search} />);
    const iconWrapper = container.querySelector('[aria-hidden="true"]');
    expect(iconWrapper).toBeInTheDocument();
  });
});

describe('TextInput — état Disabled', () => {
  it("ajoute l'attribut disabled sur l'<input>", () => {
    render(<TextInput state="Disabled" />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});

describe('TextInput — état Read-only', () => {
  it("ajoute l'attribut readOnly sur l'<input>", () => {
    render(<TextInput state="Read-only" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
  });
});

describe('TextInput — status Error', () => {
  it('ajoute aria-invalid="true" quand status=Error', () => {
    render(<TextInput status="Error" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('ne met pas aria-invalid quand status=Default', () => {
    render(<TextInput status="Default" />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
  });
});

describe('TextInput — icône', () => {
  it("l'icône est aria-hidden", () => {
    const { container } = render(<TextInput icon={Search} />);
    const iconWrapper = container.querySelector('[aria-hidden="true"]');
    expect(iconWrapper).toBeInTheDocument();
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('TextInput — interactions', () => {
  it('appelle onChange quand on tape', async () => {
    const handleChange = vi.fn();
    render(<TextInput onChange={handleChange} />);
    await userEvent.type(screen.getByRole('textbox'), 'a');
    expect(handleChange).toHaveBeenCalled();
  });
});

describe('TextInput — accessibilité', () => {
  it('ne présente pas de violation axe (Default)', async () => {
    const { container } = render(
      <div>
        <label htmlFor="test-input">Nom</label>
        <TextInput id="test-input" state="Default" status="Default" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (Disabled)', async () => {
    const { container } = render(
      <div>
        <label htmlFor="test-disabled">Nom</label>
        <TextInput id="test-disabled" state="Disabled" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (Error)', async () => {
    const { container } = render(
      <div>
        <label htmlFor="test-error">Nom</label>
        <TextInput id="test-error" status="Error" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (Focus)', async () => {
    const { container } = render(
      <div>
        <label htmlFor="test-focus">Nom</label>
        <TextInput id="test-focus" state="Focus" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
