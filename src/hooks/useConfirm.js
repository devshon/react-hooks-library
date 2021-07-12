// 함수 실행 전 확인하는 함수
export const useConfirm = (message, callback, rejection) => {
  if (!callback || typeof callback !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      if (!rejection && typeof rejection !== "function") {
        return;
      } else {
        rejection();
      }
    }
  };
  return confirmAction;
};

// import { useConfirm } from "./hooks/useConfirm";

// function App() {
//   const deleted = () => console.log("deleting ...");
//   const canceled = () => console.log("rejection");
//   const onClick = useConfirm("Are u sure", deleted, canceled);
//   return (
//     <div className="App">
//       <button onClick={onClick}>deleted</button>
//     </div>
//   );
// }

// export default App;
