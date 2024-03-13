console.log("Hello World");

const { createApp } = Vue

createApp({
  data() {
    return {
      // - Creo la mia lista di oggeti con text e done come proprietà
      newTodo: {
        text: "",
        done: false,
      },
      todos: [
        {
          text: "Turn on the washing machine",
          done: true,
        },
        {
          text: "Take the dog out",
          done: false,
        },
        {
          text: "Reply to Arthur's message on Slack",
          done: false,
        },
        {
          text: "Solve Giuliano's riddle",
          done: true,
        },
        {
          text: "Bring Fabio to the sun",
          done: false,
        }
      ]
    }
  },
  methods: {
    // Rimuovo la todo dall'array con splice
    removeTask(taskId) {
      //Verifico se funziona
      //console.log("Remove");
      //Verifco cosa ho prendendo This
      //console.log(this.todos[taskId]);// Ho l'oggetto che mi interessa
      //Lo rimuovo dal mio array
      this.todos.splice(taskId, 1)
    },

    // Aggiungo la todo all'array con push
    //This happens because the child component emits the same object reference each time
    //Non funziona con push(this.newTodo) perché su js l'oggetto figlio ha la stessa "reference" ogni volta
    //Per questo andrebbe a modificarmi ogni volta gli oggetti aggiunti 
    addTask() {
      //console.log(this.newTodo);
      //l'operatore spread passa i valori non per reference ma per value
      this.todos.push({...this.newTodo});
      //console.log(this.todos);
      this.newTodo.text=""
    },

    //Cambio il valore booleano dell'oggetto cliccato
    doneUndone(taskId) {
      //console.log("Cambia il booleano!");
      //console.log(this.todos[taskId].done);
      //Gli assegno il valore opposto
      this.todos[taskId].done=!this.todos[taskId].done;
    }

  }
}).mount('#app')