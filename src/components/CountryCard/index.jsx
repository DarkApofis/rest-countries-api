import { Card, CardImage, CardInfo, CardName, CardExtra } from "./style"
import { useHistory } from "react-router-dom"

export default function Country({flag, name, population, region, capital, cca2}){

    const history = useHistory()

    return (
        <Card className="CountryCard" onClick={() => history.push(`/details/${cca2}`)}>
            <CardImage src={flag} alt={`Flag of ${name}`}/>
            <CardInfo>
                <CardName>{name}</CardName>
                <CardExtra>Population: <span>{population}</span></CardExtra>
                <CardExtra>Region: <span>{region}</span></CardExtra>
                <CardExtra>Capital: <span>{capital}</span></CardExtra>
            </CardInfo>
        </Card>
    )
}