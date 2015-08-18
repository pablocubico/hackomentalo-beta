import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'index',
  pages: null,
  setupController: function(controller, model) {
    var pages = this.store.findAll('page');
    controller.set('pages', pages);
    console.log(pages);
  },

  /*
  model: function() {
    return this.store.findAll('page');
  },

  beforeModel: function() {
    return this.csrf.fetchToken();
  },

  setupController: function(controller, model){
    controller.set('model', model);
  }*/
});
