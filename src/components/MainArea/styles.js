import styled from 'styled-components'


export const MainAreaStyled = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  overflow: hidden;
  
    .overlay{
      width: 100%;
      height: 100%;
      position: absolute;
      right: -400px;
      top: -300px;
    }
  
    video{
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.7;
    }
`;

export const InnerLayout = styled.div`
  padding: 4rem 15rem;
`;

export const SectionStyled = styled.section`
  padding: 4rem 0;
`;