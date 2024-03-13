# Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
 text, una stringa che indica il testo del todo
 done, un booleano (true/false) che indica se il todo è stato fatto oppure no

1) MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

2) MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

3) MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

4) Bonus:
- 41) - oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
- 42) - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

## Steps
- Collego i vari file, incluso Vue
- Creo la mia lista di oggeti con text e done come proprietà
- Milestone 1:
-- Stampo nel mio html la mia lista di oggetti con v-for
-- SE oggetto.done==true faccio sì che sia sbarratta
- Milestone 2:
-- Inserisco accanto a ogni testo un'icona
-- Verifico se ho tra le mani l'oggetto giusto
-- Faccio si che @onclick la task si cancelli
- Milestone 3:
-- Aggiungo al mio html una finestra di input e un bottone
-- Al @click sul bottone il valore in input viene aggiunto assegnato a una variabile
-- Aggiungo la variabile ai miei oggetti in lista
- Bonus 1
-- Aggiungo la key .enter al mio input 
- Bonus 2
-- Modifico il valore booleano del mio oggetto al click sul testo
-- Creo una funzione che ne inverte il valore 