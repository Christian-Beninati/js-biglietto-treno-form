// console.log('JS OK')


// Recuperare gli elementi dal DOM" 
const kilometresInput = document.getElementById('kilometres-input');
const ageInput = document.getElementById('age-input');
const nameInput = document.getElementById('name-input');
const button = document.getElementById('calculate-button');
const cancelButton = document.getElementById('cancel-button');
const yourTicketElement = document.getElementById('your-ticket');
const resultElement = document.getElementById('result');
const offerDescriptionElement = document.getElementById('offer-description');
const passengerNameElement = document.getElementById('passenger-name');
const carriageNumberElement = document.getElementById('carriage-number');
const ticketNumberElement = document.getElementById('ticket-number');


// Nascondere il biglietto 
yourTicketElement.style.display = 'none';

// Aggiungi un Event listener per il click sul bottone "Genera"
button.addEventListener('click', function ()  {

  // Ottieni i valori dagli input
  const kilometres = parseInt(kilometresInput.value);
  const age = parseInt(ageInput.value);
  const name = nameInput.value.trim();

  console.log('Questi sono i km da percorrere ', kilometres, typeof kilometres)
  console.log('Questa è l\'età del passeggero', age, typeof age)
  console.log('Questo è il nome del passeggero', name, typeof name);
  
  // ? VALIDAZZIONE
  if (isNaN (kilometres) || isNaN (age) || !isNaN(name) || kilometres < 1 || age < 1 || name === '' ) {
    alert ('Mi dispiace, valori non validi. Inserire il nome del passeggero i chilometri da percorrere e l\'età del passeggero corretti. Grazie ')
  } else {
    
    // Calcola il prezzo del biglietto in base ai km
    let price = kilometres * 0.21;

    // Offerta (in base all'età)
    let offerDescription = '';
    
    // Calcola il prezzo del biglietto prima dello sconto
    let priceBeforeDiscount = price;
    console.log(`Prezzo del biglieto prima dello sconto: ${priceBeforeDiscount} €`)
    
    
    // Applica gli sconti in base all'età
    
    // Sconto del 20% per i minorenni 
    if (age < 18) {
      price -= price * 0.2;
      offerDescription = 'Offerta: Biglietto minorenne';
      
      // Sconto del 40% per gli over 65
    } else if (age >= 65) {
      price -= price * 0.4;
      offerDescription = 'Offerta: Biglietto over 65';

      // Maggiorenni
    } else {
      offerDescription = 'Biglietto standard';
    }
    
    // Arrotonda il prezzo a due decimali
    price = price.toFixed(2);

    // Stampa il prezzo finale in console
    console.log(`Prezzo del biglietto scontato : ${price} €`)

    // Genera un numero casuale da 1 a 10 per il numero di carrozza
    const carriageNumber = Math.floor(Math.random() * 50) + 1; 
    // Genera un numero casuale da 1 a 100 per il numero di biglietto
    const ticketNumber = Math.floor(Math.random() * 500) + 1; 

    // Stampa numeri random in console (per carrozza e biglietto)
    console.log(`Numero carrozza: ${carriageNumber}`);
    console.log(`Codice CP ${ticketNumber}`);

    // inserire dell'elemeno del DOM (numero random carrozza e biglietto)
    carriageNumberElement.innerText = `Numero carrozza: ${carriageNumber}`;
    ticketNumberElement.innerText = `Codice CP: ${ticketNumber}`;

    // Inserire il risultato nell'elemento del DOM (Desscrizione offerta, in base all'età)
    offerDescriptionElement.innerText = offerDescription;
    console.log(offerDescription );
    
    // inserire il risultato nell'elemento del DOM (Costo biglietto)
    resultElement.innerText = `Costo biglietto: ${price} €`;

    // inserire dell'elemeno del DOM (Nome uente)
    passengerNameElement.innerText = `Nome Passeggero: ${name}`;
    

    // Mostrare il biglietto
    yourTicketElement.style.display = 'block';
  }
});

// Aggiungi un Event listener per il click sul bottone "Annulla"
 cancelButton.addEventListener('click', function () {
// Resettare i valori di input
kilometresInput.value = '';
ageInput.value = '';
nameInput.value = '';

// Nascondi biglietto
yourTicketElement.style.display = 'none';
})