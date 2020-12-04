import Service from '@ember/service';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'

export default class ToggleService extends Service {
  @tracked show = false
  @tracked query = ''
  title = ': Active Filters!'

  @action toggle () {
    this.show = !this.show
  }

  @action toggleFilter (value) {
    this.query = value
  }

  @action clear () {
    this.query = ''
    document.querySelectorAll('input[type="radio"]').forEach(btn => btn.checked = false)
  }
}
