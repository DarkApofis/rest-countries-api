import { useEffect, useState } from "react"
import { Form, Input, Select} from "./styles"
import { getRegion } from "../../redux/actions"
import { useDispatch } from "react-redux"
export default function FilterCountry(){

    const [countryName, setCountryName] = useState("")
    const [region, setRegion] = useState("all")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRegion(region))
    }, [region])

    return (
        <Form>
            <Input placeholder='Search for a country...'/>
            <Select
                value={region}
                onChange={e => setRegion(e.target.value)}
            >
                <option value='all'>All</option>
                <option value='africa'>Africa</option>
                <option value='americas'>Americas</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </Select>
        </Form>
    )
}