import React from 'react';
import Navigation from '../Navigation';
import { MainContentStyled } from './styles';

const MainContent = () => {
  return (
    <div>
      <MainContentStyled>
          <Navigation />
          <div className="content">
            <div className="left">

            </div>
            <div className="right"></div>
          </div>
      </MainContentStyled>
    </div>
  )
}

export default MainContent
