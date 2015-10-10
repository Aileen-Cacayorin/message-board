import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    signUp() {
      var params = {
        firstname: this.get('firstname'),
        lastname: this.get('lastname'),
        email: this.get('email'),
        username: this.get('username'),
        password: this.get('password')
      };
      debugger;
      this.sendAction('signUp', params);
    }

  }
});
