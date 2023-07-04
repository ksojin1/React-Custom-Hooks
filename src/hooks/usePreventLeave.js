//현재 페이지에서 새로고침 되거나 페이지 이동, 닫기 실행하기 전
//정보가 날아가는 것을 방지하기 위해 경고창을 띄움
const usePreventLeave = () => {

  const listener = event => {
    event.preventDefault(); //모든 이벤트를 막고 경고창 출력
    event.returnValue = ""; //returnValue = "" 을 추가해야 작동함
  };

  //unload되기 전에 경고창 출력
  const enablePrevent = () => window.addEventListener("beforeunload", listener);

  //unload이벤트 삭제
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
}

//사용법
// const { enablePrevent, disablePrevent } = usePreventLeave();
// <button onClick={enablePrevent}>Protect</button>
// <button onClick={disablePrevent}>Unprotect</button>