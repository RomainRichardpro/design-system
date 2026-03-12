import { forwardRef, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export type ButtonLevel = 'primary' | 'secondary';
export type ButtonSize = 'xs' | 's' | 'm' | 'l';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Niveau visuel du bouton (Primary = plein, Secondary = contour) */
  level?: ButtonLevel;
  /** Taille du bouton */
  size?: ButtonSize;
  /** État de chargement — remplace le label par un spinner */
  loading?: boolean;
  /** Texte affiché dans le bouton */
  children: React.ReactNode;
}

/**
 * Composant Button du Design System.
 *
 * Deux niveaux visuels : Primary (fond plein) et Secondary (contour).
 * Quatre tailles : XS (32px), S (40px), M (48px), L (56px).
 * États gérés : default, hover, active, focus, disabled, loading.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      level = 'primary',
      size = 'm',
      loading = false,
      disabled = false,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={[
          styles.button,
          styles[`level-${level}`],
          styles[`size-${size}`],
          loading ? styles.loading : '',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        aria-disabled={isDisabled || undefined}
        data-level={level}
        data-size={size}
        {...props}
      >
        {loading ? (
          <span className={styles.spinner} aria-hidden="true" />
        ) : (
          <span className={styles.label}>{children}</span>
        )}
        {loading && (
          <span className="sr-only">Chargement en cours</span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
