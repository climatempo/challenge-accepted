import Head from "next/head"
import Image from "next/image"
import Card from "components/Card"
import logo from "public/images/logo-white.png"
import styles from "styles/Home.module.scss"

const weather = {
  date: "2017-02-01",
  text: "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
  temperature: { min: 20, max: 28 },
  rain: { probability: 60, precipitation: 20 },
}

export default function Home() {
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
          <Card {...weather}></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
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
