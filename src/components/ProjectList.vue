<template>
  <v-container>
    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="12" sm="6" md="4" lg="3">
        <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }">
          <ProjectCard :project="project" />
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import { usePortfolioStore } from '@/stores/portfolio.js';


export default {
  components: {
    ProjectCard,
  },
  computed: {
    projects() {
      const store = usePortfolioStore();
      return store.projects;
    },
  },
}
</script>
