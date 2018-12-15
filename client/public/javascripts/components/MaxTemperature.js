class MaxTemperature {

    constructor(temperature) {
        this.temperature = temperature;
        return this;
    }

    template() {
        return `<max-temperature class="max-temp cell-card"><i class="img-max image"></i>
            <p class="temperature-max temperature">${this.temperature}</p>
        </max-temperature>`;
    }
}