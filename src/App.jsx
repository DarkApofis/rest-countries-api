import Header from "./components/Header/index"
import CountriesContainer from "./container/CountryCardContainer"
import FilterCountry from "./components/FilterCountry"
import CountryDetails from "./components/ContryDetails"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <FilterCountry/>
          <CountriesContainer/>
        </Route>
        <Route path="/details/:id" component={CountryDetails}/>
      </Switch>
    </div> 
  )
}

export default App
