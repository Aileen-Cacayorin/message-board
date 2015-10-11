import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  answer: DS.attr(),
  votes: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  answer: DS.belongsTo('user', {async: true})
});
