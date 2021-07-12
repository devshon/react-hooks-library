// useClick 과 같은 로직
import { useRef, useEffect } from "react";

export const useHover = (onHover) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);

  if (typeof onHover !== "function") {
    return;
  }

  return element;
};

// import { useHover } from "./hooks/useHover";

// function App() {
//   const onHover = () => {
//     for (let index = 0; index < 10; index++) {
//       console.log("count ", index);
//     }
//   };
//   const hoverRef = useHover(onHover);

//   return (
//     <div className="App">
//       <h1 ref={hoverRef}>Hi</h1>
//     </div>
//   );
// }

// export default App;
