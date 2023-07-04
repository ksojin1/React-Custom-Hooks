import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {

  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }

  return {
    currentItem: allTabs[currentIndex], //현재 선택된 content
    changeItem: setCurrentIndex //setIndex 함수 (Index변경할때 사용)
  }

  //사용법 ex
  //const { currentItem, changeItem } = useTabs(0, content);
  // {content.map((section, index) => (
  //   <button onClick={() => changeItem(index)}>{section.tab}</button>
  // ))}
  // <div>{currentItem.content}</div>

}


//배열 예시
const content = [
  {
    tab: "Section 1",
    content: "Section 1 Content"
  },
  {
    tab: "Section 2",
    content: "Section 2 Content"
  }
]
