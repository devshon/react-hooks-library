// useRef 를 이용하여 click 시 함수 호출 (데이터의 누수를 방지)
import { useRef, useEffect } from "react";

export const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  if (typeof onClick !== "function") {
    return;
  }

  return element;
};

// import { useClick } from "./hooks/useClick";

// function App() {
//   const func = () => {
//     for (let i = 0; i < 10; i++) {
//       console.log("count ", i);
//     }
//   };

//   const clickRef = useClick(func);

//   return (
//     <div className="App">
//       <h1 ref={clickRef}>Hi</h1>
//     </div>
//   );
// }

// export default App;
