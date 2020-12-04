import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class ProjectDetailsRoute extends Route {
  @service store

  async model(params) {
    return this.store.findRecord('project', params.project_id)
  }
}
