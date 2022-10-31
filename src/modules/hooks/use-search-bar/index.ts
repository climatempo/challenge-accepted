import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import removeSpecialChars from "../../removeSpecialChars";
import { Locale } from "../../types/data";

function useSearchBar(navigate?: NavigateFunction, locales?: Locale[] | null) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [displaySugestions, setDisplaySugestions] = useState(false);
  const [sugestionsToDisplay, setSugestionsToDisplay] = useState<Locale[]>([]);

  const handleRouterPush = (id: number) => () => {
    if (navigate) navigate(`/weather/${id}`);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (navigate) navigate(`/search?query=${searchValue}`);
  };

  const handleSearchSugesstions = (value: string) => {
    if (!locales) return;

    const formattedValue = removeSpecialChars(value);

    const filteredSugestions = locales.filter(({ name, state }) => {
      const formattedName = removeSpecialChars(`${name} - ${state}`);
      return formattedName.includes(formattedValue.toLowerCase());
    });

    if (filteredSugestions.length && formattedValue) {
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
