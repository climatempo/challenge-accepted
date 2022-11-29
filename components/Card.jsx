import Image from "next/image"
import { number, PropTypes, string } from "prop-types"
import style from "styles/components/Card.module.scss"
import upArrow from "public/images/icons/up-arrow.png"
import downArrow from "public/images/icons/down-arrow.png"
import umbrella from "public/images/icons/umbrella.png"
import raindrop from "public/images/icons/raindrop.png"

function Card(props) {
  const {
    date,
    text,
    temperature = { min: 0, max: 0 },
    rain = { probability: 0, precipitation: 0 },
  } = props
  //
  return (
    <div className={style.card}>
      <h3>{date}</h3>
      <p>{text}</p>
      <Image src={upArrow} alt="temperatura máxima" width="32" height="32" />
      <span className="max_temp">{temperature.max}ºC</span>

      <Image src={downArrow} alt="temperatura mínima" width="32" height="32" />
      <span className="min_temp">{temperature.min}ºC</span>

      <Image src={raindrop} alt="temperatura máxima" width="32" height="32" />
      <span className="precipitation">{rain.precipitation}mm</span>

      <Image src={umbrella} alt="temperatura máxima" width="32" height="32" />
      <span className="probability">{rain.probability}%</span>
    </div>
  )
}

Card.propTypes = {
  date: string,
  text: string,
  temperature: PropTypes.shape({
    min: number,
    max: number,
  }),
  rain: PropTypes.shape({
    probability: number,
    precipitation: number,
  }),
}

export default Card
