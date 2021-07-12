// tab 클릭 시 content 변경
import { useState } from "react";

export const useTabs = (initTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

// import { useTabs } from "./hooks/useTabs";

// const content = [
//   {
//     tab: "Section 1",
//     content: "im the content of the section 1",
//   },
//   {
//     tab: "Section 2",
//     content: "im the content of the section 2",
//   },
// ];

// function App() {
//   const { currentItem, changeItem } = useTabs(1, content);
//   return (
//     <div className="App">
//       {content.map((section, index) => {
//         return (
//           <button onClick={() => changeItem(index)} key={index}>
//             {section.tab}
//           </button>
//         );
//       })}
//       <div>{currentItem.content}</div>
//     </div>
//   );
// }

// export default App;
