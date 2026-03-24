import { Info, CircleCheck, XCircle } from 'lucide-react';
import styles from './SupportingText.module.css';

export type SupportingTextState = 'Default' | 'Disabled';
export type SupportingTextStatus = 'Information' | 'Success' | 'Error';

export interface SupportingTextProps {
  text?: string;
  state?: SupportingTextState;
  status?: SupportingTextStatus;
  className?: string;
}

function getIcon(status: SupportingTextStatus) {
  if (status === 'Success') return CircleCheck;
  if (status === 'Error') return XCircle;
  return Info;
}

export function SupportingText({
  text,
  state = 'Default',
  status = 'Information',
  className,
}: SupportingTextProps) {
  const Icon = getIcon(status);
  const isError = status === 'Error' && state !== 'Disabled';

  return (
    <div
      className={[styles.wrapper, className].filter(Boolean).join(' ')}
      data-component="ds-rr-supporting-text"
      data-state={state}
      data-status={status}
      role={isError ? 'alert' : undefined}
    >
      <span className={styles.iconWrapper} aria-hidden="true">
        <Icon size={16} />
      </span>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

SupportingText.displayName = 'SupportingText';
