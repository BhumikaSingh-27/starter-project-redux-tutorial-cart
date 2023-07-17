import cartItems from "../cart-items";
import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTAL,
  TOGGLE_AMOUNT,
} from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE: {
      const updatedCart = state.cart.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : cartItem
      );
      return { ...state, cart: updatedCart };
    }

    case DECREASE: {
      const updatedData = state.cart.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, amount: cartItem.amount - 1 }
          : cartItem
      );
      return { ...state, cart: updatedData };
    }

    case REMOVE: {
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== action.payload.id),
      };
    }

    case CLEAR_CART: {
      return { ...state, cart: [] };
    }

    case GET_TOTAL: {
      let { total, amount } = state.cart.reduce(
        (totalAcc, curentItem) => {
          const { price, amount } = curentItem;
          totalAcc.amount += amount;
          totalAcc.total += price * amount;
          return totalAcc;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    }

    case TOGGLE_AMOUNT: {
      return {
        ...state,
        cart: state.cart.map((data) => {
          if (data.id === action.payload.id) {
            if (action.payload.toggle === "inc") {
              return { ...data, amount: data.amount + 1 };
            } else {
              return { ...data, amount: data.amount - 1 };
            }
          }
          return data;
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
// case DECREASE: {
//     if (action.payload.amount > 1) {
//       const updatedData = state.cart.map((cartItem) =>
//         cartItem.id === action.payload.id
//           ? { ...cartItem, amount: cartItem.amount - 1 }
//           : cartItem
//       );

//       return { ...state, cart: updatedData };
//     } else {
//       return {
//         ...state,
//         cart: state.cart.filter(({ id }) => id !== action.payload.id),
//       };
//     }
//   }
