import {COUNTRY_API_REQUEST, COUNTRY_API_SUCCESS, COUNTRY_API_FAIL} from '../Actiontype/countryActions';

import axios from 'axios';


const countryAction = () => async (dispatch) => {

    try {
        dispatch({type: COUNTRY_API_REQUEST})

        const {data} = await axios.get('https://corona.lmao.ninja/v2/countries?yesterday=&sort=')
        console.log('get COUNTRY api run')

        dispatch({type: COUNTRY_API_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: COUNTRY_API_FAIL, payload: error})
    }
}

export default countryAction;