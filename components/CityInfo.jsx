import React from "react"
import styles from "styles/components/CityInfo.module.scss"

export default function CityInfo(props) {
  const { locale } = props
  const { name, state, latitude, longitude } = locale
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{`Clima na cidade de`}</h2>
      <h1 className={styles.city_name}>{`${name}, ${state}`}</h1>

      <div className={styles.gps_group}>
        <span className={styles.gps}>{`Longitude: ${longitude}`}</span>
        <span className={styles.gps}>{`Latitude: ${latitude}`}</span>
      </div>
    </div>
  )
}
