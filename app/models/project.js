import Model, { attr } from '@ember-data/model'

export default class ProjectModel extends Model {
  @attr description
  @attr image
  @attr href
  @attr tags
  @attr info
}
