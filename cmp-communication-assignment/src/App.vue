<template>
  <div>
    <h1>Active User Data</h1>
  </div>
  <user-data @submit-form="setUser" />
  <active-user :user-name="user.name" :user-age="user.age" />
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Manuel Lorenz",
        age: 27,
      },
    };
  },
  methods: {
    setUser(name, age) {
      this.user = {
        name: name,
        age: age,
      };
    },
  },
};
</script>
