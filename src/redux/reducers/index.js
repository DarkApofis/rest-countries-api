const initialState = {
    countries: [],
    countryDetail: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return {...state, countries: action.payload}
        case "GET_MOVIE_DETAILS":
            return state.countryDetail
        default:
            return state
    }
}

export default rootReducer