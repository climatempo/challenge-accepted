import styles from "styles/components/Deck.module.scss"
import Card from "./Card"

function Deck(props) {
  const { weather, isCelsius, isMetric } = props

  const deckOfCards = weather.map((props, index) => (
    <Card {...props} isCelsius={isCelsius} isMetric={isMetric} key={index} />
  ))

  return (
    <div data-test-id="deck" className={styles.grid}>
      {deckOfCards}
    </div>
  )
}

export default Deck
