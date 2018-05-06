const api = "http://localhost:3000/api"

function findCity() {
    const city = document.getElementById("city").value
    let response = fetch(`${api}/locales/cities?city=${city}`)
        .then(res => res)
        .catch(err => console.error(err.message))

    if (response.status == 404) {
        return cityNotFound()
    }

    response
        .then(res => res.json())
        .then(json => getWeatherInfo(json))
        .catch(err => console.error(err.message))
}

function getWeatherInfo(json) {
    fetch(`${api}/weathers?city_id=${json.data.city.id}`)
        .then(res => res.json())
        .then(json => {
            let h3Element = document.createElement("h3")
            let location = document.createTextNode(
                `Previsão para ${json.data.city.locale.name} - ${
                    json.data.city.locale.state
                }`
            )

            h3Element.appendChild(location)
            document.getElementById("cards").appendChild(h3Element)

            // json.data.wheater.forEach(weather => {})
        })
        .catch(err => console.error(err.message))
}

function cityNotFound() {
    const warning = "Nenhuma informação encontrada"

    let pElement = document.createElement("p")
    let message = document.createTextNode(warning)
    pElement.appendChild(message)

    document.getElementById("cards").appendChild(pElement)
}
