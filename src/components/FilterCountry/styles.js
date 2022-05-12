import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1.563rem;
    @media (min-width: 780px) {
        flex-direction: row;
        justify-content: space-between;
    }
    @media (min-width: 1440px){
        padding: 3rem;
    }
`

export const Input = styled.input`
    margin-bottom: 25px;
    padding: 10px 10px;
    width: 100%;
    max-width: 500px;
    height: 50px;
    border: 1px solid hsl(0, 0%, 52%);
    border-radius: 5px;
    font-size: 15px;
`

export const Select = styled.select`
    padding: 10px 10px;
    width: 50%;
    max-width: 160px;
    height: 50px;
    border: 1px solid hsl(0, 0%, 52%);
    border-radius: 5px;
`