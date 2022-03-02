import {CONTINENT_API_REQUEST, CONTINENT_API_SUCCESS, CONTINENT_API_FAIL} from '../Actiontype/continentTypes';

import axios from 'axios';



const continentAction = () => async (dispatch) => {

    try {
        dispatch({type: CONTINENT_API_REQUEST})

        const {data} = await axios.get('https://corona.lmao.ninja/v2/continents?yesterday=true')
      

        dispatch({type: CONTINENT_API_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: CONTINENT_API_FAIL, payload: error})
    }
}

export default continentAction;
