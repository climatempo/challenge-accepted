import { useEffect, useState } from "react"

function useDebounce(value, delay = 350) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  console.log("debouncedValue: ", debouncedValue)
  return debouncedValue
}

export default useDebounce
