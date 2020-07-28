export default function guitarsReducer(state = {guitars: []}, action){
    switch(action.type){
        case 'FETCH_GUITARS':
            return {guitars: action.payload}
        default: 
            return state
    }
}