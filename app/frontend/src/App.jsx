import { useState, useContext } from 'react';

import context from './Context/context';

import SwitchButton from './Components/SwitchButton';
import WeatherCard from './Components/WeatherCard';

function App() {
  const [toggleTemperature, setToggleTemperature] = useState('C');
  const [togglePrecipitation, setTogglePrecipitation] = useState(false);

  const { hasSearch, weathers } = useContext(context);
  return (
    <main>
      <section className='flex justify-center gap-20'>
        {/* temperature */}
        <div className="flex mt-2 justify-center gap-1.5 items-center">
          <span className="text-2xl">C °</span>
          <SwitchButton
            toggleTemperature={toggleTemperature}
            setToggleTemperature={setToggleTemperature}
            precipitation={false}
          />
          <span className="text-2xl">F °</span>
        </div>

        {/* precipitation */}
        <div className="flex mt-2 justify-center gap-1.5 items-center">
          <span className="text-2xl">mm</span>
          <SwitchButton
            togglePrecipitation={togglePrecipitation}
            setTogglePrecipitation={setTogglePrecipitation}
            precipitation={true}
          />
          <span className="text-2xl">inch</span>
        </div>
      </section>
      {!hasSearch ? (
        <>
          <p className="mt-2 mb-2 w-full text-2xl text-center">
            {typeof weathers === 'number'
              ? 'Desculpe, não encontrei essa cidade :( , você digitou o nome dela corretamente? '
              : 'Pesquise pela temperatura da sua cidade :)'}
          </p>
        </>
      ) : (
        <WeatherCard
          toggleTemperature={toggleTemperature}
          togglePrecipitation={togglePrecipitation}
        />
      )}
    </main>
  );
}

export default App;
