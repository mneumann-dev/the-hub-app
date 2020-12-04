// import EmberRouter from '@ember/routing/router';
import config from 'the-hub-app/config/environment';
import EmberRouterScroll from 'ember-router-scroll'

export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('project', { path: '/projects/:project_id' })
});
