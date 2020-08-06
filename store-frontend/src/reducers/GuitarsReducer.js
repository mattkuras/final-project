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
                guitars: action.payload
                
            }
        case 'FETCH_ITEMS':
    
           return { ...state, 
            cart: action.payload, 
            cartTotalItems: state.cart.length,
            cartTotalPrice: ""
           }
  
        case 'ADD_ITEM':
            return {
                ...state,      
                cart: [...state.cart, action.payload],
                cartTotalItems: state.cart.length,
                cartTotalPrice: state.cartTotalPrice + action.payload.price
          }
          case 'REMOVE_ITEM':
              return {
                  ...state,
                  
                  cart: state.cart.filter(item => item.id !== action.payload.id),
                  cartTotalItems: state.cart.length,
                  cartTotalPrice: state.cartTotalPrice - action.payload.price
              }
        default: 
            return state
    }
}
