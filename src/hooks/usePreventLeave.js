// 무조건 이 페이지에선  닫기 또는 새로고침시 window 경고팝업을 띄운다
import { useEffect } from "react";
export const usePreventLeave = () => {
  // useEffect는 dependency 가 없을 경우 ([]) effect 는 componentWillMountin
  // 끝났을땐 componentWillUnMountin 이다 return 부분에서 이벤트 값을 제거한다
  useEffect(() => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", listener);
    return () => {
      window.removeEventListener("beforeunload", listener);
    };
  }, []);
};

// function App() {
//   usePreventLeave();

//   return <div className="App"></div>;
// }

// export default App;

//-------------------------------------------------------------------------

// 닫기 또는 새로고침시 window에 경고팝업 띄우는것을 버튼으로 visible 한다
// export const usePreventLeave = () => {
//   const listener = (event) => {
//     event.preventDefault();
//     event.returnValue = "";
//   };
//   const enablePrevent = () => window.addEventListener("beforeunload", listener);
//   const disablePrevent = () =>
//     window.removeEventListener("beforeunload", listener);
//   return { enablePrevent, disablePrevent };
// };

// function App() {
//   const { enablePrevent, disablePrevent } = usePreventLeave();

//   return (
//     <div className="App">
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>Unprotect</button>
//     </div>
//   );
// }

// export default App;
