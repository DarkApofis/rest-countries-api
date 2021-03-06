import { useEffect, useState } from "react"
import { Form, Input, Select} from "./styles"
import { getRegionCountries, getCountries, getRegion, getCountryByName } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

export default function FilterCountry(){

    const [countryName, setCountryName] = useState("")

    const dispatch = useDispatch()

    const region = useSelector(state => state.region)

    useEffect(() => {
        if(countryName < 1){
            dispatch(getCountries())
        } else{
            dispatch(getCountryByName(countryName))
        }
    }, [countryName])

    useEffect(() => {
        if(region !== "all"){
            dispatch(getRegionCountries(region))
        } else{
            dispatch(getCountries())
        }
    }, [region])

    const handleRegion = (e) => {
        dispatch(getRegion(e.target.value))
    } 

    return (
        <Form>
            <Input 
                placeholder='Search for a country...' 
                value={countryName} 
                onChange={e => setCountryName(e.target.value)}
            />
            <Select
                value={region}
                onChange={e => handleRegion(e)}
            >
                <option value='all'>All</option>
                <option value='africa'>Africa</option>
                <option value='americas'>America</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </Select>
        </Form>
    )
}