import { useEffect, useRef, useState } from "react";
import { useNotification } from './useNotification';
import { useAxios } from "./useAxios";

function ReactHookTest() {

  // const onFullS = isFull => {
  //   console.log(isFull ? "Full" : "Small");
  // }
  //const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  // const triggerNotif = useNotification('알림메세지', { body: '보조메세지' });

  const { loading, data, error, refetch } = useAxios({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'get',
  });

  return (
    <div className="wrap">
      {/* <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"></img>
        <button onClick={exitFull}>Exit</button>
      </div>
      <button onClick={triggerFull}>Full</button> */}

      {/* <button onClick={triggerNotif}>click</button> */}

      <h1>{data && data.userId}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>

    </div>
  );
}

export default ReactHookTest;