import { useState } from "react";

import PropTypes from "prop-types";
import { FaCog } from "react-icons/fa";
import { Button, Modal, Form } from "react-bootstrap";

import { StyledMeasureForm } from "./styles/MeasureForm.syled";
import FormSelect from "./FormSelect";

const MeasureForm = ({
  selectedMeasures,
  temperatureOptions,
  rainOptions,
  onChangeMeasures,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [temperature, setTemperature] = useState({
    ...selectedMeasures.temperature,
  });
  const [rain, setRain] = useState({ ...selectedMeasures.rain });

  const handleOpen = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setTemperature({ ...selectedMeasures.temperature });
    setRain({ ...selectedMeasures.rain });
  };
  const handleSave = () => {
    setShowModal(false);

    const newMeasures = {
      temperature,
      rain,
    };

    onChangeMeasures(newMeasures);
  };

  const handleChangeTemperature = (newTemperature) => {
    setTemperature(newTemperature);
  };

  const handleChangeRain = (newRain) => {
    setRain(newRain);
  };

  return (
    <StyledMeasureForm>
      <div className="mb-2 d-flex justify-content-end">
        <FaCog className="btn-config me-1" onClick={handleOpen} />
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Medidas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormSelect
              className="mb-3"
              controlId="formTemperature"
              label="Temperatura"
              ariaLable="Medida de temperatura"
              value={temperature}
              onChange={handleChangeTemperature}
              options={temperatureOptions}
            />

            <FormSelect
              className="mb-3"
              controlId="formRain"
              label="Chuva"
              ariaLable="Medida de chuva"
              value={rain}
              onChange={handleChangeRain}
              options={rainOptions}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </StyledMeasureForm>
  );
};

MeasureForm.propTypes = {
  selectedMeasures: PropTypes.object.isRequired,
  temperatureOptions: PropTypes.array.isRequired,
  rainOptions: PropTypes.array.isRequired,
  onChangeMeasures: PropTypes.func,
};

export default MeasureForm;
