export default function debounce(cb, delay = 1000) {
  return (...args) => {
    setTimeout(() => {
      cb(...args), delay
    })
  }
}
