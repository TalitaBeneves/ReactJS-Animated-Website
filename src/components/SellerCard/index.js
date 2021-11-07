import React from 'react';
import { SellerCardStyled } from './styled';
import data from '../../Datas/data';
import data2 from '../../Datas/data2';
import data3 from '../../Datas/data3';

function SellerCard() {
  return (
    <>
    <SellerCardStyled>
      {
        data.map((item) =>{
          return <div className="SellerCard" key={item.id}>
            <div className="number">
              <p>0{item.id}</p>
            </div>
            <div className="profile">
              <img src={item.image} alt="" />
              <div className="text">
                <h4>{item.name}</h4>
                <p>{item.deaths}</p>
              </div>
            </div>
          </div>
        })
      }
    </SellerCardStyled>
    <SellerCardStyled>
       {
        data2.map((item) =>{
          return <div className="SellerCard" key={item.id}>
            <div className="number">
              <p>0{item.id}</p>
            </div>
            <div className="profile">
              <img src={item.image} alt="" />
              <div className="text">
                <h4>{item.name}</h4>
                <p>{item.deaths}</p>
              </div>
            </div>
          </div>
        })
      }
    </SellerCardStyled>
    <SellerCardStyled>
    {
        data3.map((item) =>{
          return <div className="SellerCard" key={item.id}>
            <div className="number">
              <p>{item.id}</p>
            </div>
            <div className="profile">
              <img src={item.image} alt="" />
              <div className="text">
                <h4>{item.name}</h4>
                <p>{item.deaths}</p>
              </div>
            </div>
          </div>
        })
      }
    </SellerCardStyled>
    </>
  )
}

export default SellerCard;
