// Calcular precios

const sistemasStreaming = {
    'Amazon Video': 99,
    'Apple TV+': 69,
    'Blim': 109,
    'Claro Video': 99,
    'DAZN': 45,
    'Disney': 141,
    'Fox Premium': 139,
    'HBO Go': 149,
    'Netflix Basic': 139,
    'Netflix Standar': 196,
    'Netflix Premium': 266,
};

const costoDelBoleto = 56;


function calcularCostoTotalParaElCine() {
    let numeroDePersonasViendoPeliculasAlMes = document.getElementById("numeroPersonas").value;
    if (!numeroDePersonasViendoPeliculasAlMes) {
        numeroDePersonasViendoPeliculasAlMes = 2;
    };

    let peliculasAlMes = document.getElementById("numeroPeliculas").value;
    if (!peliculasAlMes) {
        peliculasAlMes = 5;
    };

    let cambioPrecioDelBoleto = document.getElementById("nuevoPrecioBoleto").value;
    if (!cambioPrecioDelBoleto) {
        cambioPrecioDelBoleto = 75;
    };

    var costoTotalParaElCine = numeroDePersonasViendoPeliculasAlMes * peliculasAlMes * costoDelBoleto;
    
    if (cambioPrecioDelBoleto != "") {
        costoTotalParaElCine = parseInt(numeroDePersonasViendoPeliculasAlMes) * parseInt(peliculasAlMes) * parseInt(cambioPrecioDelBoleto);
    };
    //console.log(numeroDePersonasViendoPeliculasAlMes, peliculasAlMes, costoDelBoleto);
    //console.log('Costo total al mes: ' + costoTotalParaElCine);
    return costoTotalParaElCine;
};


function calcularCostoTotalDeStreaming() {
    const checkBoxAmazonVideo = document.getElementById("AmazonVideo").checked ? 1 : 0;
    const checkBoxAppleTV = document.getElementById("AppleTV+").checked ? 1 : 0;
    const checkBoxBlim = document.getElementById("Blim").checked ? 1 : 0;
    const checkBoxClaroVideo = document.getElementById("ClaroVideo").checked ? 1 : 0;
    const checkBoxDazn = document.getElementById("DAZN").checked ? 1 : 0;
    const checkBoxDisney = document.getElementById("Disney").checked ? 1 : 0;
    const checkBoxFoxPremiun = document.getElementById("FoxPremium").checked ? 1 : 0;
    const checkBoxHboGo = document.getElementById("HBOGo").checked ? 1 : 0;
    const checkBoxNetflix = document.getElementById("Netflix").checked ? 1 : 0;

    let netflixPrice = 0;

    const netflixPlanSelected = document.getElementById("netflixPlan").value;
    if (checkBoxNetflix) {
        netflixPrice = sistemasStreaming[netflixPlanSelected];
    };
    //console.log('nuevo precio de N:' + netflixPrice);

    //console.log(checkBoxAmazonVideo, checkBoxAppleTV, checkBoxBlim, checkBoxClaroVideo, checkBoxDazn, checkBoxDisney, checkBoxFoxPremiun, checkBoxHboGo, checkBoxNetflix);

    //console.log(checkBoxAmazonVideo * sistemasStreaming[document.getElementById("AmazonVideo").value]);
    //console.log(checkBoxAppleTV * sistemasStreaming[document.getElementById("AppleTV+").value]);

    const costoTotal = (
        (checkBoxAmazonVideo * sistemasStreaming[document.getElementById("AmazonVideo").value]) +
        (checkBoxAppleTV * sistemasStreaming[document.getElementById("AppleTV+").value]) +
        (checkBoxBlim * sistemasStreaming[document.getElementById("Blim").value]) +
        (checkBoxClaroVideo * sistemasStreaming[document.getElementById("ClaroVideo").value]) +
        (checkBoxDazn * sistemasStreaming[document.getElementById("DAZN").value]) +
        (checkBoxDisney * sistemasStreaming[document.getElementById("Disney").value]) +
        (checkBoxFoxPremiun * sistemasStreaming[document.getElementById("FoxPremium").value]) +
        (checkBoxHboGo * sistemasStreaming[document.getElementById("HBOGo").value]) +
        (checkBoxNetflix * netflixPrice)
        //  .valueAsNumber
    );

    //console.log('Costo total es servisios de Streamimng: '+ costoTotal);

    return costoTotal;
};


const onclickCalcularDiferencia = () => {
    const costoDelCine = calcularCostoTotalParaElCine();
    const costoDelStreaming = calcularCostoTotalDeStreaming();
    const restultado = document.getElementById("resultado");

    console.log(costoDelCine , costoDelStreaming);

    if (costoDelStreaming - 10 < costoDelCine + 10) {
        restultado.innerText = `Continue using your subscriptions, it's cheaper than going to the movies. Cost of subscriptions: $ ${costoDelStreaming}.00, cost of cinema: $ ${costoDelCine}.00`;
    } else if (costoDelStreaming + 10 > costoDelCine - 10 ) {
        restultado.innerText = `You should cancel so many subscriptions, and better go to the movies, you'll save a few bucks. Cost of subscriptions: $ ${costoDelStreaming}.00, cost of cinema: $ ${costoDelCine}.00`;
    } else {
        restultado.innerText = `You love watching movies so much that you are taking full advantage of the 2 options, Cost of subscriptions: $ ${costoDelStreaming}.00, cost of cinema: $ ${costoDelCine}.00`;
    };
};

/*
const inputCuantity = document.getElementById
let ticketAmount;
*/
/*
inputCuantity.addEventListener('change', function (params) {
    ticketAmount = inputCuantity.value;
});
*/
/*
form.addEventListener('change', function (params) {
    let ticketAmount;
    
    const ticketPrice = 2.15;
    let subcriptionPrice = 0;
    
    ticketAmount = inputCuantity.value;

    if (Netflix.checked){
        subcriptionPrice += 4.25;
    }
    if (hbo.checked){
        subcriptionPrice += 2.75;
    }
    if (disney.checked){
        subcriptionPrice += 6.99;
    }

    const ticketFinalPrice = ticketPrice * 
})
*/