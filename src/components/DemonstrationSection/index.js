import React from 'react';
import MainTitle from '../MainTitle';
import GradientCard from '../GradientCard';
import CtaButton from '../CtaButton';
import { DemonstrationSectionStyled } from './styles';
import { SectionStyled } from '../MainArea/styles';

import K2 from '../../img/k2.png';
import Matterhorn from '../../img/Matterhorn.jpg';

function DemonstrationSection() {

  const ctaButton = <CtaButton name={'Place bid'} />

  return (
    <DemonstrationSectionStyled>
      <SectionStyled>
        <div className="title-con">
          <MainTitle title={'Live Demonstration'} subtitle={'Live Demonstration'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
         </div>

         <div className="gradient-cards-con">
           <GradientCard image={K2} avatar={K2} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
           <GradientCard image={Matterhorn} avatar={Matterhorn} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
           <GradientCard image={K2} avatar={K2} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
           <GradientCard image={Matterhorn} avatar={Matterhorn} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
         </div>
      </SectionStyled>
    </DemonstrationSectionStyled>
  )
}

export default DemonstrationSection;
