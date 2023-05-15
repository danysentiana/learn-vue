const app = Vue.createApp({
  data() {
    return {
      name: "John Doe",
      age: 20,
      imageLink: "google-play.png",
    };
  },
  methods: {
    agePlus5() {
      return this.age + 5;
    },
    fav_Number() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
