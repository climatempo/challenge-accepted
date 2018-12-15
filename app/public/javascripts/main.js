$(function () {
    //$('#input-search').focus(); // focus inicial no input de pesquisa

    // Funcao submit pesquisa
    function search() {
        var valueResearch = $('#input-search').val();

        $.get('/weathers/' + encodeURI(valueResearch), data => {
            $('#page-content').html('');
            
            if (!data.error) {
                const { data: { weather } } = data;

                let html = '';

                weather.forEach((el, i) => {
                    let card = new Card();
                    card = Object.assign(card, el);
                    html += (card.build().template());
                });


                $('#page-content').append(html);
            }
        }).fail((er) => {
            alert(er.responseJSON.error);
        });
    }

    // Submit com click no botao ou enter no input
    $('#btn-submit-search').click(function (e) {
        search();
    });
    $('#input-search').keyup(function (e) {
        if (e.keyCode === 13) {
            search();
        }
    });

    $('.description a').click(function (e) {
        e.preventDefault();

        $('#input-search').val($(this).attr('data-city'));
        $('#btn-submit-search').click();
    })
});