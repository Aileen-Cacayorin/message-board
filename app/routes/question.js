import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion(model) {
      model.destroyRecord();
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
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      params.question.save();
      // var question = params.question;
      //   question.get('comments').addObject(newAnswer);
      //   newAnswer.save().then(function() {
      //     return question.save();
      //   });
        this.transitionTo('question', params.question);
    }
  }
});
