import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (opts, axiosInstance = defaultAxios) => {

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  }

  useEffect(() => {
    if (!opts.url) return;

    axiosInstance(opts).then(res => {
      console.log(res)
      setState({
        ...state,
        loading: false,
        data: res.data
      });
    }).catch(error => {
      setState({ ...state, loading: false, error });
    });

  }, [trigger]);

  return { ...state, refetch };
}

// 사용 방법
// const { loading, data, error, refetch } = useAxios({
//   url: 'https://jsonplaceholder.typicode.com/todos/1',
//   method: 'get',
// });

// <h1>{data && data.userId}</h1>
// <h2>{loading && "Loading"}</h2>
// <button onClick={refetch}>Refetch</button>
