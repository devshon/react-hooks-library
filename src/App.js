import { useState, useEffect } from "react";

import {
  useInput,
  useTabs,
  useTitle,
  useClick,
  useHover,
  useConfirm,
  usePreventLeave,
  useBeforeLeave,
  useFadeIn,
  useNetwork,
  useScroll,
  useFullscreen,
  useNotification,
  useAxios,
} from "./hooks/index";

function App() {
  const { loading, error, data, refetch } = useAxios({
    url: "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json",
  });
  console.log("data >>> ", JSON.stringify(data));
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
