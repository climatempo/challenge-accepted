const weatherFetch = async (value: string) => {
  const url = `http://localhost:8000/weather/${value}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default weatherFetch;
