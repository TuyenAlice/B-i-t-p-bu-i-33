import {
  CHANGE_PRODUCT_DETAIL,
  ADD_TO_CARTS,
  CHANGE_CART_QUANTILY,
  DELETE_CART_ITEM,
} from "./actionType";
export const changeProductDetail = (payload) => {
  return {
    type: "CHANGE_PRODUCT_DETAIL",
    payload: shoe,
  };
};
export const addtoCarts = (payload) => {
  return {
    type: "ADD_TO_CARTS",
    payload,
  };
};
export const changeCartsQuantily = (payload) => {
  return {
    type: "CHANGE_CART_QUANTILY",
    payload,
  };
};
export const deleteCartsItem = (payload) => {
  return {
    type: "DELETE_CART_ITEM",
    payload,
  };
};
