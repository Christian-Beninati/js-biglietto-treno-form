// console.log('JS OK')

// Recuperare il placeholder dal DOM" 
const PriceTicketPlaceholder = document.getElementById("price-ticket");
console.log(PriceTicketPlaceholder);

// Chiedere all'utente il numero di chilometri da percorrere
const kilometres = parseInt(prompt("Inserisci il numero di chilometri da percorrere:"));

// Chiedere all'utente l'età 
const age = parseInt(prompt("Inserisci l'età del passeggero:"));

console.log('Questi sono i km da percorrere ', kilometres, typeof kilometres)
console.log('Questa è l\'età del passeggero', age, typeof age)

// ? VALIDAZZIONE
if (isNaN (kilometres) || isNaN (age) || kilometres < 1 || age < 1 ) {
  alert ('Mi dispiace, valori non validi. Inserire i chilometri da percorrere e l\'età del passeggero corretti ')
} else {

  
  // Calcola il prezzo del biglietto in base ai km
  let price = kilometres * 0.21;
  
  // Calcola il prezzo del biglietto prima dello sconto
  let priceBeforeDiscount = price;
  console.log(`Prezzo del biglieto prima dello sconto: ${priceBeforeDiscount} €`)
  
  
  // Applica gli sconti in base all'età
  
  // Sconto del 20% per i minorenni
  if (age < 18) {
    price -= price * 0.2;
    
    // Sconto del 40% per gli over 65
  } else if (age >= 65) {
    price -= price * 0.4;
  }
  
  // Arrotonda il prezzo a due decimali
  price = price.toFixed(2);
  
  // Stampa il prezzo finale in console
  console.log(`Prezzo del biglietto scontato : ${price} €`);
  
  
  // Inserire il risultato nell'elemento del DOM (info aggiuntive)
  PriceTicketPlaceholder.innerHTML = `
  <p>Chilometri da percorrere: ${kilometres}</p>
  <p>Età del passeggero: ${age}</p>
  <p>Prezzo del biglieto prima dello sconto: ${priceBeforeDiscount.toFixed(2)} €</p>
  <p>Prezzo del biglietto scontato : ${price} €</p>`;
}