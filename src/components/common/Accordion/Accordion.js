import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Accordion.scss";

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (e, item, index) => {
    e.stopPropagation();
    console.log("+++++", item, index);
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
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
              <Link to={"/product/"}>data</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accordion;
