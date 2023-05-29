// console.log('JS OK')


// Recuperare gli elementi dal DOM" 
const kilometresInput = document.getElementById('kilometres-input');
const ageInput = document.getElementById('age-input');
const button = document.getElementById('calculate-button');

// Aggiungi un Event listener per il click sul bottone
button.addEventListener('click', function ()  {

  // Ottieni i valori dagli input
  const kilometres = parseInt(kilometresInput.value);
  const age = parseInt(ageInput.value);

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
  }
});