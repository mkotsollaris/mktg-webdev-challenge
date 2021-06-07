import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 22px;
  height: 22px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  background: ${(props) => (props.checked ? 'dodgerblue' : 'white')};
  border-radius: 3px;
  border: 1px solid dodgerblue;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px dodgerblue;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

const Checkbox = ({ className, checked, ...props }) => {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="17 7 9 17 5 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

export default Checkbox
