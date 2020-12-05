import Component from '@glimmer/component';
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class HelpPanelComponent extends Component {
  @service helpToggle

  @action setTopPosition (e) {
    e.style.top = `${document.querySelector('#navbar').offsetHeight}px`
  }

  @action adjustTopPosition (e) {
    window.addEventListener('resize', () => {
      e.style.top = `${document.querySelector('#navbar').offsetHeight}px`
    })
  }
}
