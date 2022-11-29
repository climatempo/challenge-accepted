import React, { use, useState } from "react"
import PropTypes from "prop-types"
import Card from "./Card"

function Deck(props) {
  const weather = [
    {
      date: "2017-02-01",
      text: "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
      temperature: { min: 20, max: 28 },
      rain: { probability: 60, precipitation: 20 },
    },
    {
      date: "2017-02-01",
      text: "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
      temperature: { min: 20, max: 28 },
      rain: { probability: 60, precipitation: 20 },
    },
    {
      date: "2017-02-01",
      text: "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
      temperature: { min: 20, max: 28 },
      rain: { probability: 60, precipitation: 20 },
    },
  ]

  const [isCelsius, setCelsius] = useState(true)
  const handleDegree = () => {
    setCelsius(!isCelsius)
  }

  const [isMetric, setMetric] = useState(true)
  const handleVolume = () => {
    setVolume(!isMetric)
  }

  const deckOfCards = weather.map((props) => (
    <Card {...props} key={props.date} />
  ))

  return <>{deckOfCards}</>
}

Deck.propTypes = {}

export default Deck
