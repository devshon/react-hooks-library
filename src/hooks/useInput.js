// input text 유효성 검사
import { useState } from "react";

export const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    const { value } = event.target;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// import { useInput } from "./hooks/useInput";

// function App() {
//   const notIncludes = (value) => !value.includes("@");
//   const name = useInput("Mr.", notIncludes);
//   return (
//     <div className="App">
//       <input type="text" placeholder="name" {...name}></input>
//     </div>
//   );
// }

// export default App;
