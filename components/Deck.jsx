import PropTypes from "prop-types"
import Card from "./Card"

function Deck(props) {
  const { weather, isCelsius, isMetric } = props

  const deckOfCards = weather.map((props, index) => (
    <Card {...props} isCelsius={isCelsius} isMetric={isMetric} key={index} />
  ))

  return <>{deckOfCards}</>
}

Deck.propTypes = {}

export default Deck
