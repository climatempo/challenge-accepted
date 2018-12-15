class MinTemperature {

    constructor(temperature) {
        this.temperature = temperature;
        return this;
    }

    template() {
        return `<min-temperature class="min-temp cell-card"><i class="img-min image"></i>
            <p class="temperature-min temperature">${this.temperature}</p>
        </min-temperature>`;
    }
}