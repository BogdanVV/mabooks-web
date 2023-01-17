import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { StyledInput, ErrorMessage } from './styled';

interface FormTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  label?: string;
  name: string;
  // TODO: type
  register: any;
  error?: FieldError;
}

export const FormTextInput = ({
  register,
  label,
  required,
  name,
  error,
  ...rest
}: FormTextInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <StyledInput {...rest} {...register(name, { required })} />
      {error && error.type === 'custom' && (
        <ErrorMessage>{error.message}</ErrorMessage>
      )}
      {error && error.type === 'required' && (
        <ErrorMessage>This field is required</ErrorMessage>
      )}
    </div>
  );
};
