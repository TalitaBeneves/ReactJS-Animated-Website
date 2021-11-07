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
              <h1>Montanhas</h1>
              <p>
              As montanhas são formadas por forças tectônicas, erosão ou vulcanismo, que agem em escalas de tempo de até dezenas de milhões de anos. Uma vez que a construção da montanha cessa, as montanhas são lentamente niveladas pela ação do clima, por meio de quedas e outras formas de perda de massa, bem como pela erosão por rios e geleiras.
              </p>
              <div className="btns-con">
                <CtaButton name={'discover more'}/>
                <CtaButton name={'get help'}/>
              </div>
            </div>
          </div>
      </MainContentStyled>
    
  )
}

export default MainContent
