import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { InputContainer } from './InputContainer';

expect.extend(toHaveNoViolations);

describe('InputContainer — rendu', () => {
  it('rend sans props sans erreur', () => {
    const { container } = render(<InputContainer />);
    expect(container.firstChild).toBeTruthy();
  });

  it('porte data-component="ds-rr-input-container"', () => {
    const { container } = render(<InputContainer />);
    expect(container.firstChild).toHaveAttribute('data-component', 'ds-rr-input-container');
  });

  it('affiche le label quand fourni', () => {
    render(<InputContainer label="Nom complet" />);
    expect(screen.getByText('Nom complet')).toBeInTheDocument();
  });

  it('accepte une className additionnelle', () => {
    const { container } = render(<InputContainer className="extra" />);
    expect(container.firstChild).toHaveClass('extra');
  });
});

describe('InputContainer — slot input', () => {
  it('affiche un TextInput par défaut quand children absent', () => {
    render(<InputContainer />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('affiche children quand fourni (pas de TextInput par défaut)', () => {
    render(
      <InputContainer>
        <input type="text" data-testid="custom-input" aria-label="Custom input" />
      </InputContainer>
    );
    expect(screen.getByTestId('custom-input')).toBeInTheDocument();
  });
});

describe('InputContainer — SupportingText', () => {
  it('affiche le SupportingText si withSupportingText=true', () => {
    render(<InputContainer withSupportingText supportingText="Ce champ est requis" />);
    expect(screen.getByText('Ce champ est requis')).toBeInTheDocument();
  });

  it("n'affiche pas le SupportingText si withSupportingText=false", () => {
    render(<InputContainer withSupportingText={false} supportingText="Ce champ est requis" />);
    expect(screen.queryByText('Ce champ est requis')).not.toBeInTheDocument();
  });
});

describe('InputContainer — propagation état Disabled', () => {
  it('transmet state=Disabled au label', () => {
    const { container } = render(<InputContainer label="Email" state="Disabled" />);
    const labelWrapper = container.querySelector('[data-state="Disabled"]');
    expect(labelWrapper).toBeInTheDocument();
  });

  it("transmet state=Disabled à l'input par défaut", () => {
    render(<InputContainer state="Disabled" />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});

describe('InputContainer — propagation status Error', () => {
  it('le SupportingText a role="alert" quand status=Error et withSupportingText=true', () => {
    const { container } = render(
      <InputContainer status="Error" withSupportingText supportingText="Erreur" />
    );
    const alert = container.querySelector('[role="alert"]');
    expect(alert).toBeInTheDocument();
  });

  it("l'input a aria-invalid=true quand status=Error", () => {
    render(<InputContainer status="Error" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('InputContainer — interactions', () => {
  it('tab déplace le focus sur le textbox', async () => {
    const user = userEvent.setup();
    render(<InputContainer label="Email" />);
    await user.tab();
    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  it("click sur le champ donne le focus à l'input", async () => {
    const user = userEvent.setup();
    render(<InputContainer label="Email" />);
    await user.click(screen.getByRole('textbox'));
    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  it('type saisit du texte dans le champ', async () => {
    const user = userEvent.setup();
    render(<InputContainer label="Email" />);
    await user.click(screen.getByRole('textbox'));
    await user.type(screen.getByRole('textbox'), 'test@example.com');
    expect(screen.getByRole('textbox')).toHaveValue('test@example.com');
  });

  it('le focus ring est présent dans le DOM', () => {
    const { container } = render(<InputContainer label="Email" />);
    const focusRing = container.querySelector('[aria-hidden="true"]:not(span[class*="icon"])');
    expect(focusRing).toBeInTheDocument();
  });

  it('le champ désactivé ne reçoit pas le focus via tab', async () => {
    const user = userEvent.setup();
    render(<InputContainer label="Email" state="Disabled" />);
    await user.tab();
    expect(screen.getByRole('textbox')).not.toHaveFocus();
  });
});

describe('InputContainer — accessibilité', () => {
  it('ne présente pas de violation axe (Default)', async () => {
    const { container } = render(<InputContainer label="Nom" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (avec SupportingText)', async () => {
    const { container } = render(
      <InputContainer
        label="Email"
        withSupportingText
        supportingText="Votre adresse professionnelle"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (Error)', async () => {
    const { container } = render(
      <InputContainer
        label="Email"
        status="Error"
        withSupportingText
        supportingText="Ce champ est invalide"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (Disabled)', async () => {
    const { container } = render(<InputContainer label="Email" state="Disabled" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
