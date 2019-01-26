const weather = new Vue({
	el: "#weather",
	data: {
		id: "",
		name: "",
		message: "",
		status: "",
		locale: {},
		weathers: []
	},
	methods: {
		getInputSearch: async function() {
            await axios
				.get( "http://localhost:5000/locales/" + this.name)
				.then(res => {
					if(res.status == 200 && res.data.length) {
						this.message = "Busca realizada com sucesso.";
						this.id = res.data[0].id;
					} else {
						this.message = "Cidade não localizada."
					}
				})
				.catch(err => {
					console.log(err);
					this.message = "Insira um valor válido."
				});
			this.name = "";

			if (this.id) {
				await axios
					.get( "http://localhost:5000/weather-forecasts/" + this.id)
					.then(res => {
						this.status = "Sucesso"
						this.weathers = res.data;
					})
					.catch(err => console.log(err));
			} else {
				this.status = "Sem previsões hoje"
			}
		}
	}
});
