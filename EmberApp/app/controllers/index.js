import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  actions: {
    addPage: function(url){
      var attrs = {
        url: url
      };
      var page = this.store.createRecord('page', attrs);
      var self = this;

      function transitionToPage(page) {
        self.transitionToRoute('page', page);
        Ember.$("#top-title").html(page.url);
      }

      function failure(reason) {
        // handle the error
      }

      page.save().then(transitionToPage).catch(failure);
    },
  }
});