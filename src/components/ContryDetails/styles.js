import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 1.563rem;
    width: 100%;
    max-width: 1440px;
    @media (min-width: 1440px) {
        padding: 0 3rem;
    }
`

export const Button = styled.button`
    padding: 0.3125rem;
    width: 100px;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 1130px){
        flex-direction: row;
        justify-content: space-between;
    }
`

export const ImageContainer = styled.div`
    margin-top: 2rem;
    max-width: 566px;
    width: 100%;
`

export const Image = styled.img`
    width: 100%;
    max-width: 566px;
    object-fit: cover;
`

export const InfoContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin-top: 2rem;
    @media (min-width: 1130px){
        padding: 2.5rem 0;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    @media (min-width: 1130px){
        flex-direction: row;
        justify-content: space-between;
    }
`

export const ListInfo = styled.ul`
    margin-top: 2rem;
    list-style: none;
`

export const ListItem = styled.li`
    margin-bottom: 1rem;
`

export const Span = styled.span`
    font-weight: 600
`
