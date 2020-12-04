import Component from '@glimmer/component';
import { inject as service } from '@ember/service'
import { action } from '@ember/object'

export default class ProjectsComponent extends Component {
  @service toggle

  @action setTopPosition (e) {
    e.style.top = `${document.querySelector('#navbar').offsetHeight}px`
  }

  @action adjustTopPosition (e) {
    window.addEventListener('resize', () => {
      e.style.top = `${document.querySelector('#navbar').offsetHeight}px`
    })
  }
}
