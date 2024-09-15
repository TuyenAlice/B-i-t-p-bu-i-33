//rafc
import React from "react";
import data from "./data.json";
import { ProductList } from "./ProductList";
import { ModalProductDetail } from "./ModalProdctDetail";
import { useSelector, useDispatch } from "react-redux";
import { ModalCart } from "./ModalCart";

export const BTShoe = () => {
  console.log("data: ", data);

  const { number } = useSelector((state) => state.btShoeReducer);
  console.log("number: ", number);

  const dispath = useDispatch();
  return (
    <div className="container ">
      <h1 className="mt-3">BTShoe</h1>
      <ProductList data={data} />
      <ModalProductDetail />
      <ModalCart />
    </div>
  );
};
