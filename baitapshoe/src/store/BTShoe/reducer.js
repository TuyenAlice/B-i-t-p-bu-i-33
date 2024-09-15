import { CHANGE_PRODUCT_DETAIL } from "./actionType";
import { ADD_TO_CARTS } from "./actionType";
import { CHANGE_CART_QUANTILY } from "./actionType";
import { DELETE_CART_ITEM } from "./actionType";

// tạo reducer nhỏ
const initialState = {
  number: 10,
  productDetail: {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  },
  cart: [],
};
export const btShoeReducer = (state = initialState, action) => {
  console.log("action:", action);
  switch (action.type) {
    case "INCREAT_NUMBER": {
      return {
        ...state,
        number: state.number + action.payload,
      };
    }

    case CHANGE_PRODUCT_DETAIL: {
      let newState = { ...state };
      newState.productDetail = action.payload;
      return newState;
    }
    case ADD_TO_CARTS: {
      let newState = { ...state };

      const index = newState.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        newState.cart.push({ ...action.payload, cartQuantity: 1 });
      } else {
        newState.cart[index].cartQuantity += 1;
      }

      return newState;
    }
    case CHANGE_CART_QUANTILY: {
      let newState = { ...state };
      const { payload } = action;

      const index = newState.cart.findIndex(
        (item) => item.id === payload.cartItemID
      );

      if (index !== -1) {
        newState.cart[index].cartQuantity =
          newState.cart[index].cartQuantity + payload.quantity || 1;
      }

      return newState;
    }
    case DELETE_CART_ITEM: {
      let newState = { ...state };
      newState.cart = newState.cart.filter(
        (item) => item.id !== action.payload
      );
      return newState;
    }
    default:
      return state;
  }
};
