import styles from './InputLabel.module.css';

export type InputLabelState = 'Default' | 'Disabled';

export interface InputLabelProps {
  label?: string;
  description?: string;
  withDescription?: boolean;
  isRequired?: boolean;
  state?: InputLabelState;
  htmlFor?: string;
  className?: string;
}

export function InputLabel({
  label,
  description,
  withDescription = false,
  isRequired = false,
  state = 'Default',
  htmlFor,
  className,
}: InputLabelProps) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')} data-state={state}>
      <div className={styles.labelRow}>
        <label htmlFor={htmlFor} className={styles.label}>
          {label}
        </label>
        {isRequired && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </div>
      {withDescription && description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

InputLabel.displayName = 'InputLabel';
