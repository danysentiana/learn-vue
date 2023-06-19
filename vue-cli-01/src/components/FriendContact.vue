<template>
  <li>
    <h3>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h3>
    <button @click="toggleFavorite">Favorite ?</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show" }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete-friend', id)">Delete Friend</button>
  </li>
</template>

<script>
export default {
  emits: ["toggle-favorite", "delete-friend"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
