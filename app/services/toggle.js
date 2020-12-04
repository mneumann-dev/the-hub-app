import Service from '@ember/service';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'

export default class ToggleService extends Service {
  @tracked show = false
  @tracked query = ''

  @action toggle () {
    this.show = !this.show
  }

  @action clear () {
    this.query = ''
  }
}
