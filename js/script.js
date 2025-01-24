console.log('lo script funziona');

// l'api ci ritorna dei dati
/*
è un array di oggetti contenente queste proprietà:
id, titolo, data, url 
*/

// compito principale
// il mio scopo è stamparli a schermo insieme al codice html

// compito secondario
// al click dell'immagine deve apparirmi la stessa immagine ingrandita


// Dati del DOM indipendenti
    const boxCards = document.getElementById('box-cards');
    
// endpoint 
    const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';


// chiamata all'endpoint
axios.get(endpoint)
// risposta dall'endpoint
 .then((response) => {
    // mi salvo il dato di risposta
    const data = response.data; //array di oggetti
    // console.log(data);

    // faccio partire il ciclo per ricavarmi i singoli oggetti
    data.forEach(element => {
        // console.log(element);

        // mi estrapolo le proprietà degli oggetti
        const {id, title, date, url} = element;
        console.log(id, title, date, url);

        // inserisco i dati nel codice html
        boxCards.innerHTML += 
        `
        <!-- column card --> 
        <div class="col-12 col-md-6 col-lg-4">
            <!-- card -->
            <div class="card my-4">
                <!-- image -->
                <img src="${url}"  class="card-img-top" alt="...">
                <!-- text -->
                <div class="card-body pt-1">
                    <!-- date -->
                    <h5 class="card-date m-0">${date}</h5>
                    <!-- title -->
                    <p class="card-title m-0">${title}</p>
                </div>
                <!-- effect pin card on the wall -->
                <img class="pin-card" src="./img/pin.svg" alt="">
            </div>
        </div>
        `;
    });

// --- SECONDA PARTE
// dati del DOM dipendenti alla chiamata
const boxZoom = document.getElementById('box-zoom');
const closeZoomBtn = document.getElementById('close-zoom-btn');
const card = document.querySelectorAll('.card');
console.log(boxZoom, closeZoomBtn, card);

// per ogni card
// al click
// apri il box zoom (eliminando d-none)
// fammi vedere la foto
// e se clicco chiudi (aggiungimi d-none)
// fammi vedere di nuovo la home 

    
})




