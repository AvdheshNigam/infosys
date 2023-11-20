import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fectchTodos } from "./redux/slice/Todo/todoSlice";
import { fetchProviders } from "./redux/slice/Providers/providersSlice";
import { fetchProviderName } from "./redux/slice/ProviderName/providerNameSlice";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);
  let nested = state?.providerName?.data?.apis;
  // const dataShowing = (nested) => {
  //   let keys = Object.keys(nested);
  //   for (let i = 0; i < keys.length; i++) {
  //     console.log(keys[i]);
  //   }
  // };
  // console.log("ffff", dataShowing(nested));

  // const renderKeys = () => {
  //   const firstObject = Object.keys(state?.providerName?.data?.apis)[0];
  //   return Object.keys(state?.providerName?.data?.apis[firstObject]).map(
  //     (key) => {
  //       console.log("kkkkk", key);
  //     }
  //   );
  // };
  if (state.todo.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (state.providers.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (state.providerName.pending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fectchTodos())}>Fetch Data</button>
      <button onClick={(e) => dispatch(fetchProviders())}>Provider Data</button>
      <button onClick={(e) => dispatch(fetchProviderName())}>
        Provider Name
      </button>
      <>
        {/* {state.todo.data &&
          state.todo.data.map((item, index) => <p key={index}>{item.title}</p>)}
        {state.providers?.data?.data &&
          state.providers?.data?.data.map((item, index) => (
            <p key={index}>{item}</p>
          ))} */}
        {/* <pre>
          <code>
            {JSON.stringify(
              state?.providerName?.data?.apis["adyen.com:AccountService"].info
                .title,
              null,
              2
            )}
          </code>
        </pre> */}
        <pre>
          <code>
            {/* {JSON.stringify(
              state?.providerName?.data?.apis["adyen.com:AccountService"].info
                .title,
              null,
              2
            )} */}
            {/* {JSON.stringify(nested)} */}
            <p>{JSON.stringify(state?.providerName?.data?.apis)}</p>
          </code>
        </pre>
      </>
    </div>
  );
}

export default App;
