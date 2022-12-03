import { useState, useEffect } from "react"
import debounce from "utils/useDebounce"
import styles from "styles/components/Autocomplete.module.scss"

const AutoComplete = ({ data, chooseCity, isOpened }) => {
  const [suggestions, setSuggestions] = useState([])
  const [selected, setSelected] = useState(-1)
  const [displayValue, setDisplayValue] = useState("")

  function handleChange(e) {
    const value = e.target.value.toLowerCase()
    setDisplayValue(value)
  }

  const debouncedValue = debounce(displayValue)

  useEffect(() => {
    if (displayValue != "") {
      setSuggestions(findSuggestion(data, debouncedValue))
    } else {
      resetSelection()
    }
  }, [debouncedValue])

  // CONFIGURA COMPORTAMENTO DE ENTRADA DE TEXTO NO INPUT
  function handleChange(e) {
    // pega o texto digitado
    const query = e.target.value.toLowerCase()
    setDisplayValue(query)
    console.log("typing")
  }

  const findSuggestion = (data, query) => {
    console.log("searching")
    const filterSuggestions = data.filter(
      (suggestion) =>
        suggestion
          .toLowerCase()
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .indexOf(query) > -1
    )
    return filterSuggestions
  }

  function resetSelection() {
    setSuggestions([])
    setSelected(-1)
  }

  function hideSearch() {
    const wrapper = document.querySelector(`.${styles.wrapper}`)
    wrapper.classList.add(`${styles.hidden}`)
    setDisplayValue("")
    input.blur()
  }

  // CONFIGURA NAVEGAÇÃO POR TECLADO
  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (selected <= 0) {
        return
      }
      setSelected(selected - 1)
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (selected === suggestions.length - 1) {
        return
      }
      setSelected(selected + 1)
    }
    // ENTER
    else if (e.keyCode === 13) {
      setDisplayValue(suggestions[selected])

      if (selected != -1) {
        chooseCity(selected)
      }
      hideSearch()
    } else if (e.keyCode === 27) {
      hideSearch()
    }
  }

  // CONFIGURA SELEÇÃO POR CLICK
  function handleClick(e) {
    const index = e.target.getAttribute("index")
    console.log("index: ", index)
    setSelected(index)
    selected != -1 ? chooseCity(selected) : false
    hideSearch()
  }

  const updateSuggestions = debounce((handleChange) => {})

  const Suggestions = () => {
    return (
      <ul className={styles.suggestions}>
        {suggestions.map((suggestion, index) => {
          return (
            <li
              className={`
                ${styles.item}
                ${index === selected ? styles.active : ""}
                `}
              key={index}
              index={index}
              onClick={(e) => {
                handleClick(e)
              }}
              onMouseOver={(e) => {
                e.target.classList.add(`${styles.active}`)
                setSelected(e.target.getAttribute("index"))
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
    <div className={`${styles.wrapper} ${isOpened ? styles.hidden : ""}`}>
      <input
        type="search"
        value={displayValue}
        onFocus={resetSelection}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.input}
        id="input"
      />
      {<Suggestions />}
    </div>
  )
}

export default AutoComplete
