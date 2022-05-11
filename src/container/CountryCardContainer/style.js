import styled from "styled-components"

export const Container = styled.main`
    display: grid;
    grid-auto-rows: 360px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 60px;
    padding: 50px 25px;
`