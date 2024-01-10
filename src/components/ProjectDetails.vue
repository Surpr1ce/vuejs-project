<template>
  <v-container>
    <v-row class="mb-6">
      <v-col cols="12">
        <v-btn color="teal" @click="goBack">Back</v-btn>
      </v-col>
    </v-row>

    <v-card>
      <v-card-title class="headline">{{ project.details }}</v-card-title>

      <v-divider></v-divider>

      <v-subheader class="subheader">Additional Details:</v-subheader>

      <v-list>
          <v-list-item>
              <v-list-item-title class="caption">
                <strong>Technologies Used:</strong>
              </v-list-item-title>
              <v-list-item-subtitle>
                <v-chip v-for="technology in project.technologies" :key="technology" class="ma-1">
                  {{ technology }}
                </v-chip>
              </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
              <v-list-item-title class="caption">
                <strong>Description:</strong>
              </v-list-item-title>
              <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
              <v-list-item-title class="caption">
                <strong>GitHub Repository:</strong>
              </v-list-item-title>
              <v-list-item-subtitle>
                <a :href="project.repoLink" target="_blank">{{ project.repoLink }}</a>
              </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
              <v-list-item-title class="caption">
                <strong>Project Duration:</strong>
              </v-list-item-title>
              <v-list-item-subtitle>{{ project.duration }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
              <v-list-item-title class="caption">
                <strong>Team Collaboration:</strong>
              </v-list-item-title>
              <v-list-item-subtitle>{{ project.teamCollaboration ? 'Yes' : 'No' }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
              <v-list-item-title class="caption">
                <strong>Client:</strong>
              </v-list-item-title>
              <v-list-item-subtitle>{{ project.client }}</v-list-item-subtitle>
          </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-subheader class="subheader">About the Project:</v-subheader>
      <v-card-text class="body-1">{{ project.about }}</v-card-text>

      <v-divider></v-divider>

      <v-subheader class="subheader">Challenges and Solutions:</v-subheader>
      <v-card-text class="body-1">{{ project.challenges }}</v-card-text>

      <v-divider></v-divider>

      <v-subheader class="subheader">Results and Impact:</v-subheader>
      <v-card-text class="body-1">{{ project.results }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { usePortfolioStore } from '@/stores/portfolio.js';

export default {
  computed: {
    project() {
      const store = usePortfolioStore();
      const projectId = this.$route.params.id;
      return store.getProjectById(projectId);
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.headline {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.subheader {
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
}

.caption {
  font-size: 16px;
}

.body-1 {
  font-size: 14px;
}

.ma-1 {
  margin: 8px;
}
</style>
