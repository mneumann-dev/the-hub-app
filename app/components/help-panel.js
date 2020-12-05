import Component from '@glimmer/component';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'
import { inject as service } from '@ember/service'

export default class HelpPanelComponent extends Component {
  @service('toggle') search
  @tracked show = false

  @action toggle () {
    this.show = !this.show
    if (this.show && window.innerWidth < 576) {
      document.querySelector('body').classList.add('no-scroll')
    } else {
      document.querySelector('body').classList.remove('no-scroll')
    }
  }

  @action setTopPosition (e) {
    e.style.top = `${document.querySelector('#navbar').offsetHeight}px`
  }

  @action adjustTopPosition (e) {
    window.addEventListener('resize', () => {
      e.style.top = `${document.querySelector('#navbar').offsetHeight}px`
    })
  }
}
