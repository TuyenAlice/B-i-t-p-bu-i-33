import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCarts } from "../store/BTShoe/action";

export const ProductItem = (props) => {
  const { shoe } = props;
  const dispatch = useDispatch();
  return (
    <div className="card-body">
      <p className="fw-bols mb-3">{shoe.name}</p>
      <p>{shoe.price}</p>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => {
            dispatch(changeProductDetail(shoe));
          }}
        >
          Xem chi tiết
        </button>
        <button
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#modalCart"
          onClick={() => {
            dispatch(addtoCarts(shoe));
          }}
        >
          Thêm giỏ hàng
        </button>
      </div>
    </div>
  );
};
