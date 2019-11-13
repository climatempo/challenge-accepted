import React, {Component} from 'react';
import Api from '../../services/Api';

// The header component
class OptionList extends Component {

  // Construct "Class"
  constructor(props) {

    // Call super class
    super(props);

    // Start state
    this.state = {
      dataList : null,
      isHidden : ''
    };

    // Bind this to function
    this.searchData = this.searchData.bind(this); 

    // Creates a timeout
    this.timeout = null;   
  } 
  
  // When the item list is clicked
  searchData(e){       
    
    // Hide list
    this.setState({
      isHidden: 'is-hidden'      
    });

    // Destructors data
    let {id, uf} = e.target.dataset,
    cidade = e.target.innerText;

    // Call parent function
    this.props.onSelect(id, cidade, uf);    
  }

  // When component mounts
  componentDidUpdate(prevProps) {

    // The props changed
    if(this.props.data !== prevProps.data && this.props.data.length > 3){    

      // There is a timeout? Clear it
      if(this.timeout){
        clearTimeout(this.timeout);
      }

      // Wait some time
      this.timeout = setTimeout(() => {

        // There are enough chars?
        if(this.props.data !== prevProps.data && this.props.data.length > 3){

          // Get data
          this.getApiData();
        }    
     }, 300);
    } 
  }

  // Get data
  async getApiData(){
          
    // Search data
    let data = this.props.data;

    // Call API
    const responseData = await Api.locale(data);

    // Set data list
    this.setState({
        isHidden: '',
        dataList: responseData
    });  
  }


  // UI Functions
  // Return empty result
  getEmptyResult(){

    // Return empty result
    return <li>Nenhuma cidade encontrada</li>;
  }
  getList(){
    // Return data
    return this.state.dataList.map(e =>{
      let {id, uf, name} = e;
      return <li key={id} data-id={id} data-uf={uf} onClick={this.searchData}>
        {name}
      </li>;
    });
  }
  

  // Renders
  render(){

    // Destructs data
    let {dataList, isHidden} = this.state;

    // Return JSX
    return (
      <ul className={'suggestion-list ' + isHidden}>
        { dataList != null && ( dataList.length === 0 ? this.getEmptyResult() : this.getList()) }
      </ul>
    );
  }
}

export default OptionList;
