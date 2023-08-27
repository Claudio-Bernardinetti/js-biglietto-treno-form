/* Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.
MILESTONE 2:

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Consigli:
non usate bootstrap, fate a mano per ora meno cose dobbiamo gestire e meglio é.
per semplificarvi un pó la vita almeno per ora non usate il tag form per racchiudere gli input ma metteteli semplicemente in un div.  div>input e non form>input
Bonus (opzionale):
Prova a racchiudere gli input ed il bottone in un tag form e prova a far funzionare il form evitando che la pagina si refreshi quando il form viene inviato cliccando su genera.
Questo richiederá un minimo di ricerca per capire come usare il parametro e dentro la funzione anonima dell'event listener. function(e){ console.log(e) } */


document.querySelector('.genera').addEventListener('click', ()=> {

    // Chiedere a il nome e cogniome del viaggiatore.

    const userNameSurnameElement = document.querySelector('.userNameSurname').value;
    console.log(userNameSurnameElement);

    // Chiedere all'utente il numero di chilometri

    const userKmElement = document.querySelector('.userKm').value;
    console.log(userKmElement);            

    // Calcolare il prezzo totale del viaggio, Il prezzo del biglietto è definito in base ai km (0.21 € al km)

    const calcTicketPrice = userKmElement * 0.21;
    
    // Area Variabili 
    const userAge = document.querySelector('.userAge').value;
    const col_name_element = document.querySelector('.col_name');
    const col_discount_element = document.querySelector('.col_discount');
    const col_carriage_element = document.querySelector('.col_carriage');
    const col_code_element = document.querySelector('.col_code');
    const col_price_element = document.querySelector('.col_price');
    let calcTicketDiscount;

    // Chiedere all'utente l'età del passeggero.
    // Sconto del 20% per i minorenni - Sconto del 40% per gli over 65.

    if (userAge === 'minorenne') {
        calcTicketDiscount = calcTicketPrice - calcTicketPrice * .20;
        console.log(`Il costo del tuo biglietto e' di € ${calcTicketDiscount.toFixed(2)}`);
        col_discount_element.innerHTML = `Sconto under 18 del 20%`;
        col_price_element.innerHTML = `${calcTicketDiscount.toFixed(2)} €`;

    } else if(userAge == 'over_65') {
        calcTicketDiscount = calcTicketPrice - calcTicketPrice * .40;
        console.log(`Il costo del tuo biglietto e' di € ${calcTicketDiscount.toFixed(2)}`);
        col_discount_element.innerHTML = `Sconto over 65 del 40%`;
        col_price_element.innerHTML = `${calcTicketDiscount.toFixed(2)} €`;

    } else {
        console.log(`Il costo del tuo biglietto e' di € ${calcTicketPrice.toFixed(2)}`);
        col_discount_element.innerHTML = `Biglietto Standard`;
        col_price_element.innerHTML = `${calcTicketPrice.toFixed(2)} €`;
    }


    // L'output finali.
    
    col_name_element.innerHTML = `${userNameSurnameElement}`;
    col_carriage_element.innerHTML = `${Math.floor(Math.random() * 11) + 1}`;
    col_code_element.innerHTML = `${Math.floor(Math.random() * 10000) + 1000}`;
    

})

// Bottone annulla elimina tutte le voci dagli input e innerText.

document.querySelector('.annulla').addEventListener('click', ()=> {

    userNameSurnameElement = document.querySelector('.userNameSurname').value = '';

    userKmElement = document.querySelector('.userKm ').value = '';

    userAge = document.querySelector('.userAge').value = 'adulto'; 

    col_name_element = document.querySelector('.col_name').innerText = '';

    col_discount_element = document.querySelector('.col_discount').innerText = '';

    col_carriage_element = document.querySelector('.col_carriage').innerText = '';

    col_code_element = document.querySelector('.col_code').innerText = '';

    col_price_element = document.querySelector('.col_price').innerText = '';  
     
})

