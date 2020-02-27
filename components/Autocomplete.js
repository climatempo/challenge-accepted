import Autocomplete from 'vuejs-auto-complete'

let controller = null
let signal = null

// Precisei reescrever alguns métodos para resolver alguns bugs desse componente

Autocomplete.methods.request = function (url) {
  if (controller) {
    controller.abort()
  }
  controller = new AbortController()
  signal = controller.signal

  const promise = fetch(url, {
    method: this.method,
    credentials: this.getCredentials(),
    headers: this.getHeaders(),
    signal
  })
  return promise
    .then((response) => {
      if (response.ok) {
        this.error = null
        return response.json()
      }
      if (response.status === 404) {
        throw new Error('Resultado não encontrado.')
      } else {
        throw new Error('Resultado não encontrado.')
      }
    })
    .then((response) => {
      this.results = this.setResults(response)
      this.emitRequestResultEvent()
      this.loading = false
    })
    .catch((error) => {
      if (error.name !== 'AbortError') {
        this.error = error.message
        this.loading = false
      }
    })
}

Autocomplete.methods.select = function (obj) {
  if (!obj) {
    return
  }
  this.value = (this.resultsValue && obj[this.resultsValue]) ? obj[this.resultsValue] : obj.id
  this.display = this.formatDisplay(obj).replace('<b>', '').replace('</b>', '')
  this.selectedDisplay = this.display
  this.$emit('selected', {
    value: this.value,
    display: this.display,
    selectedObject: obj
  })
  this.$emit('input', this.value)
  this.close()
}

Autocomplete.methods.search = function (e) {
  e.preventDefault()
  if (e.type === 'input') {
    if (!this.display) {
      this.clear()
    }
    switch (true) {
      case typeof this.source === 'string':
        // No resource search with no input
        if (!this.display || this.display.length < 1) {
          this.$emit('clear')
          return
        }
        return this.resourceSearch(this.source + this.display)
      case typeof this.source === 'function':
        // No resource search with no input
        if (!this.display || this.display.length < 1) {
          return
        }
        return this.resourceSearch(this.source(this.display))
      case Array.isArray(this.source):
        return this.arrayLikeSearch()
      default:
        throw new TypeError('Type not defined')
    }
  }
}

Autocomplete.methods.blur = function () {
  if (controller) {
    controller.abort()
    this.loading = false
  }
  this.isFocussed = false
}

Autocomplete.methods.clear = function () {
  this.display = null
  this.value = null
  this.results = null
  this.error = null
  this.$emit('clear')
}

Autocomplete.methods.onlyClear = function () {
  this.display = null
  this.value = null
  this.results = null
  this.error = null
}

export default Autocomplete
