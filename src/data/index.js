import categories from './categories.json';
import clients from './clients.json';
import collaborators from './collaborators.json';
import experiences from './experiences.json';
import methods from './methods.json';
import projects from './projects.json';
import roles from './roles.json';
import skills from './skills.json';
const docs = {
  skills: skills.results,
  projects: projects.results,
  methods: methods.results,
  clients: clients.results,
  collaborators: collaborators.results,
  experiences: experiences.results,
  roles: roles.results,
  categories: categories.results,
};

export default docs;
