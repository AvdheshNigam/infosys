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

  const toggle = (e, item, index) => {
    e.stopPropagation();

    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
    dispatch(fetchProviderName(item));
    setCurrentItem(item);
  };

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
              <Link to={"/product/" + currentItem}>
                {data.providerName?.data?.apis &&
                  Object.keys(data.providerName?.data?.apis).map((ele) => (
                    <span>
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
