import React from 'react';
import { GradientCardStyled } from './styles';
import time from '../../img/time.svg';
import heart from '../../img/heart.svg';

function GradientCard({image, avatar, name, price, title, ctaButton}) {
    return (
        <GradientCardStyled>
            <div className="g-card">
                <div className="inner-content">
                    <div className="image">
                        <img src={image} alt="" />
                        <div className="name">
                            <img src={avatar} alt="" />
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className="card-content">
                        <h6 className="card-title">{title}</h6>
                        <p>Price <span className="price">{price}</span> &nbsp; &nbsp; <span className="l-text">1 of 15</span></p>
                        <p>Highest Bid : &nbsp; <span className="price">{price}</span> </p>
                        <div className="duration">
                            <p><img src={time} alt="" /> 7 Hours Ago</p>
                            <p><img src={heart} alt="" /> 200 Likes</p>
                        </div>
                        <div className="cta-btn">
                            {ctaButton}
                        </div>
                    </div>
                </div>
            </div>
        </GradientCardStyled>
    )
}


export default GradientCard;
