import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
//import { setCsrfUrl } from 'rails-csrf/config';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

//Initialize Rails CSRF
//setCsrfUrl('api/v1/csrf');
//loadInitializers(App, 'rails-csrf');

export default App;
