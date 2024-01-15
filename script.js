var counter_19 = 1;
var counter_7 = 1;

function calculeazaPretFinal(scumpireType) {
    var pretInitial = parseFloat(document.getElementById("pret_initial_" + scumpireType).value);

    // Scumpire 1: 65%
    var scumpirePrima = 0.65;
    var pretDupaPrimaScumpire = pretInitial * (1 + scumpirePrima);

    // Scumpire 2: 19% sau 7%
    var scumpireDoua = scumpireType === '19' ? 0.19 : 0.07;
    var pretFinal = pretDupaPrimaScumpire * (1 + scumpireDoua);

    var rezultatDiv = document.getElementById("rezultat_" + scumpireType);
    var istoricList = document.getElementById("istoric-list_" + scumpireType);

    rezultatDiv.innerHTML = "Pretul final este: " + pretFinal.toFixed(2);

    // Adaugă în istoric
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode("Calcul " + (scumpireType === '19' ? counter_19++ : counter_7++) + ": " + pretFinal.toFixed(2)));
    istoricList.appendChild(listItem);
}
