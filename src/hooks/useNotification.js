// https:/ / developer.mozilla.org / ko / docs / Web / API / notification;
// window 제공 알람 함수
export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotifi = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotifi;
};

// function App() {
//   const triggerNotifi = useNotification("Moim", { body: "we are Moim" });
//   return (
//     <div className="App">
//       <button onClick={triggerNotifi}>Notification</button>
//     </div>
//   );
// }

// export default App;
