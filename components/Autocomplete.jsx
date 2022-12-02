import { useState, useEffect } from "react"
import debounce from "utils/debounce"
import styles from "styles/components/Autocomplete.module.scss"

const AutoComplete = ({ data, chooseCity }) => {
  const [suggestions, setSuggestions] = useState([])
  const [selected, setSelected] = useState(-1)
  const [value, setValue] = useState("")
  let time

  useEffect(() => {
    // CONFIGURA LUPA PARA ABRIR A BUSCA
    const searchButton = document.querySelector("#search")
    searchButton.addEventListener("click", () => {
      openSearch()
    })
  })

  function resetSelection() {
    setSuggestions([])
    setSelected(-1)
  }

  function hideSearch() {
    const wrapper = document.querySelector(`.${styles.wrapper}`)
    wrapper.classList.add(`${styles.hidden}`)
    setValue("")
    input.blur()
  }

  function openSearch() {
    resetSelection()
    const wrapper = document.querySelector(`.${styles.wrapper}`)
    wrapper.classList.remove(`${styles.hidden}`)
    const input = document.querySelector("#input")
    input.focus()
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
      setValue(suggestions[selected])

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

  // CONFIGURA COMPORTAMENTO DE ENTRADA DE TEXTO NO INPUT
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
    } else {
      resetSelection()
    }
  }

  const updateSearchText = debounce(handleChange)

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
    <div className={styles.wrapper}>
      <input
        type="text"
        value={value}
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
