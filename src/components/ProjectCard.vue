<template>
  <v-card class="project-card">
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-subtitle>
      <v-chip-group>
        <v-chip v-for="technology in project.technologies" :key="technology" class="ma-1">
          {{ technology }}
        </v-chip>
      </v-chip-group>
    </v-card-subtitle>
    <v-card-text>{{ project.description }}</v-card-text>
    <v-card-actions>
      <v-btn @click="viewDetails" color="teal">View Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  methods: {
    viewDetails() {
      this.$router.push(`/projects/${this.project.id}`);
    },
  },
};
</script>

<style scoped>
.project-card {
  max-width: 400px;
  margin: 16px;
}
</style>
