import React from 'react'
import { HeadingContainer,ComponentHeading,ComponentTitleDiv,DummyText,DummyTextDiv } from './Heading.style'

const Heading = () => {
  return (
    <HeadingContainer>
      <ComponentTitleDiv>
        <ComponentHeading>
          Dummy Heading
        </ComponentHeading>
      </ComponentTitleDiv>
      <DummyTextDiv>
        <DummyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </DummyText>
      </DummyTextDiv>
    </HeadingContainer>
    
  )
}

export default Heading
