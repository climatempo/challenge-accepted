import React from "react";
import LogoClima from "../images/logo-clima.png";
import "./Header.css";

export default function Header() {
    return(
        <header className="Header">
            <img className="Image" src={LogoClima} alt="logo climatempo" />
        </header>
    );
};