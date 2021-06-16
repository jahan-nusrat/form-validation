import React from 'react'
import Form from './Form/Form'
import Heading from './Heading/Heading'
import { FormComponent, LayoutComponent,HeadingComponent, FromWrapper, HeadingWrapper } from './styles/Layout.style'

const Layout = () => {
  return (
    <LayoutComponent>
      {/* ========Form Component (Left side)======= */}
      <FormComponent>
        <FromWrapper>
          <Form />
        </FromWrapper>
      </FormComponent>
      {/* ========Heading Component (Right side)======= */}
      <HeadingComponent>
        <HeadingWrapper>
          <Heading />
        </HeadingWrapper>
      </HeadingComponent>
    </LayoutComponent>
  )
}

export default Layout
