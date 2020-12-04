import Component from '@glimmer/component';

export default class ProjectsFilterComponent extends Component {

  get results() {
    let { projects, query } = this.args;

    query = query.toLowerCase()

    if (query) {
      projects.forEach(project => {
        if (project.id.includes(query)) {
          projects = projects.filter(project => project.id.includes(query));
        } else if (project.tags.includes(query)) {
          projects = projects.filter(project => project.tags.includes(query));
        }
      })
    }

    return projects;
  }
}
