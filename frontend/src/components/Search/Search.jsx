import React, {useState} from "react";
import "./Search.css";
import imgSearch from "../images/icons/search.png";
import api from "../../services/api";

export default function Search(props) {

    const [cityName, setCityName ] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [cities, setCities] = useState([]);

    const searchCity = (event) =>{
        const value = event.target.value
        setCityName(value)
        api.get(`/locales?filter=${value}`).then((response) => {
            setCities(response.data)
        })
    }

    const choiceOptions = (option) => {
        setShowOptions(false)
        setCityName(option.name)
        setCities([])
        props.onSelect(option)
    }

    return(
        <div className="Search">
            <div className="Input">
                <input 
                    className="InputTxt" 
                    placeholder="Busque uma cidade"  
                    value={cityName} 
                    onChange={searchCity}
                    onClick={() => setShowOptions(!showOptions)}    
                />
                <img className="Img" src={imgSearch} alt="imagem da lupa" />
            </div>

            {showOptions && (
                <ul className="Options" >
                    {cities.map((city) => {
                        return <li 
                            className="OptionsLi"
                            key={city.id} 
                            onClick={() => choiceOptions(city)}                           
                        >{city.name}</li>
                    })}
                </ul>
            )}
        </div>
    );
};