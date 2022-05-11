import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    .App{
        height: 100vh;
        width: 100%;
        min-width: 375px;
        margin: 0 auto
    }
    span{
        font-weight: 400
    }
`