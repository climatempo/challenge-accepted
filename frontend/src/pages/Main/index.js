import React, { Component } from 'react'; 
import api from '../../services/api';
import logo from '../../assets/images/logo-white.png';
import List from '../../components/List';
import { Header, Container, Content } from './styles';
import Search from 'react-search';


export default class Main extends Component { 
  state = {
    weather: [],
    locales: [],
    locale:''
  }

  async componentDidMount() {    
    let response = '';
    try {
       response = await api.get('/locales');
       const cities = [];       
       await response.data.map(r => cities.push( { id: r.id, value: r.name }));       
       this.setState({locales: cities});
    } catch (error) {      
      return console.log(error);
    
    } 
  }

  async ItemsSelected(items) {
      console.log(items);
      if(items == null || items.length === 0) return;
     
      try{
          let response = await api.get(`weather/${items[0].id}`);
          this.setState({
            weather: response.data,
            locale: items[0].value
          });                    
      } catch (error) {      
        return console.log(error);    
      } 
  }

  render(){
    const { weather, locale, locales } = this.state;
    console.log(this.state.locale);
    return (
      <Container>
        <Header>
            <img src={logo} alt=""/>
            <Search 
               placeholder='Escolha a cidade...'
              items={locales}   
              multiple={false}          
              onItemsChanged={this.ItemsSelected.bind(this)}
            />                      
        </Header>
        
        <Content>
          
        {locale &&  (<h2>Previsão para {locale}-SP</h2>) }
         
          <div>
            <ul>
              {weather.map(w => (            
                <List data={w.weather} />   
              ))}
            </ul>
          </div>
        </Content>      
      </Container>
    );
  }
}
