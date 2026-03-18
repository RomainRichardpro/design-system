import { useEffect, useId, useRef } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  /** Identifiant HTML — auto-généré si absent */
  id?: string;
  /** Texte du label — obligatoire pour l'accessibilité */
  label: string;
  /** Masque le label visuellement (reste dans le DOM pour les screen readers) */
  hideLabel?: boolean;
  /** État coché */
  checked?: boolean;
  /** État indéterminé (ex. : sélection partielle dans un groupe) */
  indeterminate?: boolean;
  /** Désactive l'interaction */
  disabled?: boolean;
  /** Callback déclenché au changement d'état */
  onChange?: (checked: boolean) => void;
  /** Classe CSS additionnelle sur l'élément racine */
  className?: string;
}

/**
 * Checkbox — Composant de sélection binaire ou indéterminée.
 *
 * Conforme WCAG 2.1 AA :
 * - Utilise `<input type="checkbox">` natif pour une compatibilité maximale
 *   avec les technologies d'assistance.
 * - L'état `indeterminate` est appliqué via la propriété DOM (non-standard HTML).
 * - Focus visible géré en CSS via `:focus-visible`.
 * - Label toujours présent dans le DOM même si masqué visuellement.
 */
export function Checkbox({
  id: idProp,
  label,
  hideLabel = false,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  className,
}: CheckboxProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div
      className={[styles.root, disabled ? styles.disabled : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
      data-component="ds-rr-checkbox"
    >
      <div className={styles.control} aria-hidden="true">
        <div className={styles.box}>
          {(checked || indeterminate) && (
            <span className={styles.icon}>{indeterminate ? <IconMinus /> : <IconCheck />}</span>
          )}
        </div>
      </div>

      <input
        ref={inputRef}
        id={id}
        type="checkbox"
        className={styles.input}
        checked={checked}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />

      <label
        htmlFor={id}
        className={[styles.label, hideLabel ? styles.srOnly : ''].filter(Boolean).join(' ')}
      >
        {label}
      </label>
    </div>
  );
}

function IconCheck() {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 4L3.5 6.5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMinus() {
  return (
    <svg
      width="10"
      height="2"
      viewBox="0 0 10 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 1H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default Checkbox;
