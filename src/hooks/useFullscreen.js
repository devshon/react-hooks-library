// ref 를 활용한 img full screen
import { useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
    }
    if (callback && typeof callback === "function") {
      callback(true);
    }
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

// App component 에서 ref를 상위 div에 넣으면 이미지 크기는 그대로이고 화면만 풀 스크린으로 변경된다
// function App() {
//   const onFullscreen = (isFull) => {
//     console.log("onFullscreen >>> ", isFull);
//   };
//   const { element, triggerFull, exitFull } = useFullscreen(onFullscreen);

//   return (
//     <div className="App" ref={element}>
//       <img
//         alt="tree"
//         src="https://www.tutorialsplane.com/wp-content/uploads/2018/01/nature-3082832_640.jpg"
//         width="300"
//       />
//       <div>
//         <button onClick={triggerFull}>full screen</button>
//         <button onClick={exitFull}>exit screen</button>
//       </div>
//     </div>
//   );
// }

// export default App;
