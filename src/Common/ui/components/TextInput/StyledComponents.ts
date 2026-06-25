import styled from 'styled-components'

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
`

export const LabelText = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #2e303a;
  border-radius: 0.5rem;
  background: #0f1117;
`

export const StyledInput = styled.input`
  flex: 1;
  padding: 0.625rem 0.75rem;
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
`

export const ErrorText = styled.span`
  font-size: 0.75rem;
  color: #f87171;
`
export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`