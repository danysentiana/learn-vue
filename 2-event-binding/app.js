const app = Vue.createApp({
  data() {
    return {
      userInput1: "",
      userInput2: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is Alert!");
    },
    userInputMethod(event) {
      this.userInput1 = event.target.value;
    },
    userInputMethod2() {
      this.userInput2 = this.userInput1;
    },
  },
});

app.mount("#assignment");
