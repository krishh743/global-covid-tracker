import {createStore, applyMiddleware, combineReducers} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk'
import continentReducer from './Reducer/continentReducer'
import countryReducer from './Reducer/countryReducer'


const reducer = combineReducers({
    continentData : continentReducer,
    countryData :countryReducer
})
const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;