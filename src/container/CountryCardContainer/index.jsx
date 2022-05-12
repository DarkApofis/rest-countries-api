import Country from "../../components/CountryCard/index"
import { useSelector } from "react-redux"
import { Container } from "./style"

export default function CountriesContainer(){

    const countries = useSelector(state => state.countries)

    return (
        <Container>
            {countries.map(country => (
                <Country
                    key={country.cca2}
                    flag={country.flags.png}
                    name={country.name.common}
                    population={new Intl.NumberFormat().format(country.population)}
                    region={country.region}
                    capital={country.capital}
                    cca2={country.cca2}
                />)   
            )}
        </Container>
    )
}