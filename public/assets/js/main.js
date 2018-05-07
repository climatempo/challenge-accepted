const api = "http://localhost:3000/api"

function findCity() {
    clearMain()
    const city = document.getElementById("city").value
    if (city.length == 0) {
        return sendWarning("Informe uma cidade")
    }

    fetch(`${api}/locales/cities?city=${city}`)
        .then(res => {
            if (res.status == 404) {
                return sendWarning("Cidade não encontrada")
            }
            res
                .json()
                .then(json => getWeatherInfo(json))
                .catch(err => console.error(err.message))
        })
        .catch(err => console.error(err.message))
}

function getWeatherInfo(json) {
    fetch(`${api}/weathers?city_id=${json.data.city.id}`)
        .then(res => res.json())
        .then(json => {
            const icons = [
                "/public/assets/icons/upload.png",
                "/public/assets/icons/download.png",
                "/public/assets/icons/raindrop-close-up.png",
                "/public/assets/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png"
            ]

            let cityName = document.createElement("div")
            let location = document.createTextNode(
                `Previsão para ${json.data.city.locale.name} - ${
                    json.data.city.locale.state
                }`
            )
            cityName.className = "weather-location"
            cityName.appendChild(location)

            document.getElementById("cards-section").appendChild(cityName)

            json.data.city.weather.forEach(weather => {
                let card = document.createElement("div")
                card.className = "card"

                let dateSpan = document.createElement("span")
                dateSpan.id = "date"
                dateSpan.appendChild(document.createTextNode(weather.date))

                let descriptionSpan = document.createElement("span")
                descriptionSpan.id = "description"

                let descriptionP = document.createElement("p")
                descriptionP.appendChild(document.createTextNode(weather.text))
                descriptionSpan.appendChild(descriptionP)

                let subCard = document.createElement("div")
                subCard.className = "subcard"

                const weatherInfos = [
                    weather.temperature.max + "ºC",
                    weather.temperature.min + "ºC",
                    weather.rain.precipitation + "mm",
                    weather.rain.probability + "%"
                ]

                const weatherInfoColors = ["red", "blue", "black", "black"]

                for (let i = 0; i < 4; i++) {
                    let item = document.createElement("div")
                    item.className = `item ${weatherInfoColors[i]}`

                    let icon = document.createElement("img")
                    icon.src = icons[i]

                    let itemSpan = document.createElement("span")
                    itemSpan.appendChild(
                        document.createTextNode(weatherInfos[i])
                    )

                    item.appendChild(icon)
                    item.appendChild(itemSpan)
                    subCard.appendChild(item)
                }

                card.appendChild(dateSpan)
                card.appendChild(descriptionSpan)
                card.appendChild(subCard)

                document.getElementById("cards-section").appendChild(card)
            })
        })
        .catch(err => console.error(err.message))
}

function sendWarning(warning) {
    let pElement = document.createElement("p")
    pElement.className = "weather-location warning"
    let message = document.createTextNode(warning)
    pElement.appendChild(message)

    document.getElementById("cards-section").appendChild(pElement)
}

function clearMain() {
    console.log((document.getElementById("cards-section").innerHTML = ""))
}
