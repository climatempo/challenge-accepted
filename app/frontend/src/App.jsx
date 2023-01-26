import { useState, useContext } from 'react';

import context from './Context/context';

import SwitchButton from './Components/SwitchButton';
import WeatherCard from './Components/WeatherCard';

function App() {
  const [toggle, setToggle] = useState('C');

  const { hasSearch, weathers } = useContext(context);
  return (
    <main>
      <div className="flex mt-2 justify-center gap-1.5 items-center">
        <span className="text-2xl">C °</span>
        <SwitchButton toggle={toggle} setToggle={setToggle} />
        <span className="text-2xl">F °</span>
      </div>
      {!hasSearch ? (
        <>
          <p className="mt-2 mb-2 w-full text-2xl text-center">
            {typeof weathers === 'number'
              ? "Desculpe, não encontrei essa cidade :( , você digitou o nome dela corretamente? "
              : 'Pesquise pela temperatura da sua cidade :)'}
          </p>
        </>
      ) : (
        <WeatherCard toggle={toggle} />
      )}
    </main>
  );
}

export default App;
