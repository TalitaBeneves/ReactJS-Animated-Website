import React from 'react'
import { MainTitleStyled } from './styled';
import SmallHeading from '../SmallHeading';

function MainTitle ({title, subtitle, para}) {
    return (
        <MainTitleStyled>
            <SmallHeading title={subtitle} />
            <h2>{title}</h2>
            <p>{para}</p>
        </MainTitleStyled>
    )
}
export default MainTitle;
