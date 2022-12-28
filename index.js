
// state for productReducer

const { createStore, combineReducers } = require("redux");

/* declare products constants */
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const initialProducts = {
    products:['sugar','salt'],
    numberOfProducts: 2,
};
// state for Cart Reducer
// constants
const GET_CART_PRODUCTS = "GET_CART_PRODUCTS";
const ADD_TO_CART = "ADD_TO_CART";
const initialCart = {
    cartProducts: [],
    numberOfCartProducts: 0,
}
// action for product
const getProducts = () => {
    return {
        type:GET_PRODUCTS,
    }
};
const addProduct = (product) => {
    return {
        type:ADD_PRODUCT,
        payload: product,
    }
};
// action for cart
const getCart = () => {
    return {
        type: GET_CART_PRODUCTS,
    }
};
const addToCart = (product) => {
    return {
        type:ADD_TO_CART,
        payload: product,
    }
}

// product reducer
const productReducer = (state=initialProducts, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products:[...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        default:
            return state;
    }
};
// cart reducer
const cartReducer = (state=initialCart, action) => {
    switch(action.type){
        case GET_CART_PRODUCTS:
            return {
                ...state,
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload],
                numberOfCartProducts: state.numberOfCartProducts + 1,
            }
        default:
            return state;
    }
};

// create rootReducer for multiple reducer
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
});

// create store
const store = createStore(rootReducer);

// subscribe and getState() for product Reducer
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProduct('Bananna'));
store.dispatch(getCart());
store.dispatch(addToCart('apple'));