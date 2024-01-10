<template>
  <v-container>
    
    <v-row class="mb-6">
      <v-col cols="12">
        <v-subheader  class="headline">Contact Me</v-subheader>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-text>
            <p class="body-1">
              Feel free to reach out to me. Here's how you can get in touch:
            </p>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>GitHub: <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">Your GitHub Profile</a></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-form>
          <v-text-field label="Your Name" v-model="name" outlined></v-text-field>
          <v-text-field label="Your Email" v-model="email" outlined></v-text-field>
          <v-textarea label="Message" v-model="message" outlined></v-textarea>
          <v-btn @click="submitForm" color="primary">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.name, this.email, this.message);
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

.body-1 {
  font-size: 16px;
  line-height: 1.6;
}
</style>
