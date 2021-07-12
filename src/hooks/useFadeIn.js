// fadeIn module
import { useEffect, useRef } from "react";

// duration : fade 소요시간 , delay : 시작 대기시간
export const useFadeIn = (duration, delay) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  if (typeof duration !== "number") {
    return;
  }
  if (!delay || typeof delay !== "number") {
    return;
  }

  return { ref: element, style: { opacity: 0 } };
};

// function App() {
//   const fadeInH1 = useFadeIn(2, 1);
//   const fadeInSpan = useFadeIn(2, 3);
//   return (
//     <div className="App">
//       <h1 {...fadeInH1}>Hello</h1>
//       <span {...fadeInSpan}>used fade module</span>
//     </div>
//   );
// }

// export default App;
