import { Card, CardImage, CardInfo, CardName, CardExtra } from "./style"

export default function Country({flag, name, population, region, capital}){
    return (
        <Card className="CountryCard">
            <CardImage src={flag}/>
            <CardInfo>
                <CardName>{name}</CardName>
                <CardExtra>Population: <span>{population}</span></CardExtra>
                <CardExtra>Region: <span>{region}</span></CardExtra>
                <CardExtra>Capital: <span>{capital}</span></CardExtra>
            </CardInfo>
        </Card>
    )
}