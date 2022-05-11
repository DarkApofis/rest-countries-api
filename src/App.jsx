import Header from "./components/Header/index"
import CountriesContainer from "./container/CountryCardContainer"
import FilterCountry from "./components/FilterCountry"
import { GlobalStyle } from "./styles/GlobalStyles"


function App() {
  return (

    <div className="App">
      <GlobalStyle/>
      <Header>
        <FilterCountry/>
      </Header>
      <CountriesContainer/>
    </div>
  )
}

export default App
