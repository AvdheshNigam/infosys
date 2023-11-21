import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProviderName } from "../../../redux/slice/ProviderName/providerNameSlice";
import "./Product.scss";

function Product() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const currentItem = Object.keys(state.providerName.data["apis"]);
  const goToback = (e) => {
    window.history.back();
    rightSideBarHandler(e);
  };

  useEffect(() => {
    dispatch(fetchProviderName(window.localStorage.getItem("item")));
  }, []);

  return (
    <>
      <div className="product">
        <h1>
          <img
            src={
              state.providerName.data["apis"][currentItem[0]]?.info["x-logo"]
                ?.url
            }
          />
          {state.providerName.data["apis"][currentItem[0]]?.info?.title}
        </h1>
        <h2>Description</h2>
        <p>
          {state.providerName.data["apis"][currentItem[0]]?.info?.description}
        </p>
        <h2>SwaggerUrl</h2>
        <p>{state.providerName.data["apis"][currentItem[0]]?.swaggerUrl}</p>
        <h2>Contact</h2>
        <ul>
          <li>
            {
              state.providerName.data["apis"][currentItem[0]]?.info?.contact
                ?.email
            }
          </li>
          <li>
            {
              state.providerName.data["apis"][currentItem[0]]?.info?.contact
                ?.name
            }
          </li>
          <li>
            {
              state.providerName.data["apis"][currentItem[0]]?.info?.contact
                ?.url
            }
          </li>
        </ul>
        <button onClick={goToback}>Explore Web APIs</button>
      </div>
    </>
  );
}

export default Product;
