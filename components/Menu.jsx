import React from "react"
import Image from "next/image"

import menu from "public/images/icons/menu.png"
import close from "public/images/icons/close.png"
import styles from "styles/components/Menu.module.scss"

export default function Menu(props) {
  const { handleTemperature, handleVolume } = props
  return (
    <div className={styles.container}>
      <Image
        className={styles.icon}
        src={menu}
        alt="barras de menu"
        width="30"
        height="30"
      />
      {/* <menu className={styles.menu}>
        <Image
          className={styles.close}
          src={close}
          alt="barras de menu"
          width="30"
          height="30"
        />

        <li className={styles.toggle}>
          <label className={styles.label} htmlFor="temperature">
            <input
              className={styles.check}
              type="checkbox"
              name="toggle"
              id="temperature"
              onChange={handleTemperature}
            />
            <input
              className={styles.check}
              type="checkbox"
              name="toggle"
              id="volume"
              onChange={handleVolume}
            />
          </label>
        </li>
      </menu> */}
    </div>
  )
}
