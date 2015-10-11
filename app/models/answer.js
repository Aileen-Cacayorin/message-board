import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),
  votes: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  user: DS.belongsTo('user', {async: true})
});
