import React from 'react'
import {SmallHeadingStyled} from './styles';

function SmallHeading ({identifier, title}) {
    return (
        <SmallHeadingStyled>
            <h3 className={identifier}>{title}</h3>
        </SmallHeadingStyled>
    )
}

export default SmallHeading;
