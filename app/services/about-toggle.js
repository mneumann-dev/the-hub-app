import Service from '@ember/service';
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class AboutToggleService extends Service {
  @tracked show = false

  @action toggle () {
    this.show = !this.show
  }
}
