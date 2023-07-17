export const INCREASE = "INCREASE";
export const DECREASE = "DESCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTAL = "GET_TOTAL";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";


export const removeItem = (id) =>{
    return {
        type: REMOVE,
        payload: {id}
    }
}
// time of dispatching

// dispatch(removeItem(id))