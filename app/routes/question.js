import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
  return this.get("session").fetch().catch(function() {});
  },
  model(params) {
    var sessionId = this.get("session").content.uid;
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      user: this.store.findRecord('user', sessionId)
    });
  },
  actions: {
    deleteQuestion(model) {
      var question = model.question
      question.get('answers').forEach(function(answer) {
        answer.destroyRecord();
      });
      question.destroyRecord();
      this.transitionTo('index');
    },

    saveUpdate(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },

    saveAnswer(params) {
      debugger;
      var newAnswer = this.store.createRecord('answer', params);
      // newAnswer.save();
      // params.question.save();
      debugger;
      var question = params.question;
      var user = params.user;
      question.get('answers').addObject(newAnswer);
      user.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        user.save();
      return question.save();
        });
        debugger;
        this.transitionTo('question');
    },

    upvote(answer) {
    
      var newVotes = answer.get('votes');
      answer.set('votes', newVotes +1);
      answer.save();
      this.transitionTo('question');
    },

    downvote(answer) {
      var newVotes = answer.get('votes');
      answer.set('votes', newVotes -1);
      answer.save();
      this.transitionTo('question');
    }
  }
});
