import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { InputLabel } from './InputLabel';

expect.extend(toHaveNoViolations);

describe('InputLabel — rendu', () => {
  it('rend sans props sans erreur', () => {
    const { container } = render(<InputLabel />);
    expect(container.firstChild).toBeTruthy();
  });

  it('affiche le label', () => {
    render(<InputLabel label="Adresse e-mail" />);
    expect(screen.getByText('Adresse e-mail')).toBeInTheDocument();
  });

  it('accepte une className additionnelle', () => {
    const { container } = render(<InputLabel className="extra" />);
    expect(container.firstChild).toHaveClass('extra');
  });
});

describe('InputLabel — isRequired', () => {
  it('affiche * si isRequired=true', () => {
    render(<InputLabel label="Email" isRequired />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('ne affiche pas * si isRequired=false', () => {
    render(<InputLabel label="Email" isRequired={false} />);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('le * est aria-hidden', () => {
    const { container } = render(<InputLabel label="Email" isRequired />);
    const required = container.querySelector('[aria-hidden="true"]');
    expect(required).toBeInTheDocument();
    expect(required?.textContent).toBe('*');
  });
});

describe('InputLabel — description', () => {
  it('affiche la description si withDescription=true ET description fournie', () => {
    render(
      <InputLabel label="Email" description="Votre adresse professionnelle" withDescription />
    );
    expect(screen.getByText('Votre adresse professionnelle')).toBeInTheDocument();
  });

  it("n'affiche pas la description si withDescription=false", () => {
    render(
      <InputLabel
        label="Email"
        description="Votre adresse professionnelle"
        withDescription={false}
      />
    );
    expect(screen.queryByText('Votre adresse professionnelle')).not.toBeInTheDocument();
  });

  it("n'affiche pas la description si description est absente même si withDescription=true", () => {
    const { container } = render(<InputLabel label="Email" withDescription />);
    const p = container.querySelector('p');
    expect(p).not.toBeInTheDocument();
  });
});

describe('InputLabel — htmlFor', () => {
  it('transmet htmlFor au <label>', () => {
    render(<InputLabel label="Email" htmlFor="email-input" />);
    const label = screen.getByText('Email');
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveAttribute('for', 'email-input');
  });
});

describe('InputLabel — accessibilité', () => {
  it('ne présente pas de violation axe (Default)', async () => {
    const { container } = render(
      <div>
        <InputLabel label="Email" htmlFor="email-a11y" state="Default" />
        <input id="email-a11y" type="text" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (Disabled)', async () => {
    const { container } = render(
      <div>
        <InputLabel label="Email" htmlFor="email-disabled" state="Disabled" />
        <input id="email-disabled" type="text" disabled />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ne présente pas de violation axe (avec description)', async () => {
    const { container } = render(
      <div>
        <InputLabel label="Email" description="Aide" withDescription htmlFor="email-desc" />
        <input id="email-desc" type="text" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
