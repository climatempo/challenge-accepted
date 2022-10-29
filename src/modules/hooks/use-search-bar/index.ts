import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { NavigateFunction } from "react-router-dom";
import mockLocales from "./mock";
import { Locale } from "./types";

function useSearchBar(navigate?: NavigateFunction) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [displaySugestions, setDisplaySugestions] = useState(false);
  const [sugestions, setSugestions] = useState<Locale[]>([]);
  const [sugestionsToDisplay, setSugestionsToDisplay] = useState<Locale[]>([]);

  useEffect(() => {
    setSugestions(mockLocales);
  }, []);

  const handleRouterPush = (id: number) => () => {
    if (navigate) navigate(`/weather/${id}`);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const handleSearchSugesstions = (value: string) => {
    const trimmedValue = value.trim();

    const filteredSugestions = sugestions.filter(({ name }) =>
      name.toLowerCase().includes(trimmedValue.toLowerCase())
    );

    if (filteredSugestions.length && trimmedValue) {
      setSugestionsToDisplay(filteredSugestions);
      setDisplaySugestions(true);

      return;
    }

    setSugestionsToDisplay([]);
    setDisplaySugestions(false);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setSearchValue(value);
    handleSearchSugesstions(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);

    setTimeout(() => {
      setDisplaySugestions(false);
    }, 200);
  };

  return {
    displaySugestions,
    sugestions: sugestionsToDisplay,
    isFocused,
    searchValue,
    handleSubmit,
    handleChange,
    handleFocus,
    handleBlur,
    handleRouterPush,
  };
}

export default useSearchBar;
