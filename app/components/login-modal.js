import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    signIn() {
      var params = {
        email: this.get('signInEmail'),
        password: this.get('signInPassword')
      }
      debugger;
      this.sendAction('signIn', params);
    }
  }

});
