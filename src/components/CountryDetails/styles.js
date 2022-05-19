import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    width: 100%;
    background-color: ${props => props.theme.background};
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.3125rem;
    width: 100px;
    height: 35px;
    color: ${props => props.theme.text};
    font-weight: 600;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 1.5px hsl(0, 0%, 52%);
    background-color: ${props => props.theme.backgroundElement};
    cursor: pointer;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 100%;
    @media (min-width: 850px){
        flex-direction: row;
        justify-content: space-between;
    }
`

export const ImageContainer = styled.div`
    max-width: 550px;
`

export const Image = styled.img`
    display: inline-block;
    max-width: 100%;
`

export const InfoContainer = styled.div`
    width: 100%;
    max-width: 600px;
    color: ${props => props.theme.text};
    @media (min-width: 850px){
        padding: 2.5rem 0;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    @media (min-width: 850px){
        flex-direction: row;
        justify-content: space-between;
    }
`

export const ListInfo = styled.ul`
    margin-top: 2rem;
    list-style: none;
    @media (min-width: 850px){
        margin-top: 0.5rem;
    }
`

export const ListItem = styled.li`
    margin-bottom: 1rem;
`

export const Span = styled.span`
    font-weight: 600
`
