const App = (() => {
    function App() {}

    App.search = (value, div) => {

        $.get('/weathers/' + encodeURI(value), data => {
            $(div).html('');

            if (!data.error) {
                const {
                    data: {
                        weather
                    }
                } = data;

                let html = '';

                weather.forEach((el, i) => {
                    let card = new Card();
                    card = Object.assign(card, el);
                    html += (card.build().template());
                });


                $(div).append(html);
            }
        }).fail((data) => alert(data.responseJSON.error));
    };

    App.addEvent = (() => {
        $('#input-search').focus();
        $('#btn-submit-search').click(() => App.search($('#input-search').val(), $('#page-content')));
        $('#input-search').keyup((e) => {
            if (e.keyCode === 13)
                App.search($('#input-search').val(), $('#page-content'));
        });
    })();

    return App;
})();