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
    
    
})



// compito secondario
// al click dell'immagine deve apparirmi la stessa immagine ingrandita

// --- SECONDA PARTE
// COSA MI SERVE
// dati del DOM da gestire--> contenitore, pulsante
// al click dell'immagine
// mostra la foto 
// al click del pulsante chiudi, riporta in d-none 



