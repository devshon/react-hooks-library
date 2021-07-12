// Network 로그인 상태를 가져온다
import { useState, useEffect } from "react";

export const useNetwork = (onChange) => {
  const [state, setState] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setState(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return state;
};

// function App() {
//   const handleNetworkChange = (onLine) => {
//     return console.log(onLine ? "ON" : "OFF");
//   };
//   const onLine = useNetwork(handleNetworkChange);
//   return <div className="App">{onLine ? "ON" : "OFF"}</div>;
// }

// export default App;
