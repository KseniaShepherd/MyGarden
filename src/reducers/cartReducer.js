const ADD_TO_CART = ' [PRODUCTS_CINTAINER] ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const INCREMENT_QUANTITY = '[CART_ITEM] INCREMENT_QUANTITY'
const DECREMENT_QUANTITY = '[CART_ITEM] DECREMENT_QUANTITY'

export const addToCartAction = payload => ({ type: ADD_TO_CART, payload });
export const deleteFromCartAction = payload => ({ type: DELETE_FROM_CART, payload })
export const incrementQuantity = payload => ({ type: INCREMENT_QUANTITY, payload })
export const decrementQuantity = payload => ({ type: DECREMENT_QUANTITY, payload })

const checkProductInCart = (state, payload) => {
    console.log(payload)
    const productInState = state.find(el => el.id === payload.id);
    if (productInState) {
        productInState.count++;
        return [...state]
    } else {
        return [...state, {
            ...payload,
            count: 1
        }]
    }
}
const decrementOrDelete = (state, payload) => {
    const product = state.find(el => el.id === payload)
    if (product.count > 1) {
        product.count--;
        return [...state]
    } else {
        return state.filter(el => el.id !== payload)
    }
}
export const cartReducer = (state = [], action) => {
    if (action.type === ADD_TO_CART) {
        console.log(state)
        return checkProductInCart(state, action.payload)
    } else if (action.type === INCREMENT_QUANTITY) {
        const product = state.find(el => el.id === action.payload);
        product.count++;
        return [...state]
    } else if (action.type === DELETE_FROM_CART) {
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === DECREMENT_QUANTITY) {
        return decrementOrDelete(state, action.payload)
    } else {
        return state
    }
}