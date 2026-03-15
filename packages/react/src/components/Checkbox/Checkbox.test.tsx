import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';
import { Checkbox } from './Checkbox';

expect.extend(toHaveNoViolations);

describe('Checkbox — rendu', () => {
  it('affiche le label', () => {
    render(<Checkbox label="Accepter les conditions" />);
    expect(screen.getByLabelText('Accepter les conditions')).toBeInTheDocument();
  });

  it("associe le label à l'input via htmlFor/id", () => {
    render(<Checkbox label="Mon option" id="option-1" />);
    const input = screen.getByRole('checkbox', { name: 'Mon option' });
    expect(input).toHaveAttribute('id', 'option-1');
  });

  it('génère un id automatique si absent', () => {
    render(<Checkbox label="Auto ID" />);
    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('id');
    expect(input.getAttribute('id')).toBeTruthy();
  });

  it('masque visuellement le label avec hideLabel tout en le gardant accessible', () => {
    render(<Checkbox label="Label masqué" hideLabel />);
    expect(screen.getByText('Label masqué')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Label masqué' })).toBeInTheDocument();
  });

  it('applique une className additionnelle sur la racine', () => {
    const { container } = render(<Checkbox label="Test" className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});

describe('Checkbox — états', () => {
  it('est non coché par défaut', () => {
    render(<Checkbox label="Option" />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('est coché quand checked=true', () => {
    render(<Checkbox label="Option" checked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('expose aria-checked="mixed" en état indéterminé', () => {
    render(<Checkbox label="Option" indeterminate />);
    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('aria-checked', 'mixed');
  });

  it('est désactivé quand disabled=true', () => {
    render(<Checkbox label="Option" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('est coché ET désactivé simultanément', () => {
    render(<Checkbox label="Option" checked disabled />);
    const input = screen.getByRole('checkbox');
    expect(input).toBeChecked();
    expect(input).toBeDisabled();
  });

  it('est indéterminé ET désactivé simultanément', () => {
    render(<Checkbox label="Option" indeterminate disabled />);
    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('aria-checked', 'mixed');
    expect(input).toBeDisabled();
  });
});

describe('Checkbox — interactions', () => {
  it('déclenche onChange avec true au clic sur une checkbox non cochée', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Option" checked={false} onChange={handleChange} />);
    await user.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledOnce();
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('déclenche onChange avec false au clic sur une checkbox cochée', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Option" checked onChange={handleChange} />);
    await user.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledOnce();
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('ne déclenche pas onChange quand disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Option" disabled onChange={handleChange} />);
    await user.click(screen.getByRole('checkbox'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('est activable au clavier (Space)', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Option" checked={false} onChange={handleChange} />);
    const input = screen.getByRole('checkbox');
    input.focus();
    await user.keyboard(' ');
    expect(handleChange).toHaveBeenCalledOnce();
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('est atteignable au Tab', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Option" />);
    await user.tab();
    expect(screen.getByRole('checkbox')).toHaveFocus();
  });

  it("n'est pas atteignable au Tab quand disabled", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Option" disabled />);
    await user.tab();
    expect(screen.getByRole('checkbox')).not.toHaveFocus();
  });
});

describe('Checkbox — accessibilité', () => {
  it("n'a aucune violation axe — état default", async () => {
    const { container } = render(<Checkbox label="Option" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("n'a aucune violation axe — état checked", async () => {
    const { container } = render(<Checkbox label="Option" checked />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("n'a aucune violation axe — état indeterminate", async () => {
    const { container } = render(<Checkbox label="Option" indeterminate />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("n'a aucune violation axe — état disabled", async () => {
    const { container } = render(<Checkbox label="Option" disabled />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("n'a aucune violation axe — label masqué", async () => {
    const { container } = render(<Checkbox label="Label masqué" hideLabel />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
