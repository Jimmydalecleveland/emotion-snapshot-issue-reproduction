import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  background-color: dodgerblue;
  color: white;
`

// 3 different ways to use Emotion CSS-in-JS
const EmotionComponent = () => {
  return (
    <StyledButton id="button2">Some Text</StyledButton>
  )
}

export default EmotionComponent
