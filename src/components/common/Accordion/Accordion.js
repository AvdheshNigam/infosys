import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Accordion.scss";
import { fetchProviderName } from "../../../redux/slice/ProviderName/providerNameSlice";

const Accordion = ({ data }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("PN", state.providerName.data);
  const [selected, setSelected] = useState(null);
  const [currentItem, setCurrentItem] = useState("1forge.com");
  const [firstKey, setFirstKey] = useState("");

  const toggle = (e, item, index) => {
    e.stopPropagation();

    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
    dispatch(fetchProviderName(item));
    setCurrentItem(item);
    // title();
  };
  // const title = () => {
  //   return Object.keys(data.providerName?.data?.apis).forEach((ele) => {
  //     console.log("dd", data.providerName?.data?.apis[ele].info.title);
  //   });
  // };
  // console.log("pppp+++++", state.providerName.data["apis"][firstKey]);
  // console.log("firstKey+++++", firstKey);

  useEffect(() => {
    if (!currentItem === null) {
      setCurrentItem("1forge.com");
    }
  }, []);
  return (
    <div className="accordion">
      {data?.providers?.data?.data &&
        data?.providers?.data?.data.map((item, index) => (
          <div className="accordion__item" key={index}>
            <div
              onClick={(e) => toggle(e, item, index)}
              className={
                selected === index
                  ? "accordion__item__title active"
                  : "accordion__item__title"
              }
            >
              <div>{item}</div>
              <div>{selected === index ? "v" : ">"}</div>
            </div>

            <div
              className={
                selected === index
                  ? "accordion__item__content show"
                  : "accordion__item__content"
              }
            >
              {/* <Link to={"/product/" + value}>click</Link> */}
              <Link to={"/product/providerName"}>
                {/* aaa::{JSON.stringify(data.providerName?.data?.apis)} */}
                {data.providerName?.data?.apis &&
                  Object.keys(data.providerName?.data?.apis).map((ele) => (
                    <p>{data.providerName?.data?.apis[ele].info.title}</p>
                  ))}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accordion;
