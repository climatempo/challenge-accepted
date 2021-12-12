import { useEffect, useState, useCallback } from "react";
import { Container } from "react-bootstrap";

import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import WeatherReports from "../components/WeatherReports";

import { getLocales } from "../services/localeService";
import { getWeather } from "../services/weatherService";
import {
  getMeasures as getTemperatureMeasures,
  getDefaultMeasure as getDefaultTemperatureMeasure,
} from "../services/temperatureService";
import {
  getMeasures as getRainMeasures,
  getDefaultMeasure as getDefaultRainMeasure,
} from "../services/rainService";
import { isMeasureValid, isObjectEmpty } from "../utils/validator";
import { StyledMain } from "../components/styles/Main.styled";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [localeSuggestions, setLocaleSuggestions] = useState([]);
  const [measures, setMeasures] = useState({});
  const [selectedLocale, setSelectedLocale] = useState({});
  const [weather, setWeather] = useState([]);

  const [temperatureMeasures, setTemperatureMeasures] = useState([]);
  const [rainMeasures, setRainMeasures] = useState([]);

  const initMeasure = useCallback((type, validMeasures) => {
    let measure = localStorage.getItem("measure");
    if (
      !measure ||
      !measure[type] ||
      !isMeasureValid(validMeasures, measure[type])
    ) {
      if (type === "temperature") {
        measure = getDefaultTemperatureMeasure();
      } else if (type === "rain") {
        measure = getDefaultRainMeasure();
      }
    } else {
      measure = measure[type];
    }

    const newMeasures = measures;
    newMeasures[type] = measure;
    setMeasures(newMeasures);
  }, []);

  useEffect(() => {
    const clearLocaleSuggestions = () => {
      setLocaleSuggestions([]);
    };
    const loadLocaleSuggestions = async () => {
      const locales = await getLocales(searchTerm);
      setLocaleSuggestions(locales);
    };
    if (searchTerm) {
      loadLocaleSuggestions();
    } else {
      clearLocaleSuggestions();
    }
  }, [searchTerm]);

  useEffect(() => {
    const loadWeather = async () => {
      const weather = await getWeather(
        selectedLocale.id,
        measures.temperature.key,
        measures.rain.key
      );
      setWeather(weather);
    };
    if (selectedLocale?.id) {
      loadWeather();
    }
  }, [selectedLocale]);

  useEffect(() => {
    const loadMeasures = () => {
      const validMeasures = getTemperatureMeasures();
      setTemperatureMeasures(validMeasures);
      initMeasure("temperature", validMeasures);
    };
    loadMeasures();
  }, [initMeasure]);

  useEffect(() => {
    const loadMeasures = () => {
      const validMeasures = getRainMeasures();
      setRainMeasures(validMeasures);
      initMeasure("rain", validMeasures);
    };
    loadMeasures();
  }, [initMeasure]);

  const saveMeasureToLocalStorage = (type, measure) => {
    let localMeasure = JSON.parse(localStorage.getItem("measure"));
    localMeasure = localMeasure ? localMeasure : {};
    localMeasure[type] = measure;
    localStorage.setItem("measure", JSON.stringify(localMeasure));
  };

  const handleChangeMeasures = async (newMeasures) => {
    setMeasures(newMeasures);
    saveMeasureToLocalStorage("temperature", newMeasures.temperature);
    saveMeasureToLocalStorage("rain", newMeasures.rain);

    if (selectedLocale?.id) {
      const weather = await getWeather(
        selectedLocale.id,
        newMeasures.temperature.key,
        newMeasures.rain.key
      );
      setWeather(weather);
    }
  };

  const handleChangeLocale = (newValue) => {
    setSearchTerm(newValue);
  };

  const handleSelectLocale = (locale) => {
    setSearchTerm("");
    setSelectedLocale(locale);
  };

  return (
    <StyledMain className={isObjectEmpty(selectedLocale) && "bg-climatempo"}>
      <Header
        localeSuggestions={localeSuggestions}
        onChangeLocale={handleChangeLocale}
        onSelectLocale={handleSelectLocale}
      />

      <Container className="justify-content-center justify-content-md-between">
        <SearchBox
          className="mb-3 d-flex d-md-none"
          color="#707070"
          bgColor="#e9e9e9"
          suggestions={localeSuggestions}
          onChange={handleChangeLocale}
          onSelect={handleSelectLocale}
          placeholder="Busque por uma cidade..."
          ariaLabel="Busque por uma cidade..."
        />
        {!isObjectEmpty(selectedLocale) && (
          <WeatherReports
            locale={selectedLocale}
            reports={weather}
            measures={measures}
            temperatureMeasures={temperatureMeasures}
            rainMeasures={rainMeasures}
            onChangeMeasures={handleChangeMeasures}
          />
        )}
      </Container>
    </StyledMain>
  );
};

export default Main;
