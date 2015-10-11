import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  question: DS.attr(),
  notes: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  answers: DS.hasMany('answer', {async: true})
});
