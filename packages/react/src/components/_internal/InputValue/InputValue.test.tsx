import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { InputValue } from './InputValue';

expect.extend(toHaveNoViolations);

describe('InputValue — rendu', () => {
  it('rend sans props sans erreur', () => {
    const { container } = render(<InputValue />);
    expect(container.firstChild).toBeTruthy();
  });

  it('affiche la valeur passée', () => {
    render(<InputValue value="Mon texte" isFilled />);
    expect(screen.getByText('Mon texte')).toBeInTheDocument();
  });

  it('applique la classe is-placeholder quand isFilled=false', () => {
    const { container } = render(<InputValue value="placeholder" isFilled={false} />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toMatch(/is-placeholder/);
  });

  it('applique la classe is-filled quand isFilled=true', () => {
    const { container } = render(<InputValue value="valeur" isFilled />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toMatch(/is-filled/);
  });

  it('accepte une className additionnelle', () => {
    const { container } = render(<InputValue className="extra" />);
    expect(container.firstChild).toHaveClass('extra');
  });
});

describe('InputValue — accessibilité', () => {
  it('ne présente pas de violation axe (placeholder)', async () => {
    const { container } = render(
      <div>
        <InputValue value="Saisir une valeur" isFilled={false} />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (filled)', async () => {
    const { container } = render(
      <div>
        <InputValue value="Valeur saisie" isFilled />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
