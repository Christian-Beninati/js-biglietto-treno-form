# Project Outline

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-il prezzo del biglietto è definito in base ai km (0.21 € al km)

-va applicato uno sconto del 20% per i minorenni

-va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form (non tag <form>) in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

<br>
<br>

- Recuperare tutti gli elementi dal DOM
- Nascondere il biglietto (per farlo comparire quando l'utente ha inserito tutti i dati correttamente)
- Aggiungere un Event List per il click sul bottone "Genera"
- Ottenere i valori dagli input (verifica in console)
- Salvarli in delle variabili
- Fare una validazzione
- Calcolare il prezzo del biglietto in base ai km
- Salvarlo in una variabile
- Calcola il prezzo del biglietto prima dello sconto
- Salvarlo in una variabile
- Applica gli sconti in base all'età
  - Se ha < 18 anni sconto sul prezzo del biglietto del 20% (Biglieo minorenne)
  - Se invece Se ha > 65 anni sconto sul prezzo del biglietto del 40% (Biglieto over 65)
  - Altrimenti (Biglietto Sandard)
- Arrotonda il prezzo a due decimali.
- Stampare il prezzo finale in console
- Generare un numero random per il biglietto e per la carrozza
- Inserire i risultati dell'elementi del DOM (recuperato in precedenza)
- Mostrare il biglietto (precedentementte nascosto)
- Aggiungere un Event List per il click sul bottone "Annulla"
