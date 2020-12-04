import Service from '@ember/service';
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class AboutToggleService extends Service {
  @tracked show = false

  @action toggle () {
    this.show = !this.show
    if (this.show) {
      document.querySelector('body').classList.add('no-scroll')
    } else {
      document.querySelector('body').classList.remove('no-scroll')
    }
  }
}
