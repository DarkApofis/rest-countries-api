import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    @media (min-width: 780px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const Input = styled.input`
    margin-bottom: 25px;
    padding: 10px 10px;
    width: 100%;
    max-width: 500px;
    height: 50px;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.backgroundElement};
    border: none;
    box-shadow: 0px 0px 1.5px 0px hsl(0, 0%, 52%);
    outline: none;
    border-radius: 5px;
    font-size: 15px;
    &::placeholder {
        color: ${props => props.theme.text};
    }
`

export const Select = styled.select`
    padding: 10px 10px;
    width: 50%;
    max-width: 160px;
    height: 50px;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.backgroundElement};
    outline: none;
    box-shadow: 0px 0px 1.5px 0px hsl(0, 0%, 52%);
    border-radius: 5px;
`