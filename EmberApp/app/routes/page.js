import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'page',

  model: function(params) {
    return this.store.find('page', params.page_id);
  },

  beforeModel: function() {
    return this.csrf.fetchToken();
  },

  setupController: function(controller, model){
    controller.set('model', model);
  }
});
