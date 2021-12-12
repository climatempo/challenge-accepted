import { useEffect, useState } from "react";

import { FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

import { Icon, StyledSearchBox } from "./styles/SearchBox.styled";
import Suggestions from "./Suggestions";

const SearchBox = ({
  className,
  suggestions,
  onSelect,
  onChange,
  maxWidth,
  bgColor,
  color,
  placeholder,
  ariaLabel,
}) => {
  const [fieldValue, setFieldValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(
    suggestions?.length > 0
  );
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const haveSuggestions = suggestions.length > 0;
    const fieldIsFocused = isFocused;
    setShowSuggestions(haveSuggestions && fieldIsFocused);
  }, [suggestions, isFocused]);

  const handleChange = (e) => {
    setFieldValue(e.target.value);
    onChange(e.target.value);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 300);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSugestionSelect = (suggestion) => {
    setFieldValue("");
    onSelect(suggestion);
  };

  return (
    <StyledSearchBox
      className={className ? className : ""}
      maxWidth={maxWidth}
      bgColor={bgColor}
      color={color}
    >
      <InputGroup className="d-flex">
        <FormControl
          className="ps-3"
          placeholder={placeholder}
          aria-label={ariaLabel}
          value={fieldValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Icon color={color} right="20px" top="10px">
          <FaSearch />
        </Icon>
        <Suggestions
          show={showSuggestions}
          suggestions={suggestions}
          onSelect={handleSugestionSelect}
        />
      </InputGroup>
    </StyledSearchBox>
  );
};

SearchBox.defaultProps = {
  suggestions: [],
  placeholder: "",
  ariaLabel: "",
};

SearchBox.propTypes = {
  suggestions: PropTypes.array,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  maxWidth: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default SearchBox;
