import React from 'react';
import cidade from '../../video//marketing.mp4';
import circle from '../../img/circles.svg';
import MainContent from '../MainContent'
import {
  MainAreaStyled,
  InnerLayout
} from './styles.js';

const MainArea = () => {
  return (
    <MainAreaStyled>
      <video src={cidade} muted playsInline autoPlay loop></video>
      <img src={circle} alt="" className="overlay" />

      <InnerLayout>
          <MainContent />
      </InnerLayout>
    </MainAreaStyled>

  )
}

export default MainArea
