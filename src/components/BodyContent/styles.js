import styled from "styled-components";


export const BodyContentStyled = styled.div`
    .sellercards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
    }
    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #020A27;
        padding: 3rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
            text-align: center;
            opacity: 0.7;
        }
    }
`;