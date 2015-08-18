import Ember from 'ember';

export default Ember.View.extend({
  sendComment: function(e) {
    this.content.send('addComment', e.target.value);
    Ember.$(e.target).val('');
    return true;
  }
});