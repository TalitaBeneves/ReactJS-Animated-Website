import React from 'react';
import MainTitle from '../MainTitle';
import GradientCard from '../GradientCard';
import CtaButton from '../CtaButton';
import { DemonstrationSectionStyled } from './styles';
import { SectionStyled } from '../MainArea/styles';

import Everest from '../../img/everest.png';
import Kangchenjunga from '../../img/kangchenjunga.png';
import Annapurna from '../../img/Annapurna.png';
import Shishapangma from '../../img/Shishapangma.png';

function DemonstrationSection() {

  const ctaButton = <CtaButton name={'Compre'} />

  return (
    <DemonstrationSectionStyled>
      <SectionStyled>
        <div className="title-con">
          <MainTitle title={'Pacotes de viagem'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
         </div>

         <div className="gradient-cards-con">
           <GradientCard image={Everest} avatar={Everest} name={'Monte Everest'} price={'$ 1.050'} title={'Monte Everest ponto mais alto do mundo.'} ctaButton={ctaButton} />
           <GradientCard image={Kangchenjunga} avatar={Kangchenjunga} name={'Kanchenjunga'} price={'$ 800'} title={'É a mais oriental das grandes montanhas.'} ctaButton={ctaButton} />
           <GradientCard image={Annapurna} avatar={Annapurna} name={'Annapurna'} price={'$ 980'} title={'É a décima mais alta montanha da Terra.'} ctaButton={ctaButton} />
           <GradientCard image={Shishapangma} avatar={Shishapangma} name={'Shishapangma'} price={'$ 887'} title={'Décima quarta montanha mais elevada do mundo.'} ctaButton={ctaButton} />
         </div>
      </SectionStyled>
    </DemonstrationSectionStyled>
  )
}

export default DemonstrationSection;
