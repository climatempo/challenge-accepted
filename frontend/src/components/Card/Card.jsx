import React from 'react'
import "./Card.css";
import setadown from "../images/icons/setadown.png";
import setaup from "../images/icons/setaup.png";
import gota from "../images/icons/raindrop.png";
import guardaChuva from "../images/icons/umbrella.png";



export default function Card(props) {
    return (
        <div className='Card'>
            <div className='Content'>
                <p className='Date'>{props.date}</p>
                <div className='Data'>
                    <table>
                        <tbody>
                            <tr className='TxtData'>
                                <td><img className='Icon' src={setaup} alt="" /><span className='Degree1'>{props.temMax}°C</span></td>
                                <td><img className='Icon' src={setadown} alt="" /><span className='Degree2'>{props.temMin}°C</span></td>
                            </tr>
                            <tr className='TxtData'>
                                <td><img className='Icon' src={gota} alt="" /><span>{props.chuva}mm</span></td>
                                <td><img className='Icon' src={guardaChuva} alt="" /><span>{props.probabilidade}%</span></td>
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