import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log(err.message));
    }, 500);
  }, [url]);

  return { data };
};

export default useFetch;
