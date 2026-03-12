import { forwardRef } from 'react';
import styles from './Button.module.css';

// ─── Types ───────────────────────────────────────────────────────────────────

export type ButtonLevel = 'primary' | 'secondary';
export type ButtonSize  = 'xs' | 's' | 'm' | 'l';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Hiérarchie visuelle */
  level?: ButtonLevel;
  /** Taille du bouton */
  size?: ButtonSize;
  /** État de chargement — remplace le contenu par un spinner */
  loading?: boolean;
  /** Texte lu par les lecteurs d'écran en état loading */
  loadingLabel?: string;
}

// ─── Spinner ─────────────────────────────────────────────────────────────────

/**
 * SVG spinner animé.
 * 16px pour XS, 24px pour S/M/L — fidèle Figma.
 */
function Spinner({ size }: { size: number }) {
  return (
    <svg
      aria-hidden="true"
      className={styles.spinner}
      focusable="false"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles.spinnerTrack}
        cx="12"
        cy="12"
        fill="none"
        r="10"
        strokeWidth="2.5"
      />
      <path
        className={styles.spinnerArc}
        d="M12 2a10 10 0 0 1 10 10"
        fill="none"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

// ─── Composant ───────────────────────────────────────────────────────────────

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      level        = 'primary',
      size         = 'm',
      loading      = false,
      loadingLabel = 'Chargement en cours',
      disabled,
      className,
      ...rest
    },
    ref,
  ) => {
    const isDisabled  = disabled;
    const spinnerSize = size === 'xs' ? 16 : 24;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading) return;
      rest.onClick?.(e);
    };

    const classes = [
      styles.button,
      styles[`level-${level}`],
      styles[`size-${size}`],
      loading && styles['is-loading'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        aria-busy={loading || undefined}
        aria-disabled={loading || isDisabled || undefined}
        className={classes}
        data-level={level}
        data-size={size}
        disabled={isDisabled}
        type="button"
        {...rest}
        onClick={handleClick}
      >
        {loading ? (
          <>
            <Spinner size={spinnerSize} />
            <span className={styles.srOnly}>{loadingLabel}</span>
          </>
        ) : (
          <span className={styles.label}>{children}</span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';