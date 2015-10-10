import Ember from 'ember';

export default Ember.Route.extend({

  // why do i need to do this?
  beforeModel: function() {
  return this.get("session").fetch().catch(function() {});
  },
  model() {
    return this.store.findAll('question')
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }

});
