import { number, PropTypes, string } from "prop-types"
import style from "styles/components/Card.module.scss"

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
      <p>
        <span>{temperature.min}</span>
        <span>{temperature.max}</span>
      </p>
      <p>
        <span>{rain.precipitation}</span>
        <span>{rain.probability}</span>
      </p>
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
