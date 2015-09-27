import Ember from 'ember';

export default Ember.Component.extend({
  showNewAnswer: false,
  actions: {

    showAnswerForm() {
      this.set('showNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        name: this.get('name'),
        date: new Date(),
        answer: this.get('answer'),
        question: this.get('question')
      }
      this.set('showNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
