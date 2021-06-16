import React from 'react'
import { FooterSpanText, FooterText, FormContainer,FormFooter,FormHeader,FormHeaderText, SecondaryHeader, SecondaryHeaderText, SignInText } from './Form.style'
import FormInput from './FormInput/FormInput'

const Form = () => {
  return (
    <FormContainer>
      <FormHeader>
        <FormHeaderText>
          Let’s set up your account
        </FormHeaderText>
      </FormHeader>
      <SecondaryHeader>
        <SecondaryHeaderText>
          Already have an account? <SignInText>Sign in</SignInText>  
        </SecondaryHeaderText>
      </SecondaryHeader>
      <FormInput />
      <FormFooter>
        <FooterText>
          By clicking the “Next” button, you agree to creating a free account, and to <FooterSpanText>Terms of Service</FooterSpanText> and <FooterSpanText>Privacy Policy.</FooterSpanText>
        </FooterText>
      </FormFooter>
    </FormContainer>
  )
}

export default Form
