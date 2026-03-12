import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

// ============================================================
// Rendu de base
// ============================================================

describe('Button — rendu', () => {
  it('affiche le texte passé en enfant', () => {
    render(<Button>Confirmer</Button>);
    expect(screen.getByRole('button', { name: 'Confirmer' })).toBeInTheDocument();
  });

  it('utilise le niveau primary par défaut', () => {
    render(<Button>Label</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('data-level', 'primary');
  });

  it('utilise la taille m par défaut', () => {
    render(<Button>Label</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('data-size', 'm');
  });

  it('applique level et size personnalisés', () => {
    render(
      <Button level="secondary" size="s">
        Label
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('data-level', 'secondary');
    expect(btn).toHaveAttribute('data-size', 's');
  });

  it('accepte une className additionnelle', () => {
    const { container } = render(<Button className="extra">Label</Button>);
    expect(container.firstChild).toHaveClass('extra');
  });

  it('transmet les props HTML standard au bouton natif', () => {
    render(
      <Button type="submit" data-testid="btn">
        Label
      </Button>,
    );
    const btn = screen.getByTestId('btn');
    expect(btn).toHaveAttribute('type', 'submit');
  });
});

// ============================================================
// État disabled
// ============================================================

describe('Button — disabled', () => {
  it('est désactivé quand disabled=true', () => {
    render(<Button disabled>Label</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('ne déclenche pas onClick quand disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Label
      </Button>,
    );
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('expose aria-disabled quand disabled', () => {
    render(<Button disabled>Label</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
  });
});

// ============================================================
// État loading
// ============================================================

describe('Button — loading', () => {
  it('est désactivé quand loading=true', () => {
    render(<Button loading>Label</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('expose aria-busy quand loading', () => {
    render(<Button loading>Label</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('affiche un texte accessible pour les lecteurs d\'écran', () => {
    render(<Button loading>Label</Button>);
    expect(screen.getByText('Chargement en cours')).toBeInTheDocument();
  });

  it('ne déclenche pas onClick quand loading', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button loading onClick={onClick}>
        Label
      </Button>,
    );
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });
});

// ============================================================
// Interactions
// ============================================================

describe('Button — interactions', () => {
  it('déclenche onClick au clic', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Action</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('est accessible au clavier (Enter)', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Action</Button>);
    screen.getByRole('button').focus();
    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('est accessible au clavier (Space)', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Action</Button>);
    screen.getByRole('button').focus();
    await user.keyboard(' ');
    expect(onClick).toHaveBeenCalledOnce();
  });
});

// ============================================================
// Accessibilité — jest-axe
// ============================================================

describe('Button — accessibilité (axe)', () => {
  it('primary default — aucune violation axe', async () => {
    const { container } = render(<Button>Label</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('secondary default — aucune violation axe', async () => {
    const { container } = render(<Button level="secondary">Label</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('primary disabled — aucune violation axe', async () => {
    const { container } = render(<Button disabled>Label</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('loading — aucune violation axe', async () => {
    const { container } = render(<Button loading>Label</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
