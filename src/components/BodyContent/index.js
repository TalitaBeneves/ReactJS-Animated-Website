import React from 'react';
import BlogsSection from '../PopularSection';
import { InnerLayout } from '../MainArea/styles';
import MainTitle from '../MainTitle';
import SellerCard from '../SellerCard';
import { BodyContentStyled } from './styles';
import DemonstrationSection from '../DemonstrationSection';
import ContactSection from '../ContactSection';


const BodyContent = () => {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'As top 12 Montanhas mais perigosas do Mundo'} identifier={'Before'} />
                <div className="sellercards">
                   <SellerCard />
                </div>
                <BlogsSection />
                <DemonstrationSection />
            </InnerLayout>
                <ContactSection />
            <footer>
                <p>Copyright ©Talita Beneves. All Rights Reserved</p>
            </footer>
        </BodyContentStyled>
    )
}

export default BodyContent;