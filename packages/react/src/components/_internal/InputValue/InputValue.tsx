import styles from './InputValue.module.css';

export interface InputValueProps {
  isFilled?: boolean;
  value?: string;
  className?: string;
}

export function InputValue({ isFilled = false, value, className }: InputValueProps) {
  return (
    <span
      className={[
        styles.value,
        isFilled ? styles['is-filled'] : styles['is-placeholder'],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {value}
    </span>
  );
}

InputValue.displayName = 'InputValue';
