import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,

  actions: {
    updateThisQuestion() {
      this.set('showUpdateForm', true);
    },

    saveUpdate(question) {
      var params = {
        name: this.get('name'),
        date: new Date(),
        question: this.get('question?'),
        notes: this.get('notes')
      }
      this.set('showUpdateForm', false);
      this.sendAction('saveUpdate', question, params);

    }
  }
});
