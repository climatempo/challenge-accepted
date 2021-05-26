import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import WeatherList from './components/WeatherList';

const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    try {
      if(error) return <h2>{error}</h2>
      if(!data && isLoading) return <h2>LOADING...</h2>
      if(!data) return null;
      return <WeatherList weathers={data} />
    } catch (error) {
      this.setState({ error });
    }
  };

  return (
    <Container className="App">
      <SearchBar onSearch={(city) => setUrl(`http://localhost:3001/weather?city=${city}`)} />

      {getContent()}
    </Container>
  );
};

export default App;