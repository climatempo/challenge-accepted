const fetchLocation = async () => {
  const url = `http://localhost:8000/location`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default fetchLocation;
