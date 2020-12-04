import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'
import { action } from '@ember/object'

export default class ProjectsComponent extends Component {
  @service toggle
  // @tracked query = ''

  @action clear () {
    console.log('click')
    this.toggle.query = ''
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
