import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class SearchBox extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSearch}>
		    <FormGroup>
		      <InputGroup>
		      	<FormControl 
			      	value={this.props.city} 
			      	onChange={this.props.handleCityChange} 
			      	type="text" 
			      	placeholder="Digite a cidade" />
		        <InputGroup.Button>
		          <Button type="submit">Search</Button>
		        </InputGroup.Button>
		      </InputGroup>
		    </FormGroup>
	    </form>
    );
  }
}