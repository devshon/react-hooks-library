// browser title 변경
import { useState, useEffect } from "react";

export const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

// import { useTitle } from "./hooks/useTitle";

// function App() {
//   const titleUpdate = useTitle("Loading...");
//   setTimeout(() => titleUpdate("Home"), 3000);

//   return <div className="App"></div>;
// }

// export default App;
