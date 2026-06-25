import type { InputHTMLAttributes, ReactNode } from 'react'
import { ErrorText, Field, InputRow, LabelRow, LabelText, StyledInput } from './StyledComponents'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  trailing?: ReactNode
  labelAction?: ReactNode
}

const TextInput = ({ label, error, trailing, labelAction, ...rest }: TextInputProps) => (
  <Field>
    <LabelRow>
      <LabelText>{label}</LabelText>
      {labelAction}
    </LabelRow>
    <InputRow>
      <StyledInput {...rest} />
      {trailing}
    </InputRow>
    {error ? <ErrorText>{error}</ErrorText> : null}
  </Field>
)

export default TextInput