### Esercizio
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

1. Il prezzo del biglietto è definito in base ai km (0.21 € al km);
2. Va applicato uno sconto del 20% per i minorenni;
3. Va applicato uno sconto del 40% per gli over 65;

L'output del prezzo finale va messo in output in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

### Soluzione

#### Raccolta dati
1. Chiedere all'utente il numero di chilometri da percorrere, convertirlo in un numero intero e verificare sia maggiore di 0;
2. Chiedere all'utente l'età del passeggero, convertirla in un numero intero e verificare sia compreso tra 0 e 100;

#### Logica del programma
1. Calcolare il prezzo del biglietto moltiplicando i chilometri in input a 0.21;
2. Verificare l'età del passeggero:
SE è compresa tra 18 e 64
lasciare il prezzo del biglietto invariato
ALTRIMENTI SE è minore di 18
dividere il prezzo del biglietto per 100 e moltiplicare per 80
ALTRIMENTI SE è maggiore o uguale a 65
dividere il prezzo del biglietto per 100 e moltiplicare per 60;
3. Limitare le cifre decimali del prezzo del biglietto a due;
4. Preparare il messaggio che comunica il prezzo del biglietto concatenandolo al simbolo €;

#### Output
Stampa del messaggio comunicante il prezzo del biglietto.