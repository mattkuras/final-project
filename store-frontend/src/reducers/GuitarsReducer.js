export default function guitarsReducer(
    state = {
        guitars: [],
        cart: []
        },
        action
        ){

    switch(action.type){
        case 'FETCH_GUITARS':
            return {guitars: action.payload}
        case 'ADD_ITEM':
            return {
                ...state,
                guitars: [state.guitars],
                cart: [...state.cart, action.payload]}
        default: 
            return state
    }
}