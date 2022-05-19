import styled from "styled-components"

export const HeaderC = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 0rem 2rem;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.backgroundElement};
    box-shadow: 0px 0px 2px 0px hsl(0, 0%, 52%);
    @media (min-width: 1440px){
        padding: 0 5.063rem;
    }
`

export const Title = styled.h1`
    font-size: 1.05rem;
    @media (min-width: 1440px){
        font-size: 1.26rem
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    color: inherit;
    background-color: inherit;
    border: none;
    cursor: pointer;
`

