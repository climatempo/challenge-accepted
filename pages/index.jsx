import React, { useState } from "react"

import Head from "next/head"
import Image from "next/image"
import Deck from "components/Deck"
import AutoComplete from "components/Autocomplete"
import { autoCompleteData } from "data/testData.js"
import jsonData from "data/weather.json"

import logo from "public/images/logo-white.png"
import styles from "styles/Home.module.scss"

// HOME --------------------------------

export default function Home() {
  const data = jsonData
  console.log("data: ", data[0].weather)

  const weather = data[0].weather

  const [isCelsius, setCelsius] = useState(true)
  const handleDegree = () => {
    setCelsius(!isCelsius)
  }

  const [isMetric, setMetric] = useState(true)
  const handleVolume = () => {
    setVolume(!isMetric)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Climatempo - Code Challenge - Vaga FrontEnd</title>
        <meta
          name="description"
          content="Code Challenge Vaga Front da Climatempo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.image_container}>
          <Image src={logo} layout="fill" alt="logo" />
        </div>
      </nav>

      <main className={styles.main}>
        <AutoComplete data={autoCompleteData} />
        <div className={styles.grid}>
          <Deck isCelsius={isCelsius} isMetric={isMetric} weather={weather} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
