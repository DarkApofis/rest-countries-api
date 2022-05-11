import { useEffect } from "react"
import Country from "../../components/CountryCard/index"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../redux/actions"
import { Container } from "./style"

export default function CountriesContainer(){

    const dispatch = useDispatch()

    const countries = useSelector(state => state.countries)

    console.log("countries", countries)

    useEffect(() => {
        dispatch(getMovies())
    }, [])

    return (
        <Container>
            {countries.map(country => (
                <Country
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                />)   
            )}
        </Container>
    )
}