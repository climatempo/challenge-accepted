import Card from "./Card"

function Deck(props) {
  const { weather, isCelsius, isMetric } = props

  const deckOfCards = weather.map((props, index) => (
    <Card {...props} isCelsius={isCelsius} isMetric={isMetric} key={index} />
  ))

  return <>{deckOfCards}</>
}

export default Deck
