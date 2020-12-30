import React from 'react'
import {
  Row,
  Col,
  Container,
} from 'reactstrap'

export default function NavBar() {
  return (
    <Container fluid={true}>
      <Row className="bg-primary">
        <Col className="d-flex justify-content-center mt-3 mb-3 ml-3 mr-3">
          <img src="../images/logo-white.png" alt="logo" width="600" className="img-fluid"></img>
        </Col>
      </Row>    
    </Container>
  )
}