import React from "react";
import "./UnitSelection.css"

export default function UnitSelection(props) {

    return(
        <select className="Selection" onChange={(event) => props.onSelect(event.target.value)}>
            {props.options && props.options.map((option, index) => {
                return(
                    <option key={index}>{option}</option>
                )
            })}
        </select>
        
    )
}