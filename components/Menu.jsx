import { useState } from "react"
import Image from "next/image"

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
          alt="barras de menu"
          width="20"
          height="20"
          onClick={handleOpen}
        />
        <h4 className={styles.description}>Escala de Temperatura</h4>
        <li className={styles.toggle}>
          <span className={styles.option}>ºF</span>
          <label className={styles.slider} htmlFor="temperature">
            <span className={styles.button}></span>
            <input
              className={styles.check}
              type="checkbox"
              name="toggle"
              id="temperature"
              onChange={handleTemperature}
            />
          </label>
          <span className={styles.option}>ºC</span>
        </li>
        <h4 className={styles.description}>Escala de Volume</h4>
        <li className={styles.toggle}>
          <span className={styles.option}>inch</span>

          <label className={styles.slider} htmlFor="volume">
            <span className={styles.button}></span>
            <input
              className={styles.check}
              type="checkbox"
              name="toggle"
              id="volume"
              onChange={handleVolume}
            />
          </label>
          <span className={styles.option}>mm</span>
        </li>
      </menu>
    </div>
  )
}
