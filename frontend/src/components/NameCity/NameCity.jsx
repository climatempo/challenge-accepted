import React from "react";
import "./NameCity.css";

import { FiX } from "react-icons/fi";

export default function NameCity(props) {
    return (
        <div className="NameCity">
            {props.city.name && props.city.state && (
                <>
                    <p>Previsão para {props.city.name} - {props.city.state}</p>
                    <button className="clearSearch" onClick={props.clearSearch}>
                        <FiX />
                    </button>
                </>
            )}
        </div>
    );
};