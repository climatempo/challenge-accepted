import React, {Component} from 'react';
import OptionList from '../OptionList/OptionList'

// The form component
class SearchForm extends Component {

  // Constructor
  constructor(props) {
    super(props);

    // Start component state
    this.state = {
      searchData: '',
      searchText: '',
      target: null
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  // Get user selection in child component
  handleSelection(id, cidade, uf){
      this.setState({
        searchText: cidade                
      });
      this.props.getSelection(id, cidade, uf);
  }

  // Handle input change
  handleChange(event) {
    this.setState({
      searchData: event.target.value,
      searchText:  event.target.value,
      target : event.target
    });
  }

  // Renders stuff
  render(){
    return (
      <div className='form-container'>
          <form autoComplete='off' className='form'>
            <label className='form-element-container flex flex-column flex-align-start'>
              <input className='form-element' type="text" name="search" value={this.state.searchText} onChange={this.handleChange} />
            </label>
          </form>

          <OptionList data={this.state.searchData} onSelect={this.handleSelection} />
      </div>
    );
  }
}

export default SearchForm;
