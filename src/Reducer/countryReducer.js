import {COUNTRY_API_REQUEST, COUNTRY_API_SUCCESS, COUNTRY_API_FAIL} from '../Actiontype/countryActions';


const countryReducer = (state = {countryData: []}, action) => {

    switch (action.type) {
        case COUNTRY_API_REQUEST:
            return {...state, countryData: []}

        case  COUNTRY_API_SUCCESS:
            return {...state, countryData: action.payload}

        case COUNTRY_API_FAIL:
            return {...state, fail: action.payload}

        default:
            return state;
    }
}

export default countryReducer;