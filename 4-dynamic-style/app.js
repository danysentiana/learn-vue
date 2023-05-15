const app = Vue.createApp({
  data() {
    return {
      input: "",
      visible: true,
      bgColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        visible: this.visible,
        hidden: !this.visible,
      };
    },
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
});

app.mount("#assignment");
