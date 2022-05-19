import Header from "./components/Header/index"
import Container from "./container/Container"
import CountryDetails from "./components/CountryDetails"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { useState } from "react"
import { lightTheme, darkTheme } from "./themes"

function App() {
  const [theme, setTheme] = useState("Dark Mode");

  const themeToggler = () => {
    theme === 'Light Mode' ? setTheme("Dark Mode") : setTheme('Light Mode')
  }

  return (
    <ThemeProvider theme={theme === "Dark Mode" ? darkTheme : lightTheme}>
      <div className="App">
        <GlobalStyle/>
        <Header themeToggler={themeToggler}/>
        <Switch>
          <Route path="/" exact>
            <Container/>
          </Route>
          <Route path="/details/:id" component={CountryDetails}/>
        </Switch>
      </div> 
    </ThemeProvider>
  )
}

export default App
