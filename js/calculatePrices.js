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
    'Netflix': 129,
};

const costoDelBoleto = 56;


function calcularCostoTotalParaElCine() {
    const numeroDePersonasViendoPeliculasAlMes = document.getElementById("numeroPersonas").value;
    const peliculasAlMes = document.getElementById("numeroPeliculas").value;
    const cambioPrecioDelBoleto = document.getElementById("nuevoPrecioBoleto").value;
    

    var costoTotalParaElCine = numeroDePersonasViendoPeliculasAlMes * peliculasAlMes * costoDelBoleto;
    
    if (cambioPrecioDelBoleto != "") {
        costoTotalParaElCine = parseInt(numeroDePersonasViendoPeliculasAlMes) * parseInt(peliculasAlMes) * parseInt(cambioPrecioDelBoleto);
    } 
    //console.log(numeroDePersonasViendoPeliculasAlMes, peliculasAlMes, costoDelBoleto);
    //console.log('Costo total al mes: ' + costoTotalParaElCine);
    return costoTotalParaElCine;
}


function calcularCostoTotalDeStreaming() {
    const checkBoxAmazonVideo = document.getElementById("AmazonVideo").checked;
    const checkBoxAppleTV  = document.getElementById("AppleTV+").checked;
    const checkBoxBlim = document.getElementById("Blim").checked;
    const checkBoxClaroVideo = document.getElementById("ClaroVideo").checked;
    const checkBoxDazn = document.getElementById("DAZN").checked;
    const checkBoxDisney = document.getElementById("Disney").checked;
    const checkBoxFoxPremiun = document.getElementById("FoxPremium").checked;
    const checkBoxHboGo = document.getElementById("HBOGo").checked;
    const checkBoxNetflix = document.getElementById("Netflix").checked;

    console.log(checkBoxAmazonVideo, checkBoxAppleTV, checkBoxBlim, checkBoxClaroVideo, checkBoxDazn, checkBoxDisney, checkBoxFoxPremiun, checkBoxHboGo, checkBoxNetflix);

    console.log(checkBoxAmazonVideo * sistemasStreaming[document.getElementById("AmazonVideo").value]);
    console.log(checkBoxAppleTV * sistemasStreaming[document.getElementById("AppleTV+").value]);

    const costoTotal = (
        (checkBoxAmazonVideo * sistemasStreaming[document.getElementById("AmazonVideo").value]) +
        (checkBoxAppleTV * sistemasStreaming[document.getElementById("AppleTV+").value]) +
        (checkBoxBlim * sistemasStreaming[document.getElementById("Blim").value]) +
        (checkBoxClaroVideo * sistemasStreaming[document.getElementById("ClaroVideo").value]) +
        (checkBoxDazn * sistemasStreaming[document.getElementById("DAZN").value]) +
        (checkBoxDisney * sistemasStreaming[document.getElementById("Disney").value]) +
        (checkBoxFoxPremiun * sistemasStreaming[document.getElementById("FoxPremium").value]) +
        (checkBoxHboGo * sistemasStreaming[document.getElementById("HBOGo").value]) +
        (checkBoxNetflix * sistemasStreaming[document.getElementById("Netflix").value])
    );

    console.log('Costo total es servisios de Streamimng: '+ costoTotal);

    return costoTotal;
}

const onclickCalcularDiferencia = () => {
    const costoDelCine = calcularCostoTotalParaElCine();
    const costoDelStreaming = calcularCostoTotalDeStreaming();
    const restultado = document.getElementById("resultado");

    console.log(costoDelCine, costoDelStreaming);

    if (costoDelStreaming < costoDelCine) {
        restultado.innerText = 'Sigue con tus suscripciones, te es más barato que ir al cine.';
    } else if (costoDelStreaming > costoDelCine ) {
        restultado.innerText = 'Deberías de cancelar tantas suscripciones, y mejor ir al cine, te ahorrarías una lana.';
    } else {
        restultado.innerText = 'Te encanta ver películas tanto que estas aprovechando las 2 opciones al máximo';
    }
}