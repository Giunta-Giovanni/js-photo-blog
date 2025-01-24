console.log('lo script funziona');

// l'api ci ritorna dei dati
/*
è un array di oggetti contenente queste proprietà:
id, titolo, data, url 
*/

// compito principale
// il mio scopo è stamparli a schermo insieme al codice html

// --- PRIMA PARTE
// COSA MI SERVE
// Dati del DOM
    const boxCards = document.getElementById('box-cards'); // box cards

// endpoint 
    const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

// chiamata all'endpoint
axios.get(endpoint)
// risposta dall'endpoint
 .then((response) => {
    // mi salvo il dato di risposta
    const data = response.data; //array di oggetti
    // console.log(data);

    
    
})



// compito secondario
// al click dell'immagine deve apparirmi la stessa immagine ingrandita

// --- SECONDA PARTE
// COSA MI SERVE
// dati del DOM da gestire--> contenitore, pulsante
// al click dell'immagine
// mostra la foto 
// al click del pulsante chiudi, riporta in d-none 



