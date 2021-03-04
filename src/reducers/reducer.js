import initialState from '../state/state';

export default reducer => (state, action) => {
    switch(action.type){
        case 'test': 
            return {
                ...state,
                test: !state.test
            }
        default: 
        return state;
    }
}