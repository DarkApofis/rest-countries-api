import styled from "styled-components"

export const Card = styled.div`
    width: 320px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 1.5px 0px hsl(0, 0%, 52%);
    cursor: pointer;
`

export const CardImage = styled.img`
    width: 100%;
    height: 185px;
`

export const CardInfo = styled.div`
    padding: 0 20px;
`

export const CardName = styled.h2`
    margin: 15px 0px;
    font-weight: 800;
`

export const CardExtra = styled.p`
    font-weight: 600;
    margin-bottom: 5px;
`
