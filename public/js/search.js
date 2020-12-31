function searchResult(data) {
    if (data == "false") {
        let conteudo = document.getElementById("conteudo");
        conteudo.innerHTML = "";
        let tituloprev = document.createElement("label");
        tituloprev.setAttribute("class", "tituloprev");
        tituloprev.innerHTML = "Nenhum registro para " + $('#cidade').val() + "!";
        conteudo.appendChild(tituloprev);
    }

    else {

        var prevs = data;
        let conteudo = document.getElementById("conteudo");
        conteudo.innerHTML = "";
        let tituloprev = document.createElement("label");
        tituloprev.setAttribute("class", "tituloprev");
        tituloprev.innerHTML = "Previsão para " + data[0].name + " - " + data[0].state;
        conteudo.appendChild(tituloprev);

        for (var i = 1; i < data.length; i++) {

            let previsoes = document.createElement("div");
            previsoes.setAttribute("class", "previsoes");

            let dateprev = document.createElement("label");
            dateprev.setAttribute("class", "data");
            dateprev.innerHTML = data[i].date;

            previsoes.appendChild(dateprev);

            let prevcoment = document.createElement("label");
            prevcoment.setAttribute("class", "prevcoment");
            prevcoment.innerHTML = data[i].text;

            previsoes.appendChild(prevcoment);

            let dados = document.createElement("div");
            dados.setAttribute("class", "dados");

            let left = document.createElement("div");
            left.setAttribute("class", "left");

            let maxi = document.createElement("div");
            maxi.setAttribute("class", "maxi");

            let imgmax = document.createElement("span");
            imgmax.setAttribute("class", "imgmax");

            maxi.appendChild(imgmax);

            let prevlabelmax = document.createElement("label");
            prevlabelmax.setAttribute("class", "prevlabels blue");
            prevlabelmax.innerHTML = data[i].temperature.max + "°C";

            maxi.appendChild(prevlabelmax);

            let precip = document.createElement("div");
            precip.setAttribute("class", "precip");

            let imgprecip = document.createElement("span");
            imgprecip.setAttribute("class", "imgprecip");

            precip.appendChild(imgprecip);

            let prevlabelprecip = document.createElement("label");
            prevlabelprecip.setAttribute("class", "prevlabels");
            prevlabelprecip.innerHTML = data[i].rain.precipitation + "mm";

            precip.appendChild(prevlabelprecip);

            left.appendChild(maxi);
            left.appendChild(precip);

            /////////

            let right = document.createElement("div");
            right.setAttribute("class", "right");

            let mini = document.createElement("div");
            mini.setAttribute("class", "mini");

            let imgmin = document.createElement("span");
            imgmin.setAttribute("class", "imgmin");

            mini.appendChild(imgmin);

            let prevlabelmin = document.createElement("label");
            prevlabelmin.setAttribute("class", "prevlabels red");
            prevlabelmin.innerHTML = data[i].temperature.min + "°C";

            mini.appendChild(prevlabelmin);

            let proba = document.createElement("div");
            proba.setAttribute("class", "proba");

            let imgproba = document.createElement("span");
            imgproba.setAttribute("class", "imgproba");

            proba.appendChild(imgproba);

            let prevlabelproba = document.createElement("label");
            prevlabelproba.setAttribute("class", "prevlabels");
            prevlabelproba.innerHTML = data[i].rain.probability + "%";

            proba.appendChild(prevlabelproba);

            right.appendChild(mini);
            right.appendChild(proba);

            dados.appendChild(left);
            dados.appendChild(right);

            previsoes.appendChild(dados);

            conteudo.appendChild(previsoes);

        }
    }
}

function limpar() {
    $("#conteudo").css("display", "none");
    $("#gif").css("display", "block");
}

function mostrar() {
    if ($("#conteudo").html()) {
        $("#conteudo").css("display", "none");
        $("#gif").css("display", "block");
    } else {
        $("#conteudo").css("display", "block");
        $("#gif").css("display", "none");
    }
}