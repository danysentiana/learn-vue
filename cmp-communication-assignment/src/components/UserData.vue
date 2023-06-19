<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="inputName" placeholder="Input Name" />
    </div>
    <div>
      <label for="">Age</label>
      <input type="number" v-model="inputAge" placeholder="Input Age" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["submit-form"],
  data() {
    return {
      inputName: "",
      inputAge: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit-form", this.inputName, this.inputAge);
    },
  },
};
</script>
