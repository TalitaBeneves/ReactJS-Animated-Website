import React from 'react'
import { CtaButtonStyled } from './styles.js';


function CtaButton ({name}) {
  return (
    <CtaButtonStyled>
      {name}
    </CtaButtonStyled>
  )
}

export default CtaButton
