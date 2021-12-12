import PropTypes from "prop-types";

import { StyledSuggestions } from "./styles/Suggestions.styled";

const Suggestions = ({ show, suggestions, onSelect }) => {
  const renderedSuggestions = suggestions.map((suggestion, index) => (
    <li key={index} onClick={() => onSelect(suggestion)}>
      {suggestion.name} - {suggestion.state}
    </li>
  ));

  return (
    <StyledSuggestions className={!show && "d-none"}>
      <ul>{renderedSuggestions}</ul>
    </StyledSuggestions>
  );
};

Suggestions.propTypes = {
  show: PropTypes.bool.isRequired,
  suggestions: PropTypes.array,
  onSelect: PropTypes.func,
};

export default Suggestions;
