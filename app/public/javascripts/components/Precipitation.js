class Precipitation {

    constructor(precipitation) {
        this.precipitation = precipitation;
        return this;
    }

    template() {
        return `<precipitation class="precipitation cell-card"><i class="img-precipitation image"></i>
            <p class="text-precipitation temperature">${this.precipitation}</p>
        </precipitation>`;
    }
}