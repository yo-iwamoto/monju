import type { ChangeHandler, InternalFieldName, RefCallBack } from 'react-hook-form';

export type FieldAttributes = {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: RefCallBack;
  name: InternalFieldName;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
};
