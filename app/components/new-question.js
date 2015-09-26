import Ember from 'ember';

export default Ember.Component.extend({
  askQuestion: false,

  actions: {
    newQuestionShow() {
      this.set('askQuestion', true);
    },

    saveQuestion() {
      var params = {
        name: this.get('name'),
        date: new Date(),
        question: this.get('question'),
        notes: this.get('notes')
      };
      this.sendAction('saveQuestion', params)
      this.set('askQuestion', false)

    }
  }
});
