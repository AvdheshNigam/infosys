import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../../common/Accordion/Accordion";
import { fetchProviders } from "../../../redux/slice/Providers/providersSlice";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);

  const rightSideBarHandler = (e) => {
    setIsOpen(!isOpen);
  };

  const handleProviders = () => {
    dispatch(fetchProviders());
  };

  useEffect(() => {
    handleProviders();
  }, []);

  if (state.providers.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (state.providerName.pending) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <main className="layout__main">
        <section className="layout__main__section">
          <button onClick={rightSideBarHandler}>Explore Web APIs</button>
          <aside
            onClick={rightSideBarHandler}
            className={`layout__main__section__aside ${isOpen ? "show" : ""}`}
          >
            <div className="layout__main__section__aside__menu">
              <h2>Select Provider</h2>
              <Accordion data={state} />
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default Home;
