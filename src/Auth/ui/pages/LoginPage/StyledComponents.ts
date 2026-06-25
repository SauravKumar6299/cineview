import styled from 'styled-components'

export const Page = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(1200px 600px at 50% -10%, rgba(99, 102, 241, 0.15), transparent),
    #0b0c10;
`

export const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  background: #0b0c10;
`

export const TopBrand = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
`

export const TopSignIn = styled.button`
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #6366f1;
  background: rgba(99, 102, 241, 0.15);
  color: #c7d2fe;
  font-weight: 600;
  cursor: pointer;
`

export const Content = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`

export const Card = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(17, 19, 27, 0.9);
  border: 1px solid #1f2230;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
`

export const Brand = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  color: #a5b4fc;
`

export const Heading = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
`

export const Subtitle = styled.p`
  margin: -0.75rem 0 0;
  text-align: center;
  font-size: 0.875rem;
  color: #9ca3af;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  font-size: 1rem;
`

export const ForgotLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 0.75rem;
  font-weight: 600;
  color: #a5b4fc;
  cursor: pointer;
`

export const FormError = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #f87171;
  text-align: center;
`

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #6b7280;
  font-size: 0.7rem;
  letter-spacing: 0.08em;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #1f2230;
  }
`

export const SocialRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  border: 1px solid #2e303a;
  background: #0f1117;
  color: #e5e7eb;
  font-weight: 600;
  cursor: pointer;
`

export const SignUpRow = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.85rem;
  color: #9ca3af;
`

export const SignUpLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 0.25rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem 2rem;
  border-top: 1px solid #1f2230;
  font-size: 0.8rem;
  color: #9ca3af;
`

export const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const FooterLink = styled.span`
  cursor: pointer;
`