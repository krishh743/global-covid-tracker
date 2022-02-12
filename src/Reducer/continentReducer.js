import {CONTINENT_API_REQUEST, CONTINENT_API_SUCCESS, CONTINENT_API_FAIL} from '../Actiontype/continentTypes';


const continentReducer = (state = {continentData: []}, action) => {

    switch (action.type) {
        case CONTINENT_API_REQUEST:
            return {...state, continentData: []}

        case CONTINENT_API_SUCCESS:
            return {...state, continentData: action.payload}

        case CONTINENT_API_FAIL:
            return {...state, fail: action.payload}

        default:
            return state;
    }
}

export default continentReducer;