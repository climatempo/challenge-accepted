import { useState, useEffect } from "react"
import styles from "styles/components/Autocomplete.module.scss"

const AutoComplete = ({ data, chooseCity }) => {
  const [suggestions, setSuggestions] = useState([])
  const [suggestionIndex, setSuggestionIndex] = useState(0)
  const [suggestionsActive, setSuggestionsActive] = useState(false)
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase()
    setValue(query)
    if (query.length >= 1) {
      const filterSuggestions = data.filter(
        (suggestion) =>
          suggestion
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .indexOf(query) > -1
      )
      setSuggestions(filterSuggestions)
      setSuggestionsActive(true)
    } else {
      setSuggestionsActive(false)
    }
  }

  useEffect(() => {
    const searchButton = document.querySelector("#search")
    searchButton.addEventListener("click", (e) => {
      e.preventDefault()
      const input = document.querySelector("#input")
      input.focus()
    })
  })

  const handleClick = (e) => {
    setSuggestions([])
    chooseCity(parseInt(e.target.index))
    setSuggestionsActive(false)
  }

  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return
      }
      setSuggestionIndex(suggestionIndex - 1)
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex === suggestions.length - 1) {
        return
      }
      setSuggestionIndex(suggestionIndex + 1)
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue(suggestions[suggestionIndex])
      console.log("suggestionIndex: ", suggestionIndex)
      chooseCity(suggestionIndex)
      setSuggestionIndex(0)
      setSuggestionsActive(false)

      // hide search bar
      const input = document.querySelector("#input")
      input.blur()
    }
  }

  const Suggestions = () => {
    return (
      <ul className={styles.suggestions}>
        {suggestions.map((suggestion, index) => {
          return (
            <li
              className={`
                ${styles.item}
                ${index === suggestionIndex ? styles.active : ""}
                `}
              key={index}
              index={index}
              onClick={handleClick}
              onMouseOver={(e) => {
                e.target.classList.add(`${styles.active}`)
              }}
              onMouseOut={(e) => {
                e.target.classList.remove(`${styles.active}`)
              }}
            >
              {suggestion}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.input}
        id="input"
      />
      {suggestionsActive && <Suggestions />}
    </div>
  )
}

export default AutoComplete
