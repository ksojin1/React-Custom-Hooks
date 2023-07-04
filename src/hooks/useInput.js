import { useState } from "react";

//초기값, 데이터 검증 함수를 인자값으로 가져옴
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;

    //검증 true false
    let willUpdate = true;

    if(typeof(validator) === "function") {
      //validator 함수는 검증 후 boolean 값을 리턴함
      willUpdate = validator(value);
    }

    //data검증 true 이면 setValue
    if(willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };

  //사용법
  //const name = useInput(초기값, 검증함수);
  //<input placeholder="Name" {...name}/>
}