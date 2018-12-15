class Probability {

    constructor(probability) {
        this.probability = probability;
        return this;
    }

    template() {
        return `<probability class="probability cell-card"><i class="img-probability image"></i>
            <p class="text-probability temperature">${this.probability}</p>
        </probability>`;
    }
}