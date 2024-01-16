let arr19 = [];
let arr7 = [];

function calculeazaPretFinal(scumpireType) {
    let pretInitial = parseFloat(document.getElementById("pret_initial_" + scumpireType).value);

    // Scumpire 1: 65%
    let scumpirePrima = 1.65;
    let pretDupaPrimaScumpire = pretInitial * scumpirePrima;

    // Scumpire 2: 19% sau 7%

    let scumpireDoua = scumpireType === '19' ? 1.19 : 1.07;
    let pretFinal = pretDupaPrimaScumpire * scumpireDoua;

    let rezultatDiv = document.getElementById("rezultat_" + scumpireType);
    let istoricList = document.getElementById("istoric-list_" + scumpireType);

    rezultatDiv.innerHTML = "Pretul final este: " + pretFinal.toFixed(3);

    // Adaugă în istoric cu inversarea ordinii
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode("Calcul " + (scumpireType === '19' ? arr19.length +1 : arr7.length +1) + ": " + pretFinal.toFixed(3)));

    istoricList.insertBefore(listItem, istoricList.firstChild);

    // Adaugă la istoric
    if (scumpireType === '19') {
        arr19.unshift(pretFinal.toFixed(3));
    } else if (scumpireType === '7') {
        arr7.unshift(pretFinal.toFixed(3));
    }
    
}

function stergeIstoric(scumpireType){
    // Șterge istoricul pentru tipul specificat
    let istoricList = document.getElementById("istoric-list_" + scumpireType);
    istoricList.innerHTML = "";

    // Resetare contor pentru tipul specificat
    if (scumpireType === '19') {
        arr19 = [];
    } else if (scumpireType === '7') {
        arr7 = [];
    }
}