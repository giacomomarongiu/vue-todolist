console.log("Hello World");



const { createApp } = Vue

createApp({
  data() {
    return {
      // - Creo la mia lista di oggeti con text e done come proprietà
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
    removeTask(taskId){
      //Verifico se funziona
      console.log("Remove");
      //Verifco cosa ho prendendo This
      console.log(this.todos[taskId]);// Ho l'oggetto che mi interessa
      //Lo rimuovo dal mio array
      this.todos.splice(taskId,1)
    }
  }
}).mount('#app')