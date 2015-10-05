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
        date: Date.now(),
        answer: this.get('answer'),
        votes: 0,
        question: this.get('question')
      }
      this.set('showNewAnswer', false);
      this.set('name', '');
      this.set('answer', '');
      this.sendAction('saveAnswer', params);
    }
  }
});
