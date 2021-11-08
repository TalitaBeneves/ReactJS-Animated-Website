import React from 'react';
import Mountain from '../../video//Mountain.mp4';
import MainContent from '../MainContent'
import { MainAreaStyled, InnerLayout } from './styles.js';

const MainArea = () => {
  return (
    <MainAreaStyled>
      <video src={Mountain} muted playsInline autoPlay loop></video>
      <InnerLayout>
          <MainContent />
      </InnerLayout>
    </MainAreaStyled>

  )
}

export default MainArea
