import {useState, useEffect} from 'react';

const UseFetch = (initialUrl) => {
  // create state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if(!url) return;
    setIsLoading(true);
    // clear old search
    setData(null);
    setError(null);

    fetch(url)
        .then((response) => response.json()
        )
        .then((data) => {
            console.log(data[0]);
            setIsLoading(false);
            setData(data[0].weather);
        })
        .catch((error) => {
            setIsLoading(false);
            setError('Não há resultados para essa cidade...');
        });
  }, [url]);

  return { data, error, isLoading, setUrl };
};

export default UseFetch;