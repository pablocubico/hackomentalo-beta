import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany('comment'),
  url: DS.attr('string'),
  created_at: DS.attr('date'),
  title: DS.attr('string'),
  host: DS.attr('string'),

  sorted_comments: (function(){
    return this.get('comments').sortBy('id');
  }).property('comments.@each.id'),
});
