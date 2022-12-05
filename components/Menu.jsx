import { useState } from "react"
import Image from "next/image"
import Toggle from "./Toggle"

import menu from "public/images/icons/menu.png"
import close from "public/images/icons/close.png"
import styles from "styles/components/Menu.module.scss"

export default function Menu(props) {
  const [isSettingsOpen, setSettingsOpen] = useState(false)
  const { handleTemperature, handleVolume } = props

  function handleOpen() {
    setSettingsOpen(!isSettingsOpen)
  }

  return (
    <div className={styles.container}>
      <Image
        className={styles.icon}
        src={menu}
        alt="barras de menu"
        width="30"
        height="30"
        onClick={handleOpen}
      />
      <menu className={`${styles.menu} ${isSettingsOpen ? "" : styles.hidden}`}>
        <Image
          className={styles.close}
          src={close}
          alt="icone de x"
          width="20"
          height="20"
          onClick={handleOpen}
        />
        <h4 className={styles.description}>Escala de Temperatura</h4>
        <li className={styles.toggle}>
          <span className={styles.option}>ºC</span>
          <Toggle id="temperature" handler={handleTemperature} />
          <span className={styles.option}>ºF</span>
        </li>
        <h4 className={styles.description}>Escala de Volume</h4>
        <li className={styles.toggle}>
          <span className={styles.option}>mm</span>
          <Toggle id="volume" handler={handleVolume} />
          <span className={styles.option}>inch</span>
        </li>
      </menu>
    </div>
  )
}
