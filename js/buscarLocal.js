function mostrarDadosLocalidade(localidade) {
  document.getElementById("cards-total").innerHTML="";
  console.log(localidade)
    if (localidade.length == 0) {
        document.getElementById("cards-total").innerHTML = "";

        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("cards-total").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "search.php?q=" + localidade, true);
        xmlhttp.send();
    }
}
