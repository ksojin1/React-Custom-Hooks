//실행전 메세지로 확인 후 실행 할 때
export const useConfirm = (message, onConfirm, onCancel) => {

  if (typeof onConfirm !== "function" || typeof onCancel !== "function"){
    return;
  }

  const confirmAction = () => {
    if(window.confirm(message)){
      onConfirm();
    }else {
      onCancel();
    }
  }

  return confirmAction;
}

//사용법
// const okFnc = () => console.log("OKOKOK");
// const noFnc = () => console.log("NONONO");
// const dataConfirm = useConfirm("Are you sure?", okFnc, noFnc);
// <button onClick={dataConfirm}>delete button</button>