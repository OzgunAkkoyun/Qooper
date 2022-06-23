const INITIAL_STATE = {};

const loginReducer = (state = INITIAL_STATE,action) =>{
    
    switch (action.type) {
        case 'SAVE_USER':
            return {...action.payload};
            break;
            case 'DELETE_USER':
                return {};
                break;
        default:
            return state;
            break;
    }
}
export default loginReducer;