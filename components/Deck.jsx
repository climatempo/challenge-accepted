import React, { use, useState } from "react"
import PropTypes from "prop-types"
import Card from "./Card"

function Deck(props) {
  console.log(props)

  //   const weather = [
  //     {
  //       date: "2017-02-01",
  //       text: "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
  //       temperature: {
  //         min: 20,
  //         max: 28,
  //       },
  //       rain: {
  //         probability: 60,
  //         precipitation: 20,
  //       },
  //     },
  //     {
  //       date: "2017-02-02",
  //       text: "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
  //       temperature: {
  //         min: 21,
  //         max: 30,
  //       },
  //       rain: {
  //         probability: 60,
  //         precipitation: 10,
  //       },
  //     },
  //     {
  //       date: "2017-02-03",
  //       text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
  //       temperature: {
  //         min: 22,
  //         max: 31,
  //       },
  //       rain: {
  //         probability: 60,
  //         precipitation: 15,
  //       },
  //     },
  //     {
  //       date: "2017-02-04",
  //       text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
  //       temperature: {
  //         min: 22,
  //         max: 32,
  //       },
  //       rain: {
  //         probability: 60,
  //         precipitation: 16,
  //       },
  //     },
  //     {
  //       date: "2017-02-05",
  //       text: "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
  //       temperature: {
  //         min: 23,
  //         max: 32,
  //       },
  //       rain: {
  //         probability: 67,
  //         precipitation: 19,
  //       },
  //     },
  //     {
  //       date: "2017-02-06",
  //       text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
  //       temperature: {
  //         min: 22,
  //         max: 33,
  //       },
  //       rain: {
  //         probability: 60,
  //         precipitation: 8,
  //       },
  //     },
  //     {
  //       date: "2017-02-07",
  //       text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
  //       temperature: {
  //         min: 25,
  //         max: 30,
  //       },
  //       rain: {
  //         probability: 60,
  //         precipitation: "11",
  //       },
  //     },
  //   ]

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

  return (
    <div>
      <div>
        <input type="to" name="" id="" />
      </div>
      {deckOfCards}
    </div>
  )
}

Deck.propTypes = {}

export default Deck
