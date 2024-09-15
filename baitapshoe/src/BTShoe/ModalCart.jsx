// rafc
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { changeCartsQuantily } from "../store/BTShoe/action";

export const ModalCart = () => {
  const { cart } = useSelector((state) => state.btShoeReducer);
  console.log("cart:", cart);

  const dispatch = useDispatch();
  return (
    <div
      className="modal fade"
      id="modalCart"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Giỏ hàng
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <td>STT</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Image</td>
                  <td>Quantily</td>
                  <td>Total</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>
                        <img
                          src={item.image}
                          alt=""
                          style={{ with: 100, height: 100 }}
                        />
                      </td>
                      <td>
                        <div className="d-flex gap-2 align-items-center ">
                          <button
                            // className="btn btn-outline-dark"
                            className={cn("btn btn-outline-dark ", {
                              disabled: item.cartQuantity === 1,
                            })}
                            onClick={() => {
                              dispatch(
                                changeCartsQuantily({
                                  cartItemID: item.id,
                                  quantity: -1,
                                })
                              );
                            }}
                          >
                            -
                          </button>
                          <p>{item.cartQuantity}</p>
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => {
                              dispatch(
                                changeCartsQuantily({
                                  cartItemID: item.id,
                                  quantity: 1,
                                })
                              );
                            }}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>${item.cartQuantity * item.price}</td>
                      <td
                        className="fw-bold text-danger "
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          dispatch(deleteCartsItem(item.id));
                        }}
                      >
                        X
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
