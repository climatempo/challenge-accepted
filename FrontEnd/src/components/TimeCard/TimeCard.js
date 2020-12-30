import React from 'react';
import {
  Row,
  Col,
  Card,  
  CardBody,
  CardTitle, 
  CardSubtitle,
} from 'reactstrap'

export default function TimeCard(props) {
  return (
      <Row>
      <Card className="mt-3 ml-3 mr-3 mb-3">
        <CardBody>
          <CardTitle tag="h5">{props.date}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
          {props.text}
          </CardSubtitle>
        </CardBody>
        <CardBody>
          <Row className="ml-3">
            <h4>{props.temperaturaMax}</h4>
            <Col>
              <img src="../images/icons/upload.png" alt="logo" className="img-fluid"/>
            </Col>
            <h4>{props.temperaturaMin}</h4>
            <Col>
              <img src="../images/icons/download.png" alt="logo" className="img-fluid"/>
            </Col>
          </Row>
          <Row className="ml-3 mt-5">
            <h4>{props.rainPrecipitation}</h4>
            <Col>
              <img src="../images/icons/raindrop-close-up.png" alt="logo" className="img-fluid"/>          
            </Col>
            <h4>{props.rainProbability}</h4>
            <Col>
              <img src="../images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" alt="logo" className="img-fluid"/>
            </Col>
          </Row>
        </CardBody>
      </Card>
      </Row>
  );
}