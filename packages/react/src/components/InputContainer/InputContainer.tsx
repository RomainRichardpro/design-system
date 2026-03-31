import { useId, forwardRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { InputLabel } from '../_internal/InputLabel/InputLabel';
import { TextInput } from '../_internal/TextInput/TextInput';
import { SupportingText } from '../SupportingText/SupportingText';
import type { TextInputState, TextInputStatus } from '../_internal/TextInput/TextInput';
import type { SupportingTextStatus, SupportingTextState } from '../SupportingText/SupportingText';
import styles from './InputContainer.module.css';

export type InputContainerState =
  | 'Default'
  | 'Hover'
  | 'Active'
  | 'Focus'
  | 'Disabled'
  | 'Read-only';
export type InputContainerStatus = 'Default' | 'Success' | 'Error';

export interface InputContainerProps {
  label?: string;
  description?: string;
  withDescription?: boolean;
  isRequired?: boolean;
  state?: InputContainerState;
  status?: InputContainerStatus;
  withSupportingText?: boolean;
  supportingText?: string;
  placeholder?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}

function toLabelState(state: InputContainerState): 'Default' | 'Disabled' {
  return state === 'Disabled' ? 'Disabled' : 'Default';
}

function toSupportingStatus(status: InputContainerStatus): SupportingTextStatus {
  if (status === 'Success') return 'Success';
  if (status === 'Error') return 'Error';
  return 'Information';
}

function toSupportingState(state: InputContainerState): SupportingTextState {
  return state === 'Disabled' ? 'Disabled' : 'Default';
}

export const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(
  (
    {
      label,
      description,
      withDescription = false,
      isRequired = false,
      state = 'Default',
      status = 'Default',
      withSupportingText = false,
      supportingText,
      placeholder,
      icon,
      children,
      className,
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = generatedId;
    const supportingId = `${generatedId}-supporting`;

    const defaultInput = (
      <TextInput
        id={inputId}
        state={state as TextInputState}
        status={status as TextInputStatus}
        placeholder={placeholder}
        icon={icon}
        aria-required={isRequired || undefined}
        aria-describedby={withSupportingText ? supportingId : undefined}
      />
    );

    return (
      <div
        ref={ref}
        className={[styles.wrapper, className].filter(Boolean).join(' ')}
        data-component="ds-rr-input-container"
      >
        <InputLabel
          label={label}
          description={description}
          withDescription={withDescription}
          isRequired={isRequired}
          state={toLabelState(state)}
          htmlFor={inputId}
        />
        <div className={styles.inputSlot}>{children ?? defaultInput}</div>
        {withSupportingText && (
          <div id={supportingId}>
            <SupportingText
              text={supportingText}
              status={toSupportingStatus(status)}
              state={toSupportingState(state)}
            />
          </div>
        )}
      </div>
    );
  }
);

InputContainer.displayName = 'InputContainer';
