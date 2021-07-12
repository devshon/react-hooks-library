import { useInput } from "./hooks/useInput";
import { useTabs } from "./hooks/useTabs";
import { useTitle } from "./hooks/useTitle";
import { useClick } from "./hooks/useClick";

function App() {
  const func = () => {
    for (let i = 0; i < 10; i++) {
      console.log("count ", i);
    }
  };

  const clickRef = useClick(func);

  return (
    <div className="App">
      <h1 ref={clickRef}>Hi</h1>
    </div>
  );
}

export default App;
