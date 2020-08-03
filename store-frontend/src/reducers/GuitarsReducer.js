export default function guitarsReducer(
    state = {
        guitars: [],
        cartTotalItems: 0,
        cartTotalPrice: 0,
        cart: []
        },
        action
        ){

    switch(action.type){
        case 'FETCH_GUITARS':
            return {
                ...state,
                guitars: action.payload,
                
            }
        case 'FETCH_ITEMS':
            return { 
                ...state, 
                cart: action.payload, 
                
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cartTotalItems: state.cart.length += 1,
                cartTotalPrice: state.cartTotalPrice + action.payload.price,
                guitars: [...state.guitars],
                // cart: [...state.cart, action.payload]
          }
        default: 
            return state
    }
}