import styles from "styles/components/Toggle.module.scss"

export default function Toggle({ id, handler }) {
  return (
    <label className={styles.slider} htmlFor={id}>
      <input
        className={styles.check}
        type="checkbox"
        name="toggle"
        id={id}
        onChange={handler}
      />
      <span className={styles.button}></span>
    </label>
  )
}
