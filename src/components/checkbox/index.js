import React from 'react'
import styled from 'styled-components'

import * as colors from '../../colors'

export default function Checkbox({ id, name, checked, label, onClick }) {
  return (
    <CheckboxCont onClick={(e) => onClick(e.target.checked)}>
      <input type="checkbox" id={id} name={name} checked={checked} readOnly></input>
      <label htmlFor={id}>{label}</label>
    </CheckboxCont>
  )
}

const CheckboxCont = styled.div`
  position: relative;
  font-weight: 100;
  color: ${colors.fontColor};
  input {
    margin-right: 10px;
    font-size: 1.5em;
  }
  input,
  label {
    cursor: pointer;
  }
  label {
    opacity: 0.75;
  }
`
