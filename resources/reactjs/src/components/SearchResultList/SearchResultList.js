 import React, {Component} from 'react';
import SearchResultItem from '../SearchResultItem/SearchResultItem'
import Api from '../../services/Api';

// Images
import Loader from '../../assets/images/loader.gif';

// The header component
class SearchResultList extends Component {

  // Builds object
  constructor(props) {
    super(props);
    this.state = {
      dataList : null
    };
  }

  // When props change
  componentDidUpdate() {

    // Check for props
    if(this.props.localeID && !this.state.dataList){       

        // Get data
        this.getApiData();
    }
  }

  // Get data
  async getApiData(){

    // Search data
    let localeID = this.props.localeID;

    // Call API
    const responseData = await Api.weather(localeID);

    // Set data list
    this.setState({        
        dataList: responseData
    });  
  }



  // UI Functions
  // Return empty result
  getLoader(){

    // Return loader
    return <img className='loader' src={Loader} alt='Loader' />;
  }

  // Get result list
  getList(){
    let {cidade, uf} = this.props,
    {dataList} = this.state;

    // Return data
    return (
        <section className='list-container'>        
          <h1 className='font-23 font-400 color-black text-none'>
            Previsão para {cidade} - {uf}
          </h1>
          <ul className='card-container'>
            { 
              dataList.map((e) => {
                return <SearchResultItem key={e.id} data={e} />
              })
            } 
        </ul>                       
      </section>             
    )
  }
  
  // Renders stuff
  render(){

    return (
      this.state.dataList ? this.getList() : (this.props.localeID && this.getLoader()) 
    );
  }
}

export default SearchResultList;
