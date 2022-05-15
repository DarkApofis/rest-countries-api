import styled from "styled-components"

export const Container = styled.main`
    display: grid;
    grid-auto-rows: 360px;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    grid-gap: 3rem;
    padding: 0 1.563rem;
    @media (min-width: 1440px) {
        padding: 0 3rem;
    }
`
