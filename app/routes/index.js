import Ember from 'ember';

export default Ember.Route.extend({

  // why do i need to do this?
  beforeModel: function() {
  return this.get("session").fetch().catch(function() {});
  },
  model() {
    var sessionId = this.get("session").content.uid;
    return Ember.RSVP.hash({
      question: this.store.findAll('question'),
      user: this.store.findRecord('user', sessionId)
    });
  },

    actions: {
    saveQuestion(params) {
      debugger;
      var newQuestion = this.store.createRecord('question', params);
      var user = params.user
      user.get('questions').addObject(newQuestion);
      newQuestion.save().then(function(){
        return user.save();
      });
      this.transitionTo('index');
    }
  }

});
