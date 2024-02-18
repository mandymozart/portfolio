import categories from './categories.json';
import clients from './clients.json';
import collaborators from './collaborators.json';
import experiences from './experiences.json';
import industries from './industries.json';
import methods from './methods.json';
import projects from './projects.json';
import roles from './roles.json';
import skills from './skills.json';
import types from './types.json';
const docs = {
  skills: skills.results,
  projects: projects.results,
  methods: methods.results,
  clients: clients.results,
  collaborators: collaborators.results,
  experiences: experiences.results,
  roles: roles.results,
  categories: categories.results,
  types: types.results,
  industries: industries.results,
};

export default docs;
