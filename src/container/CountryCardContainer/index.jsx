import { useEffect } from "react"
import Country from "../../components/CountryCard/index"
import { useDispatch, useSelector } from "react-redux"
import { getCountries, getRegionCountries } from "../../redux/actions"
import { Container } from "./style"

export default function CountriesContainer(){

    const dispatch = useDispatch()

    const countries = useSelector(state => state.countries)
    const region = useSelector(state => state.region)

    useEffect(() => {
        if(region !== "all"){
            dispatch(getRegionCountries(region))
        } else{
            dispatch(getCountries())
        }
    }, [region])

    return (
        <Container>
            {countries.map(country => (
                <Country
                    key={country.cca2}
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    cca2={country.cca2}
                />)   
            )}
        </Container>
    )
}