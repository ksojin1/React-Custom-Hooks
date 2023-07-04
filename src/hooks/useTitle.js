import { useState } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
}

//사용법
// const titleUpdater = useTitle("Loading...");
// setTimeout(() => titleUpdater("HOME"), 3000);