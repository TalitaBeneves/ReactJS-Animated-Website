import React from 'react';
import { InnerLayout } from '../MainArea/styles';
import MainTitle from '../MainTitle';
import SellerCard from '../SellerCard';
import { BodyContentStyled } from './styles';


const BodyContent = () => {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top 4 Montanhas perigosas'} subtitle={'Montanhas Perigosas'} />
                <div className="sellercards">
                   <SellerCard />
                </div>
               
            </InnerLayout>
            <footer>
                <p>Copyright ©YourName. All Rights Reserved</p>
            </footer>
        </BodyContentStyled>
    )
}

export default BodyContent;