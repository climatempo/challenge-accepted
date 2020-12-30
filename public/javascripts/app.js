var app = new Vue({
    el: "#app",
    data: {
        locale: undefined,
        forecasts: [],
    },
    methods: {
        loadForecasts: () => {
            axios.get(`forecast/${app.locale.id}`)
                    .then((res) => {
                        let forecasts = res.data;
                        if (forecasts.length > 0) {
                            app.forecasts = forecasts[0].weather;
                            app.forecasts.forEach((f) => f.date = moment(f.date));
                        }
                    })
                    .catch((error) => {
                        alert("Erro ao recuperar dados da cidade")
                    });
        }
    }
});

$('.basicAutoComplete').autoComplete({
    minLength: 2,
    formatResult: (item) => {
        return {
            value: item.id,
            text: `${item.name} - ${item.state}`
        }
    }
});

$('.basicAutoComplete').on('autocomplete.select', (evt, item) => {
    app.locale = item;
    app.loadForecasts();
});