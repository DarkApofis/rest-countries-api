export default function FilterCountry(){
    return (
        <form>
            <input placeholder='Search for a country'/>
            <select>
                <option>All</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </form>
    )
}