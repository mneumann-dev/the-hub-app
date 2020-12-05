import Service from '@ember/service';
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class HelpToggleService extends Service {
  @tracked show = true

  @action toggle () {
    this.show = !this.show
  }
}
