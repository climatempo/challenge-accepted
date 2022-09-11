import React from "react";
import "./NameCity.css";

export default function NameCity(props) {
    return (
        <div className="NameCity">
            {props.city.name && props.city.state && (
                <p>Previsão para {props.city.name} - {props.city.state}</p>
            )}
        </div>
    );
};