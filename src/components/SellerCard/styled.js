import styled from "styled-components";

export const SellerCardStyled = styled.div`
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  transition: all .4s ease-in-out;
  &:hover{
      transform: translateY(-20px);
  }
    .SellerCard{
      display: flex;
      align-items: center;
      padding: 1.5rem 1rem;

        .number{
          padding-right: 1rem;
          font-size: 1.6rem;
          opacity: 0.5;
          p{
              font-weight: 700;
          }
        }

        .profile{
            display: flex;
            img{
                width: 70px;
                height: 70px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 1rem;
                border: 2px solid #395FF6;
            }

            .text{
                display: flex;
                flex-direction: column;
                justify-content: center;

                h4{
                    font-weight: 500;
                }

                p{
                    padding-top: .5rem;
                    opacity: 0.5;
                }
            }
        }
    }
`;
