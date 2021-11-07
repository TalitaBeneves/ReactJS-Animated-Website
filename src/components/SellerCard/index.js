import React from 'react';
import { SellerCardStyled } from './styled';
import data from '../../data';

function SellerCard() {
  return (
    <SellerCardStyled>
      {
        data.map((item) =>{
          return <div className="SellerCard" key={item.id}>
            <div className="number">
              <p>0 {item.id}</p>
            </div>
            <div className="profile">
              <img src={item.image} alt="" />
              <div className="text">
                <h4>{item.name}</h4>
                <p>{item.currency}</p>
              </div>
            </div>
          </div>
        })
      }
    </SellerCardStyled>
  )
}

export default SellerCard;
