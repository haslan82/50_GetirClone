import { ADD_TO_CART,REMOVE_FROM_CART
    ,CLEAR_CART } from "../Constants";
     
    
    const CartItems = (state = [] , action) => {
        switch(action.type){
            case ADD_TO_CART:
                return [...state,action.payload]
            case REMOVE_FROM_CART:
                return state.filter(CartItem => CartItem.product.id !== action.payload.id)
                // burada bir problem var CartItem.product?.id !== action.payload.id bu kısımda
                // sepette sildiğim de hata veriyor
            case CLEAR_CART:
                return state= []
        }
        return state
    }
    export default CartItems