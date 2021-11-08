import React from 'react';
import CtaButton from '../CtaButton';
import Navigation from '../Navigation';
import SmallHeading from '../SmallHeading';
import { MainContentStyled } from './styles.js';

const MainContent = () => {
  return (
      <MainContentStyled >
        <Navigation />
        <div className="content">
            <div className="left">
              <SmallHeading title={'Montanhas mais perigosas do mundo'} identifier={'Before'} />
              <h3>As montanhas são formadas por forças tectônicas, erosão ou vulcanismo, que agem em escalas de tempo de até dezenas de milhões de anos.</h3>
              <p>
              
              </p>
              <div className="btns-con">
                <CtaButton name={'Saiba Mais'}/>
                <CtaButton name={'Pedir ajuda'}/>
              </div>
            </div>
          </div>
      </MainContentStyled>
    
  )
}

export default MainContent
