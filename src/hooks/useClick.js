import { useEffect, useRef } from "react";

//같은 방식으로 mouseenter, hover 등 이벤트 hook을 만들 수 있다
export const useClick = onClick => {

  const element = useRef();

  useEffect(() => {   
    if(typeof onClick !== "function"){
      return;
    }
    //컴포넌트가 마운트될 때 addEvent
    if(element.current) {
      element.current.addEventListener("click", onClick);
    }

    //컴포넌트가 언마운트될 떼 removeEvent
    return () => {
      if(element.current){
        element.current.removeEventListener("click", onClick);
      }
    }
  }, [])

  return typeof onClick !== "function" ? undefined : element;
}

//사용법
// const sayHello = () => console.log("hello");
// const title = useClick(sayHello);
// <h1 ref={title}>HELLO</h1>