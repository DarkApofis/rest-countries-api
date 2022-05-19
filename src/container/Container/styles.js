import styled from "styled-components"

export const MainContainer = styled.main`
    margin: 0 auto;
    padding: 2rem 2rem;
    background-color: ${props => props.theme.background};
    @media (min-width: 1440px) {
        padding: 2rem 5.063rem
    }
`