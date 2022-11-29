import Image from "next/image"
import { number, PropTypes, string } from "prop-types"
import style from "styles/components/Card.module.scss"
import upArrow from "public/images/icons/up-arrow.png"
import downArrow from "public/images/icons/down-arrow.png"
import umbrella from "public/images/icons/umbrella.png"
import raindrop from "public/images/icons/raindrop.png"

function Card(props) {
  const {
    date = "0000-00-00",
    text,
    temperature = { min: 0, max: 0 },
    rain = { probability: 0, precipitation: 0 },
  } = props

  const normalDate = date.split("-").reverse().join("/")

  return (
    <div className={style.card}>
      <h3>{normalDate}</h3>
      <p>{text}</p>
      <div className={style.stats}>
        <Image src={upArrow} alt="temperatura máxima" width="32" height="32" />
        <span className={style.max_temp}>{temperature.max}</span>

        <Image
          src={downArrow}
          alt="temperatura mínima"
          width="32"
          height="32"
        />
        <span className={style.min_temp}>{temperature.min}</span>
      </div>
      <div className={style.stats}>
        <Image src={raindrop} alt="temperatura máxima" width="32" height="32" />
        <span className="precipitation">{rain.precipitation}</span>

        <Image src={umbrella} alt="temperatura máxima" width="32" height="32" />
        <span className="probability">{rain.probability}%</span>
      </div>
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
