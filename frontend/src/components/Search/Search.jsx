import React, { useState } from "react";
import "./Search.css";
import imgSearch from "../images/icons/search.png";
import logoImgTwo from "../images/logo.png";
import api from "../../services/api";

export default function Search(props) {

    const [cityName, setCityName] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [cities, setCities] = useState([]);

    const searchCity = (event) => {
        const value = event.target.value
        setCityName(value)
        props.setOptionCityName(value)
        setShowOptions(true)
        api.get(`/locales?filter=${value}`).then((response) => {
            setCities(response.data)
        })
    }

    const choiceOptions = (option) => {
        setShowOptions(false)
        setCityName(option.name)
        props.setOptionCityName(option.name)
        setCities([])
        props.onSelect(option)
        props.setOptionCityId(option.id)
    }

    return (
      <>
        <div>
            <img className="logoImgTwo" src={logoImgTwo} alt="logo climatempo" />
        </div>
        
        <div className="Search">
            <div className="Input">
                <input
                    className="InputTxt"
                    placeholder="Busque uma cidade"
                    value={cityName}
                    onChange={searchCity}
                    onClick={() => setShowOptions(!showOptions)}
                />
                <button
                    className="SearchButton"
                    onClick={() => {
                        setShowOptions(false)
                        props.onClickSearchButton(cityName)
                    }}
                >
                    <img
                        className="Img"
                        src={imgSearch}
                        alt="imagem da lupa"

                    />
                </button>
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
      </>
    );
};