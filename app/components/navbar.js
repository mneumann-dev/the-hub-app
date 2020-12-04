import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class Navbar extends Component {
  @service toggle
  @service aboutToggle
  @service feedToggle
  @tracked isScrolling = false

  @action toggleSearch () {
    this.toggle.toggle()
    this.toggle.show ? document.querySelector('input').focus() : document.querySelector('input').blur()
    if (this.toggle.show) this.isScrolling = false
    // if (!this.toggle.show) this.toggle.clear()
  }

  @action toggleAbout () {
    this.aboutToggle.toggle()
  }

  @action onScroll () {
    window.addEventListener('scroll', () => {
      if (!this.toggle.show) this.isScrolling = window.scrollY > 0
      if (this.toggle.show) this.isScrolling = false
    })
  }
}
