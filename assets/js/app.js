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
  }
}).mount('#app')