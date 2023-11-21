import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Accordion.scss";
import { fetchProviderName } from "../../../redux/slice/ProviderName/providerNameSlice";

const Accordion = ({ data }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const [currentItem, setCurrentItem] = useState("1forge.com");

  const toggle = (e, item, index) => {
    e.stopPropagation();
    window.localStorage.setItem("item", item);
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
    dispatch(fetchProviderName(item));
    setCurrentItem(item);
  };

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
              <div> {selected === index ? "v" : ">"}</div>
            </div>

            <div
              className={
                selected === index
                  ? "accordion__item__content show"
                  : "accordion__item__content"
              }
              key={index}
            >
              <Link to={"/product/" + currentItem}>
                {data.providerName?.data?.apis &&
                  Object.keys(data.providerName?.data?.apis).map((ele) => (
                    <span key={index}>
                      <img
                        src={
                          data.providerName?.data?.apis[ele].info["x-logo"].url
                        }
                      />
                      {data.providerName?.data?.apis[ele].info.title}
                    </span>
                  ))}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accordion;
