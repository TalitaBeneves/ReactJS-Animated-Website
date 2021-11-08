import styled from "styled-components";

export const ContactSectionStyled = styled.div`
    background-color: #020C31;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 0;
    position: relative;
    z-index: 1;

      p{
          opacity: 0.8;
          margin: 0.4rem 0;
      }

      .bg-image{
          position: absolute;
          left: 50%;
          top: 60%;
          transform: translate(-50%, -50%);
          

            img{
                width: 80%;
                opacity: 0.10;
            }
        }

      .contact-title{
          position: relative;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
          
          font-size: 1.5rem;

            &::before{
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 4rem;
                height: 2px;
                background-color: #eb3fa9;
            }
    }
`;
