import Header from "./components/Header/index"
import CountriesContainer from "./container/CountryCardContainer"
import FilterCountry from "./components/FilterCountry"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Switch>
        <Route path="/" exact>
          <Header/>
          <FilterCountry/>
          <CountriesContainer/>
        </Route>
        <Route path="/details/:id"/>
      </Switch>
    </div> 
  )
}

export default App
