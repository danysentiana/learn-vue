<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="Name">Name</label>
      <input type="text" v-model="valueName" />
    </div>
    <div>
      <label for="Phone">Phone Number</label>
      <input type="number" v-model="valuePhone" />
    </div>
    <div>
      <label for="email">Email Address</label>
      <input type="text" v-model="valueEmail" />
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      valueName: "",
      valuePhone: "",
      valueEmail: "",
    };
  },
  methods: {
    submitData() {
      const friendData = {
        id: new Date().toISOString(),
        name: this.valueName,
        phone: this.valuePhone,
        email: this.valueEmail,
      };
      this.$emit("add-friend", friendData);
    },
  },
};
</script>
