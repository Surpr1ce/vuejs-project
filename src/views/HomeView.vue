<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <!-- Hero section with background image -->
        <v-card class="hero-card">
          <v-card-text class="hero-text">
            <v-subheader class="headline">Hi, I'm [Your Name]</v-subheader>
            <p class="body-1">
              A passionate software engineer dedicated to crafting meaningful and innovative solutions.
              Welcome to my portfolio, where I showcase my journey, skills, and projects.
            </p>
            <v-btn color="primary" @click="navigateToPortfolio">Portfolio</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Styling for the hero card */
.hero-card {
  background-image: url("@/images/hero.jpg"); /* Replace with the path to your hero image */
  background-size: cover;
  background-position: center;
  color: white; /* Text color for better visibility on the background */
  height: 100vh; /* Set the height to 100% of the viewport height */
  display: flex;
  align-items: center; /* Vertically center the content */
}

/* Styling for the hero text */
.hero-text {
  text-align: center;
}

.headline {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.body-1 {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.v-btn {
  text-transform: none;
}
</style>

<script>
export default {
  methods: {
    navigateToPortfolio() {
      this.$router.push('/projects');
    },
  },
};
</script>
