const initialState = {
    countries: [],
    countryDetail: {},
    region: "all"
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {...state, countries: action.payload}
        case "GET_COUNTRY_DETAIL":
            return {...state, countryDetail: action.payload}
        case "COUNTRIES_REGION":
            return {...state, countries: action.payload}
        case 'GET_REGION':
            return {...state, region: action.payload}
        case 'CLEAN_DETAIL':
            return {...state, countryDetail: {}}
        case 'GET_COUNTRY_BY_NAME':
            if(state.region !== "all") {
                const countriesData = action.payload.filter(country => country.region.toLowerCase() === state.region)
                return {...state, countries: countriesData}
            } else{
                return {...state, countries: action.payload}
            }
        default:
            return state
    }
}

export default rootReducer