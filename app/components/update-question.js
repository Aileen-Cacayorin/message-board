import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,

  actions: {
    updateThisQuestion() {
      this.set('showUpdateForm', true);
    },

    saveUpdate(question) {
      debugger;
      var params = {
        name: this.get('name'),
        date: new Date(),
        question: this.get('question?'),
        notes: this.get('notes')
      }
        // debugger;
      this.sendAction('saveUpdate', question, params)
      this.set('updateThisQuestion', false)
    }
  }
});
