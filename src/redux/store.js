import {createStore,combineReducers} from 'redux';
import loginReducer from './reducers/loginReducer';

const reducer = combineReducers({user:loginReducer});
const store = createStore(reducer);
export default store;