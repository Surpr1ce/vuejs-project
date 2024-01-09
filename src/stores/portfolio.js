import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore({
  id: 'portfolio',
  state: () => ({
    projects: [
      {
        id: 1,
        title: 'Project 1',
        technologies: ['Vue.js', 'Node.js', 'Express'],
        description: 'A description of the project.',
        details: 'More detailed information about the project.',
        repoLink: 'https://github.com/project1',
        duration: '3 months',
        teamCollaboration: true,
        client: 'Company A',
        about: 'About the project...',
        challenges: 'Challenges faced...',
        results: 'Results and impact...',
      },
      {
        id: 2,
        title: 'Project 2',
        technologies: ['React', 'Node.js', 'MongoDB'],
        description: 'Another project description.',
        details: 'Detailed information about another project.',
        repoLink: 'https://github.com/project2',
        duration: '2 months',
        teamCollaboration: false,
        client: 'Company B',
        about: 'About the second project...',
        challenges: 'Challenges faced in the second project...',
        results: 'Results and impact of the second project...',
      },
      {
        id: 3,
        title: 'Project 3',
        technologies: ['Angular', 'Java', 'Spring Boot'],
        description: 'Yet another project description.',
        details: 'Detailed information about yet another project.',
        repoLink: 'https://github.com/project3',
        duration: '4 months',
        teamCollaboration: true,
        client: 'Company C',
        about: 'About the third project...',
        challenges: 'Challenges faced in the third project...',
        results: 'Results and impact of the third project...',
      },
    ],
  }),
  actions: {
    getProjects() {
      return this.projects;
    },
    getProjectById(id) {
      return this.projects.find(project => project.id === parseInt(id));
    },
  },
});
