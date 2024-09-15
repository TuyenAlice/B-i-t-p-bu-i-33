import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductList = (props) => {
  console.log("props:", props);
  const { data } = props;

  return (
    <div>
      <div className="row">
        {data.map((shoe) => {
          return (
            <div className="col-4 mt-3">
              <div className="card" key={shoe.id}>
                <img className="img-fluid" src={shoe.image} alt="..." />
                <ProductItem shoe={shoe} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
