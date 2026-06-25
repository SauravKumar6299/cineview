import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useAuth } from '../../../data/context/useAuth'
import { loginSchema } from '../../../data/schemas/Auth.schemas'
import { TextInput, Button } from '../../../../Common'
import {
  Brand,
  Card,
  Content,
  Divider,
  Footer,
  FooterLink,
  FooterLinks,
  ForgotLink,
  Form,
  FormError,
  Heading,
  Page,
  SignUpLink,
  SignUpRow,
  SocialButton,
  SocialRow,
  Subtitle,
  ToggleButton,
  TopBar,
  TopBrand,
  TopSignIn,
} from './StyledComponents'

const LoginPage = () => {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: Location })?.from?.pathname ?? '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({})

  if (isAuthenticated) return <Navigate to={from} replace />

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const parsed = loginSchema.safeParse({ email, password })
    if (!parsed.success) {
      const fieldErrors = z.flattenError(parsed.error).fieldErrors
      setErrors({ email: fieldErrors.email?.[0], password: fieldErrors.password?.[0] })
      return
    }
    const result = login(parsed.data)
    if (!result.success) {
      setErrors({ form: result.error })
      return
    }
    navigate(from, { replace: true })
  }

  return (
    <Page>
      <TopBar>
        <TopBrand>Cine View</TopBrand>
        <TopSignIn type="button">Sign In</TopSignIn>
      </TopBar>
      <Content>
        <Card>
          <Brand>Cine View</Brand>
          <Heading>Welcome Back</Heading>
          <Subtitle>Sign in to your account</Subtitle>
          <Form onSubmit={handleSubmit}>
            <TextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <TextInput
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              labelAction={<ForgotLink type="button">Forgot Password?</ForgotLink>}
              trailing={
                <ToggleButton
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '🙈' : '👁'}
                </ToggleButton>
              }
            />
            {errors.form ? <FormError role="alert">{errors.form}</FormError> : null}
            <Button type="submit" style={{ width: '100%' }}>Sign In</Button>
          </Form>
          <Divider>OR CONTINUE WITH</Divider>
          <SocialRow>
            <SocialButton type="button">G&nbsp;Google</SocialButton>
            <SocialButton type="button">&#63743;&nbsp;Apple</SocialButton>
          </SocialRow>
          <SignUpRow>
            Don&apos;t have an account?
            <SignUpLink type="button">Sign Up</SignUpLink>
          </SignUpRow>
        </Card>
      </Content>
      <Footer>
        <TopBrand>Cine View</TopBrand>
        <FooterLinks>
          <FooterLink>Privacy Policy</FooterLink>
          <FooterLink>Terms of Service</FooterLink>
          <FooterLink>Help Center</FooterLink>
        </FooterLinks>
        <span>© 2024 Cine View. All rights reserved.</span>
      </Footer>
    </Page>
  )
}

export default LoginPage