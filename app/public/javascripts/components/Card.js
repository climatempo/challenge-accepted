class Card {

    template() {
        return `<card class="card col-6">
            <div class="card-content">
                <div class="date-card">${this.date}</div>
                <div class="message-card">${this.text}</div>
                <div class="infos-card">
                    <div class="block-card">
                        ${this.max}
                        ${this.min}
                    </div>
                    <div class="block-card">
                        ${this.precipitation}
                        ${this.probability}
                    </div>
                </div>
            </div>
        </card>`;
    }

    build() {
        const {
            date,
            temperature: {
                max,
                min
            },
            rain: {
                precipitation,
                probability
            }
        } = this;

        this.date = new Date(date).toLocaleDateString();

        const objmax = new MaxTemperature(max);
        this.max = objmax.template();

        const objmin = new MinTemperature(min);
        this.min = objmin.template();

        const objprecipitation = new Precipitation(precipitation);
        this.precipitation = objprecipitation.template();

        const objprobability = new Probability(probability);
        this.probability = objprobability.template();

        return this;
    }
}