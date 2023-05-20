<template>
  <form @submit.prevent="setUserData">
    <label>Username</label>
    <input type="text" v-model="userName" />
    <label>Age</label>
    <input type="text" v-model="userAge" />
    <button type="submit">Set User Data</button>
  </form>
</template>

<script>
export default {
  emits: ["add-user-data"],
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  methods: {
    setUserData() {
      this.$emit("set-user-data", this.userName, this.userAge);
      this.userName = "";
      this.userAge = "";
    },
  },
};
</script>
