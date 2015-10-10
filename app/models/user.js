import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr(''),
  lastname: DS.attr(''),
  username: DS.attr(''),
  email: DS.attr(''),
  uid: DS.attr(''),
  questions: DS.hasMany('question', {async: true}),
  answers: DS.hasMany('answer', {async: true})
});
