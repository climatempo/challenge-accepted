import Head from "next/head"
import Image from "next/image"
import Card from "components/Card"
import logo from "public/images/logo-white.png"
import bars from "public/images/bars-solid.svg"
import styles from "styles/Home.module.scss"

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
          <Image
            src={logo}
            width="1202"
            height="170"
            layout="responsive"
            alt="logo"
          />
        </div>
        <div className="styles.menu"></div>
      </nav>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Card></Card>
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
