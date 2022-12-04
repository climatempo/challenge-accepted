import React, { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"

import { AutoComplete, CityInfo, Deck, Menu } from "components"

import locales from "data/locales.json"
import weatherData from "data/weather.json"

import logo from "public/images/logo-white.png"
import search from "public/images/icons/search.png"
import styles from "styles/Home.module.scss"

// HOME --------------------------------

export default function Home() {
  const [city, setCity] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isCelsius, setTemperature] = useState(true)
  const [isMetric, setVolume] = useState(true)

  const chooseCity = (index) => {
    setCity(index)
  }

  function handleSearchBar() {
    setSearchOpen(!searchOpen)
  }

  const weather = weatherData[city].weather
  const locale = weatherData[city].locale

  const handleTemperature = () => {
    setTemperature(!isCelsius)
  }

  const handleVolume = () => {
    setVolume(!isMetric)
  }

  const cityNames = locales.map((locale) => {
    return locale.name
  })

  useEffect(() => {
    const searchButton = document.querySelector("#search")
    searchButton
  })

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
        <div
          id="search"
          onClick={handleSearchBar}
          className={styles.icon_container}
        >
          {" "}
          <Image
            className={styles.search}
            src={search}
            alt="lupa"
            width="30"
            height="30"
          />
        </div>

        <div className={styles.image_container}>
          <Image src={logo} layout="fill" alt="logo" />
        </div>
        <Menu
          handleVolume={handleVolume}
          handleTemperature={handleTemperature}
        />
      </nav>

      <CityInfo locale={locale} />

      <main className={styles.main}>
        <AutoComplete
          data={cityNames}
          chooseCity={chooseCity}
          isOpen={searchOpen}
          setIsOpen={setSearchOpen}
        />
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
