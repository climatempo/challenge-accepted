import { FormEvent, FormEventHandler, useState } from "react";
import SearchBar from ".";

function SearchBarContainer() {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submit");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <SearchBar
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isFocused={isFocused}
    />
  );
}

export default SearchBarContainer;
