// mouse 가 document 위로 벗어날때 함수를 실행시킨다
import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    };
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);

  if (typeof onBefore !== "function") {
    return;
  }
};

// function App() {
//   const message = () => console.log("dont leave");
//   useBeforeLeave(message);
//   return <div className="App"></div>;
// }

// export default App;
