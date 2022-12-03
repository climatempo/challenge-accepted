import { useState, useEffect, useRef } from "react"
import debounce from "utils/useDebounce"
import styles from "styles/components/Autocomplete.module.scss"

const AutoComplete = ({ data, chooseCity, isOpen, setIsOpen }) => {
  const [suggestions, setSuggestions] = useState([])
  const [selected, setSelected] = useState(-1)
  const [displayValue, setDisplayValue] = useState("")
  const inputRef = useRef()

  // Observa abertura do painel de busca e seta foco na barra
  useEffect(() => {
    isOpen ? inputRef.current.focus() : inputRef.current.blur()
  }, [isOpen])

  // Configura entrada de texto
  function handleChange(e) {
    // pega o texto digitado e guarda
    const query = e.target.value.toLowerCase()
    setDisplayValue(query)
  }

  // Pega o que é digitado, e quando o cliente para de digitar faz o debounce, e guarda na var debounced
  const debouncedValue = debounce(displayValue)

  // Observa mudanças na var debounced, e busca sugestões
  useEffect(() => {
    if (debouncedValue != "") {
      setSuggestions(findSuggestion(data, debouncedValue))
    } else {
      resetSelection()
    }
  }, [debouncedValue, data])

  // Função de busca de sugestões com a query digitada
  const findSuggestion = (data, query) => {
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
    setDisplayValue("")
    setSuggestions([])
    setSelected(-1)
  }

  function hideSearch() {
    resetSelection()
    setIsOpen(false)
  }

  // Configura navegação por teclado
  const handleKeyDown = (e) => {
    // Seta para cima
    if (e.keyCode === 38) {
      if (selected <= 0) {
        return
      }
      setSelected(selected - 1)
    }
    // Seta para baixo
    else if (e.keyCode === 40) {
      if (selected === suggestions.length - 1) {
        return
      }
      setSelected(selected + 1)
    }
    // Enter
    else if (e.keyCode === 13) {
      if (selected != -1) {
        chooseCity(selected)
      }
      hideSearch()
    } else if (e.keyCode === 27) {
      hideSearch()
    }
  }

  // Configura seleção por click
  function handleClick(e) {
    const index = e.target.getAttribute("index")
    console.log("index: ", index)

    // TODO: FIX BUG: Não seta a variável em mobile - em desk está funcionando
    setSelected(index)
    console.log("selected: ", selected)
    selected != -1 ? chooseCity(selected) : false
    hideSearch()
  }

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
              key={suggestion}
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
    <div className={`${styles.wrapper} ${isOpen ? "" : styles.hidden}`}>
      <input
        type="search"
        value={displayValue}
        onFocus={resetSelection}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.input}
        ref={inputRef}
      />
      <Suggestions />
    </div>
  )
}

export default AutoComplete
