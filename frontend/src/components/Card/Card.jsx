import React from 'react'
import "./Card.css";
import arrowdown from "../images/icons/setadown.png";
import arrowup from "../images/icons/setaup.png";
import drop from "../images/icons/raindrop.png";
import umbrella from "../images/icons/umbrella.png";

export default function Card(props) {
    return (
        <div className='Card'>
            <div className='Content'>
                <p className='Date'>{props.date}</p>
                <div className='Data'>
                    <table>
                        <tbody>
                            <tr className='TxtData'>
                                <td><img className='Icon' src={arrowup} alt="" /><span className='Degree1'>{props.temMax}°{props.temUnit}</span></td>
                                <td><img className='Icon' src={arrowdown} alt="" /><span className='Degree2'>{props.temMin}°{props.temUnit}</span></td>
                            </tr>
                            <tr className='TxtData'>
                                <td><img className='Icon' src={drop} alt="" /><span>{Number(props.precipitation).toFixed(1)}{props.precUnit}</span></td>
                                <td><img className='Icon' src={umbrella} alt="" /><span>{props.probability}%</span></td>
                            </tr>                           
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='Content2'>
                <p>{props.txt}</p>
            </div>
        </div>
    )
};