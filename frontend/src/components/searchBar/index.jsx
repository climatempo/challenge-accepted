import { useEffect, useRef, useState } from "react";
import * as SC from "./styles";
import { IoSearch, IoClose } from "react-icons/io5";
import { useClickOutside } from "react-click-outside-hook";
import PulseLoader from "react-spinners/PulseLoader";
import { AnimatePresence } from "framer-motion";
import { useSkipSearch } from "../../hooks/skipSearchHook";
import { SearchCity } from "../searchCity";
import { CardWeather } from "../cardWeather";

import axios from "axios";

const containerVariants = {
  expanded: {
    height: "20em",
  },
  collapsed: {
    height: "3.8em",
  },
};

const containerTransition = {
  type: "spring",
  damping: 22,
  stiffness: 150,
};

export function SearchBar(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [cityLocales, setCityLocales] = useState([]);
  const [city, setCity] = useState([]);
  const inputRef = useRef();

  const isEmpty = !cityLocales || cityLocales.length === 0;
  const isCard = !city || city.length === 0;

  const changeHandler = (e) => {
    e.preventDefault();
    setCity([]);
    setLoading(true);
    if (e.target.value === "") setLoading(false);
    setSearchQuery(e.target.value);
  };

  const clickHandler = (dados) => (e) => {
    collapseContainer();
    setCity([]);
    Object.keys(dados).forEach(function(key) {
      city.push(dados[key]);
    });
    setCity(city);
    setSearchQuery(city[1]['name']);
  };

  const expandContainer = () => {
    setExpanded(true);
  };

  const exitedHandler = () => {
    setSearchQuery("");
    setCityLocales([]);
    setCity([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const collapseContainer = () => {
    setExpanded(false);
    setLoading(false);
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const searchLocales = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;

    const URL = `http://127.0.0.1:8000/api/v1/weather?city=${searchQuery}`;

    const response = await axios.get(URL).catch((err) => {
      console.log("Erro: ", err);
    });

    if (response) {
      setCityLocales(response.data);
    } else {
      setCityLocales([]);
    }

    setLoading(false);
  };

  useSkipSearch(searchQuery, 500, searchLocales);

  return (
    <SC.Container>
      <SC.SearchBarContainer
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        transition={containerTransition}
        ref={parentRef}
      >
        <SC.SearchInputContainer>
          <SC.SearchIcon>
            <IoSearch />
          </SC.SearchIcon>
          <SC.SearchInput
            placeholder="Cidade"
            onFocus={expandContainer}
            ref={inputRef}
            value={searchQuery}
            onChange={changeHandler}
          />
          <AnimatePresence>
            {(isExpanded || searchQuery) && (
              <SC.CloseIcon
                key="close-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={exitedHandler}
                transition={{ duration: 0.2 }}
              >
                <IoClose />
              </SC.CloseIcon>
            )}
          </AnimatePresence>
        </SC.SearchInputContainer>
        <SC.LineSeperator />
        <SC.SearchContent>
          {isLoading && (
            <SC.LoadingWrapper>
              <PulseLoader
                loading
                color="#bebebe"
                speedMultiplier={1.2}
                margin={4}
                size={12}
              />
            </SC.LoadingWrapper>
          )}
          {!isLoading && !isEmpty && cityLocales.length > 0 && (
            <>
              {cityLocales.map((city, key) => (
                <SearchCity
                  id={city.locale.id}
                  key={key}
                  name={city.locale.name}
                  text={city.weather[0].text}
                  temperatureMin={city.weather[0].temperature.min}
                  temperatureMax={city.weather[0].temperature.max}
                  precipitation={city.weather[0].rain.precipitation}
                  onClick={clickHandler(city)}
                />
              ))}
            </>
          )}
        </SC.SearchContent>
      </SC.SearchBarContainer>
      {!isCard && city.length > 0 && city[2] && (
            <>
              {city[2].map((city, key) => (
                <CardWeather
                  key={key}
                  date={city['date']}
                  text={city['text']}
                  tempMin={city['temperature']['min']}
                  tempMax={city['temperature']['max']}
                  probabillity={city['rain']['probability']}
                  precipitation={city['rain']['precipitation']}
                />
              ))}
            </>
          )}
    </SC.Container>
  );
}
