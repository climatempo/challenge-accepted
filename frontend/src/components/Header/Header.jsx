import React from "react";
import LogoClima from "../images/logo-white.png";
import "./Header.css";
import { RiSettings3Fill } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';
import UnitSelection from "../UnitSelection/UnitSelection";



export default function Header({ setTemperature, setPrecipitation}) {
    const [openPopover, setOpenPopover] = React.useState(false);

    return (
        <header className="Header">
            <img className="Image" src={LogoClima} alt="logo climatempo" />
            <div className="containerSettings">
                <button className="buttonSettings" onClick={() => setOpenPopover(!openPopover)}>
                    <RiSettings3Fill />
                </button>
                {openPopover && (
                    <div className='popoverSettings'>
                        <div className="headerPopover">
                            <h6>
                                Unidades de medida
                            </h6>
                            <button className="buttonClose" onClick={() => setOpenPopover(false)}>
                                <FiX />
                            </button>
                        </div>
        
                        <div>
                            <div className='units'>
                                <span>Temperatura:</span>
                                <UnitSelection options={['C', 'F']} onSelect={setTemperature} />
                            </div>
                            <div className='units'>
                                <span>Chuva:</span>
                                <UnitSelection options={['mm', 'inch']} onSelect={setPrecipitation} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};