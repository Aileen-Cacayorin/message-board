import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.belongsTo('post', {asyn: true}),
  answer: DS.belongsTo('question', {asyn: true})
});
