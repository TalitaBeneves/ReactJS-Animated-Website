import React from 'react';
import {ContactSectionStyled} from './styles';
import {SectionStyled} from '../MainArea/styles';
import map from '../../img/map.png';

function ContactSection() {
  return (
    <ContactSectionStyled>
      <SectionStyled>
        <div className="contact-info">
          <h3 className="contact-title">Contact Us</h3>
          <p>talitabeneves15@gmail.com</p>
          <p>linkedin: Talita Beneves</p>
          <p>Instagram: Talita Beneves</p>
        </div>

        <div className="bg-image">
          <img src={map} alt="map"/>
        </div>
      </SectionStyled>
    </ContactSectionStyled>
  )
}

export default ContactSection;
