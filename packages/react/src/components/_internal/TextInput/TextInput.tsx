import { forwardRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import styles from './TextInput.module.css';

export type TextInputState = 'Default' | 'Hover' | 'Active' | 'Focus' | 'Disabled' | 'Read-only';
export type TextInputStatus = 'Default' | 'Success' | 'Error';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: LucideIcon;
  state?: TextInputState;
  status?: TextInputStatus;
  id?: string;
  name?: string;
  className?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      value,
      onChange,
      placeholder,
      icon: Icon,
      state = 'Default',
      status = 'Default',
      id,
      name,
      className,
      ...rest
    },
    ref
  ) => {
    const isDisabled = state === 'Disabled';
    const isReadOnly = state === 'Read-only';

    return (
      <div
        className={[styles.wrapper, className].filter(Boolean).join(' ')}
        data-state={state}
        data-status={status}
      >
        {Icon && (
          <span className={styles.icon} aria-hidden="true">
            <Icon size={16} />
          </span>
        )}
        <input
          ref={ref}
          id={id}
          name={name}
          type="text"
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          aria-invalid={status === 'Error' ? true : undefined}
          {...rest}
        />
        {state === 'Focus' && (
          <span className={styles.focusRing} aria-hidden="true" />
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
