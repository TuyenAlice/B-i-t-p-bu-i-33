// rafc

import React from "react";
import { useSelector } from "react-redux";

export const ModalProductDetail = () => {
  const { productDetail } = useSelector((state) => state.btShoeReducer);
  console.log("productDetail:", productDetail);
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Product Detail
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-4">
                <img className="img-fluid" src={productDetail.image} alt="" />
              </div>
              <div className="col-8">
                <p className="fw-bold fs-3">{productDetail.name}</p>
                <p>${productDetail.price}</p>
                <p>{productDetail.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
