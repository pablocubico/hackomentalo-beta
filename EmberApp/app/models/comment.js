import DS from 'ember-data';

export default DS.Model.extend({
  page: DS.belongsTo('page'),
  message: DS.attr('string'),
  color: DS.attr('string'),
  created_at: DS.attr('date')
});
