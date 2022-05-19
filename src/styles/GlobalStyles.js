import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    body{
        font-family: 'Nunito Sans', sans-serif;
    }
    .App{
        height: 100vh;
        width: 100%;
        min-width: 375px;
        background-color: ${props => props.theme.background};
        margin: 0 auto;
        overflow: scroll;
    }
    span{
        font-weight: 400
    }
`