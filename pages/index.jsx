import Head from "next/head"
import Image from "next/image"
import Deck from "components/Deck"

import logo from "public/images/logo-white.png"
import styles from "styles/Home.module.scss"

export default function Home() {
  const weather = [
    {
      date: "2017-02-01",
      text: "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
      temperature: {
        min: 20,
        max: 28,
      },
      rain: {
        probability: 60,
        precipitation: 20,
      },
    },
    {
      date: "2017-02-02",
      text: "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
      temperature: {
        min: 21,
        max: 30,
      },
      rain: {
        probability: 60,
        precipitation: 10,
      },
    },
    {
      date: "2017-02-03",
      text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
      temperature: {
        min: 22,
        max: 31,
      },
      rain: {
        probability: 60,
        precipitation: 15,
      },
    },
    {
      date: "2017-02-04",
      text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
      temperature: {
        min: 22,
        max: 32,
      },
      rain: {
        probability: 60,
        precipitation: 16,
      },
    },
    {
      date: "2017-02-05",
      text: "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
      temperature: {
        min: 23,
        max: 32,
      },
      rain: {
        probability: 67,
        precipitation: 19,
      },
    },
    {
      date: "2017-02-06",
      text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
      temperature: {
        min: 22,
        max: 33,
      },
      rain: {
        probability: 60,
        precipitation: 8,
      },
    },
    {
      date: "2017-02-07",
      text: "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
      temperature: {
        min: 25,
        max: 30,
      },
      rain: {
        probability: 60,
        precipitation: "11",
      },
    },
  ]

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
        <div className={styles.grid}>
          <Deck weather={weather} />
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
