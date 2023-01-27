import { useContext } from 'react';

import context from '../Context/context';

import UmbrelaPng from '../images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png';
import RainDropPng from '../images/icons/raindrop-close-up.png';
import DownloadPng from '../images/icons/download.png';
import UploadPng from '../images/icons/upload.png';

export default function WeatherCard({
  toggleTemperature,
  togglePrecipitation,
}) {
  const { weathers } = useContext(context);

  const calculatesToFahrenheit = (temperature) => {
    const fahrenheitTemperature = temperature * 1.8 + 32;
    return fahrenheitTemperature.toFixed(1);
  };

  const mmToInch = (mm) => {
    const inch = mm / 25.4;
    return inch.toFixed(2);
  };

  return (
    <div className="flex flex-col items-center mt-5">
      {weathers[0]?.date &&
        weathers.map((weather, index) => (
          <div
            className="flex flex-col mb-5 p-2 h-56 border w-4/5"
            key={index + weather.date}
          >
            <p className="mb-1 ml-2 text-xl">
              {weather.date.split('-').reverse().join('/')}
            </p>

            <p className="text-md ml-2 mb-2">{weather.text}</p>

            {/* container of max & min temperature and rain probability & rain precipitation */}
            <section className="flex flex-col gap-4 m-auto w-full">
              {/* max and min temperature */}
              <article className="flex justify-around">
                <div className="flex gap-1 items-center">
                  <img src={UploadPng} alt="" />
                  <p className="text-lg text-blue-500">
                    {toggleTemperature === 'C'
                      ? weather.temperature.max
                      : calculatesToFahrenheit(weather.temperature.max)}{' '}
                    {toggleTemperature} °
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={DownloadPng} alt="" />
                  <p className="text-lg text-red-600">
                    {toggleTemperature === 'C'
                      ? weather.temperature.min
                      : calculatesToFahrenheit(weather.temperature.min)}{' '}
                    {toggleTemperature} °
                  </p>
                </div>
              </article>

              {/* rain probabilty and rain precipitaion */}
              <article className="flex justify-around">
                <div className="flex gap-1 items-center">
                  <img src={UmbrelaPng} alt="umbrela under rain" width={35} />
                  <p className="text-lg">{weather.rain.probability}%</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={RainDropPng} alt="rain drop" width={30} />
                  <p className="text-lg">
                    {togglePrecipitation
                      ? `${mmToInch(weather.rain.precipitation)} inch`
                      : `${weather.rain.precipitation} mm`}
                  </p>
                </div>
              </article>
            </section>
          </div>
        ))}
    </div>
  );
}
