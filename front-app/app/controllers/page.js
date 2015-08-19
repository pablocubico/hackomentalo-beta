import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ["application"],
  layoutName: 'main_layout',
  drawerShown: false,
  commentColor: Ember.computed.alias('controllers.application.color'),
  actions: {
    addComment: function(){
      var attrs = {
        message: this.get('newComment'),
        page: this.model,
        color: this.get('commentColor')
      };
      var comment = this.store.createRecord('comment', attrs);
      comment.save().then(function() {
        Ember.$("#page-comments").animate({ scrollTop: Ember.$('#page-comments')[0].scrollHeight}, 1000);
      });
      this.set('newComment', '');
      return true;
    },
    showDrawer: function() {
      this.set('drawerShown', true);
    },
    hideDrawer: function() {
      this.set('drawerShown', false);
    }
  },
  formattedDate: function() {
    var date = this.model.get('created_at');
    return moment(date).fromNow();
  }.property('date')

  
});