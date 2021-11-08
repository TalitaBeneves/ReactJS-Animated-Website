import styled from "styled-components";

export const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 80%;
  height: 100%;
  transform: translateX(-50%);
    
    .content{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 100%;
      width: 100%;
      
        .btns-con{
          margin-top: 2rem;
        }
      .left{
          display: flex;
          justify-content: center;
          flex-direction: column;
      }
    }

    h3{
      color:#cfb1f9;
      font-size: 25px;
    }

  `;