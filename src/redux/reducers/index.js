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
        case "GET_REGION":
            return {...state, region: action.payload}
        default:
            return state
    }
}

export default rootReducer