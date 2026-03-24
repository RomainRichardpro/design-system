import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { SupportingText } from './SupportingText';

expect.extend(toHaveNoViolations);

describe('SupportingText — rendu', () => {
  it('rend sans props sans erreur', () => {
    const { container } = render(<SupportingText />);
    expect(container.firstChild).toBeTruthy();
  });

  it('affiche le texte passé', () => {
    render(<SupportingText text="Ce champ est requis" />);
    expect(screen.getByText('Ce champ est requis')).toBeInTheDocument();
  });

  it('porte data-component="ds-rr-supporting-text"', () => {
    const { container } = render(<SupportingText />);
    expect(container.firstChild).toHaveAttribute('data-component', 'ds-rr-supporting-text');
  });

  it('accepte une className additionnelle', () => {
    const { container } = render(<SupportingText className="extra" />);
    expect(container.firstChild).toHaveClass('extra');
  });
});

describe('SupportingText — icônes', () => {
  it('affiche une icône pour status=Information', () => {
    const { container } = render(<SupportingText status="Information" />);
    const icon = container.querySelector('[aria-hidden="true"] svg');
    expect(icon).toBeInTheDocument();
  });

  it('affiche une icône pour status=Success', () => {
    const { container } = render(<SupportingText status="Success" />);
    const icon = container.querySelector('[aria-hidden="true"] svg');
    expect(icon).toBeInTheDocument();
  });

  it('affiche une icône pour status=Error', () => {
    const { container } = render(<SupportingText status="Error" />);
    const icon = container.querySelector('[aria-hidden="true"] svg');
    expect(icon).toBeInTheDocument();
  });
});

describe('SupportingText — role alert', () => {
  it('a role="alert" quand status=Error et state=Default', () => {
    const { container } = render(<SupportingText status="Error" state="Default" />);
    expect(container.firstChild).toHaveAttribute('role', 'alert');
  });

  it('n\'a pas role="alert" quand status=Information', () => {
    const { container } = render(<SupportingText status="Information" />);
    expect(container.firstChild).not.toHaveAttribute('role', 'alert');
  });

  it('n\'a pas role="alert" quand state=Disabled même si status=Error', () => {
    const { container } = render(<SupportingText status="Error" state="Disabled" />);
    expect(container.firstChild).not.toHaveAttribute('role', 'alert');
  });
});

describe('SupportingText — accessibilité', () => {
  it('ne présente pas de violation axe (Information)', async () => {
    const { container } = render(<SupportingText text="Aide" status="Information" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (Success)', async () => {
    const { container } = render(<SupportingText text="Validé" status="Success" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (Error)', async () => {
    const { container } = render(<SupportingText text="Erreur" status="Error" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (Disabled)', async () => {
    const { container } = render(<SupportingText text="Désactivé" state="Disabled" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
