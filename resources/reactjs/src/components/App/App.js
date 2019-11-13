import React, {Component} from 'react';
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import SearchResultList from '../SearchResultList/SearchResultList'

// The main app
class App extends Component {

  /// Constructor
  constructor(props) {
    super(props);
    this.state = {
      localeID: "",
      cidade: "",
      uf: ""
    };
    this.getSelection = this.getSelection.bind(this);
  }

  // Get user selection in child component
  getSelection(localeID, cidade, uf){
    this.setState({ 
      localeID: localeID ,
      cidade: cidade,
      uf: uf
    });
  }

  // Renders all the code
  render(){
    return (
      <div className='container-full background-gray2 flex flex-align-center flex-justify-start flex-column'>
        <Header />
        <SearchForm getSelection={this.getSelection} />
        <SearchResultList localeID={this.state.localeID} cidade={this.state.cidade} uf={this.state.uf} />
      </div>
    );
  }
}

export default App;
