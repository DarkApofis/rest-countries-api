import FilterCountry from "../../components/FilterCountry";
import CountriesContainer from "../CountryCardContainer/index";
import { MainContainer } from "./styles";

export default function Container(){
    return (
        <MainContainer>
            <FilterCountry/>
            <CountriesContainer/>
        </MainContainer>
    )
}