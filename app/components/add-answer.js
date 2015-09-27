import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        name: this.get('name'),
        date: new Date(),
        answer: this.get('answer'),
        question: this.get('question')
      }
      this.sendAction('saveAnswer', params);
    }
  }
});
