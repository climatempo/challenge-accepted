import Image from "next/image"
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
    isCelsius,
    isMetric,
  } = props

  const normalDate = date.split("-").reverse().join("/")

  function fromCtoF(temp) {
    return Math.round(temp * 1.8 + 32)
  }
  function fromMtoI(volume) {
    return (volume / 25.4).toFixed(2)
  }

  return (
    <div className={style.card}>
      <h3>{normalDate}</h3>
      <p>{text}</p>
      <div className={style.stats}>
        <Image src={upArrow} alt="temperatura máxima" width="32" height="32" />
        <span className={style.max_temp}>
          {isCelsius
            ? temperature.max + "ºC"
            : fromCtoF(temperature.max) + "ºF"}
        </span>

        <Image
          src={downArrow}
          alt="temperatura mínima"
          width="32"
          height="32"
        />
        <span className={style.min_temp}>
          {isCelsius
            ? temperature.min + "ºC"
            : fromCtoF(temperature.min) + "ºF"}
        </span>
      </div>
      <div className={style.stats}>
        <Image src={raindrop} alt="temperatura máxima" width="32" height="32" />
        <span className="precipitation">
          {isMetric
            ? rain.precipitation + "mm"
            : fromMtoI(rain.precipitation) + "inch"}
        </span>

        <Image src={umbrella} alt="temperatura máxima" width="32" height="32" />
        <span className="probability">{rain.probability}%</span>
      </div>
    </div>
  )
}

export default Card
