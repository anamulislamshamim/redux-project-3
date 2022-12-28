
// state for productReducer

const { createStore } = require("redux");

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
            }
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
    }
}

// create product store
const productStore = createStore(productReducer);
// create cart store
const cartStore = createStore(cartReducer);
// subscribe and getState() for product Reducer
productStore.subscribe(() => {
    console.log(productStore.getState());
});
// subscribe() and getState() for cart reducer
cartStore.subscribe(() => {
    console.log(cartStore.getState());
});
productStore.dispatch(getProducts());
productStore.dispatch(addProduct('Bananna'));
// dispatch() for cart Reducer;
cartStore.dispatch(getCart());
cartStore.dispatch(addToCart('apple'));