import React from 'react';
import { SmallHeadingStyled } from './styles.js';

function SmallHeading({title, identifier}) {
    return (
        <SmallHeadingStyled>
            <h3 className={identifier}>{title}</h3>
        </SmallHeadingStyled>
    )
}

export default SmallHeading
