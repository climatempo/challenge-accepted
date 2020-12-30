import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Button
} from 'reactstrap'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

export default function FormBar() {
  const [city, setCity] = useState("")
  const [autoCompleteCities, setAutoCompleteCities] = useState([])

  useEffect(() => {
    async function fetchAPI(){
      const result = await axios.get('http://localhost:5000/locales/all')
      setAutoCompleteCities(result.data)
    }
    fetchAPI()
  }, [city])

  const redirect = () => {
    if(city === "" || city === "null" || city === null || city === undefined){
      window.location.href = '/'
    } else {
      window.location.href = `/city/${city}`
    } 
  }

  return (
    <Container fluid={true}>    
      <Row className="bg-secondary">
        <Col className="d-flex justify-content-center mt-2 mb-2 ml-2 mr-2">
          <Form>
            <FormGroup inline check>
            <Autocomplete
              options={autoCompleteCities}
              getOptionLabel={(option) => option.name}
              style={{ width: 250, backgroundColor: '#ffffff' }}
              onChange={(event, newValue) => {
                newValue === null ? setCity(""): setCity(newValue.id)
              }}
              renderInput={(params) => <TextField {...params} label="Cidade"  variant="outlined"/>}/>
              <Button type="button" 
              className="btn btn-success ml-2"
              onClick={() => redirect()}>Buscar
            </Button>        
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}