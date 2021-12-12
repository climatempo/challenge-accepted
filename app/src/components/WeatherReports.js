import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";

import MeasureForm from "./MeasureForm";
import WeatherReportItem from "./WeatherReportItem";

const WeatherReports = ({
  locale,
  reports,
  measures,
  temperatureMeasures,
  rainMeasures,
  onChangeMeasures,
}) => {
  const reportsList =
    reports.length > 0 &&
    reports.map((report) => (
      <Col lg={4} md={6} className="mb-3 break-fix" key={report.date}>
        <WeatherReportItem report={report} measures={measures} />
      </Col>
    ));
  const reportsTitle = reports.length > 0 && (
    <h1 className="f-light ">
      Previsão para{" "}
      <strong>
        {locale.name} - {locale.state}
      </strong>
    </h1>
  );
  return (
    <Container>
      <Row>{reportsTitle}</Row>
      <MeasureForm
        selectedMeasures={measures}
        temperatureOptions={temperatureMeasures}
        rainOptions={rainMeasures}
        onChangeMeasures={onChangeMeasures}
      />
      <Row>{reportsList}</Row>
    </Container>
  );
};

WeatherReports.defaultProps = {
  reports: [],
};

WeatherReports.propTypes = {
  locale: PropTypes.object.isRequired,
  reports: PropTypes.array,
  measures: PropTypes.object.isRequired,
  temperatureMeasures: PropTypes.array.isRequired,
  rainMeasures: PropTypes.array.isRequired,
  onChangeMeasures: PropTypes.func,
};

export default WeatherReports;
