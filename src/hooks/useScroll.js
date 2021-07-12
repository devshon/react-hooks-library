// scroll 을 이용한 style 색상 변경
import { useState, useEffect } from "react";

export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return state;
};

// function App() {
//   const { y } = useScroll();
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <span style={{ position: "fixed", color: y > 100 ? "blue" : "red" }}>
//         Hi
//       </span>
//     </div>
//   );
// }

// export default App;
