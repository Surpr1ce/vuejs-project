<template>
  <v-container>
    
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          src="./src/images/aboutme.jpg"
          alt="About Me Image"
          class="about-me-image"
        ></v-img>
      </v-col>

      <v-col cols="12" md="6">
        <h1>About Me</h1>
        <v-card-text class="headline">
          <p class="body-1">
            Hi, I'm [Your Name], a passionate software engineer with a love for coding and creating meaningful applications.
            I hold a [Your Degree] in [Your Field] from [Your University], where I gained a strong foundation in computer
            science and software engineering.
          </p>
          <p class="body-1">
            Over the years, I've had the opportunity to work on diverse projects, ranging from [mention specific types of
            projects or technologies you've worked on]. My professional journey has equipped me with skills in [list some key
            skills],
            and I thrive in collaborative environments that foster innovation.
          </p>
          <p class="body-1">
            In addition to my technical skills, I am dedicated to continuous learning and staying updated with the latest
            industry trends.
            I actively contribute to open-source projects and engage with the developer community to share knowledge and
            insights.
          </p>
          <p class="body-1">
            When I'm not coding, you can find me [mention any hobbies or interests outside of work]. I believe in the power
            of technology
            to bring positive change, and I am excited about the endless possibilities in the ever-evolving world of
            software development.
          </p>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.headline {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.body-1 {
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.about-me-image {
  width: 100%;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}
</style>
