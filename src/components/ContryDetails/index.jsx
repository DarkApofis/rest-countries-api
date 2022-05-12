import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCountryDetail } from "../../redux/actions"

import { 
    Section, 
    Button, 
    Main, 
    ImageContainer, 
    Image,
    InfoContainer,
    Info,
    ListInfo,
    ListItem,
    Span
} from "./styles"
export default function CountryDetails() {

    const history = useHistory()

    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()

    const dispatch = useDispatch()
    
    const country = useSelector(state => state.countryDetail)
    
    useEffect(() => {
        dispatch(getCountryDetail(id))
        setIsLoading(false)
    },[dispatch, id])

    return (
        <>
            {isLoading ? (
                <h1>
                    Loading
                </h1>
            ):(
            <Section>
                <Button onClick={() => history.goBack()}>⬅ Back</Button>
                <Main>
                    <ImageContainer>
                        <Image src={country.flags?.png}/>
                    </ImageContainer>
                    <InfoContainer>
                        <h2>{country.name?.common}</h2>
                        <Info>
                            <ListInfo>
                                <ListItem><Span>Native Name:</Span> {country.name?.common}</ListItem>
                                <ListItem><Span>Population:</Span> {new Intl.NumberFormat().format(country?.population) }</ListItem>
                                <ListItem><Span>Region:</Span> {country?.region}</ListItem>
                                <ListItem><Span>Sub Region:</Span> {country?.subregion}</ListItem>
                                <ListItem><Span>Capital:</Span> {country?.capital}</ListItem>
                            </ListInfo>
                            <ListInfo>
                                <ListItem><Span>Top Level Domain:</Span> {country?.tld}</ListItem>
                                <ListItem><Span>Currencies:</Span></ListItem>
                                <ListItem><Span>Languages:</Span></ListItem>
                            </ListInfo>
                        </Info>
                    </InfoContainer>
                </Main>
            </Section>
            )}
        </>
    )
}