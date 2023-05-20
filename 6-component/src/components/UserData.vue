<template>
  <form @submit.prevent="addUserData">
    <label>Username</label>
    <input type="text" v-model="userName" />
    <label>Age</label>
    <input type="text" v-model="userAge" />
    <button type="submit">Add User Data</button>
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
    addUserData() {
      this.$emit("add-user-data", {
        name: this.userName,
        age: this.userAge,
      });
      this.userName = "";
      this.userAge = "";
    },
  },
};
</script>
