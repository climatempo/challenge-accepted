import { useState } from "react";

import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FormSelect = ({
  className,
  controlId,
  label,
  ariaLabel,
  value,
  options,
  onChange,
}) => {
  const [selected, setSelected] = useState(value);

  const renderedOptions = options.map((option) => (
    <option key={option.key} value={option.key}>
      {option.label}
    </option>
  ));

  const handleChange = (e) => {
    const selectedOption = options.find(
      (option) => option.key === e.target.value
    );
    setSelected(selectedOption);
    onChange(selectedOption);
  };

  return (
    <Form.Group className={className} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        aria-label={ariaLabel}
        defaultValue={value.key}
        onChange={handleChange}
      >
        {renderedOptions}
      </Form.Select>
    </Form.Group>
  );
};

FormSelect.defaultProps = {
  className: "",
  ariaLabel: "",
  value: {
    key: "",
    label: "",
  },
};

FormSelect.propTypes = {
  className: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  value: PropTypes.object,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

export default FormSelect;
