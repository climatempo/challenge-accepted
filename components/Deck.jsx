import React, { useState } from "react"
import PropTypes from "prop-types"
import Card from "./Card"

function Deck(props) {
  const { weather } = props

  const [isCelsius, setCelsius] = useState(true)
  const handleDegree = () => {
    setCelsius(!isCelsius)
  }

  const [isMetric, setMetric] = useState(true)
  const handleVolume = () => {
    setVolume(!isMetric)
  }

  const deckOfCards = weather.map((props, index) => (
    <Card {...props} isCelsius={isCelsius} isMetric={isMetric} key={index} />
  ))

  return <>{deckOfCards}</>
}

Deck.propTypes = {}

export default Deck
