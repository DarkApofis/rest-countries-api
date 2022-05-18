import Header from "./components/Header/index"
import Container from "./container/Container"
import CountryDetails from "./components/CountryDetails"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Container/>
        </Route>
        <Route path="/details/:id" component={CountryDetails}/>
      </Switch>
    </div> 
  )
}

export default App
