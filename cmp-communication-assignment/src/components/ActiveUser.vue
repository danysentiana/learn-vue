<template>
  <h2>{{ userName }}</h2>
  <p>{{ userAge }}</p>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: Number,
      required: true,
    },
  },
};
</script>
