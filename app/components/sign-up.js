import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    signUp() {
      var params = {
        firstname: this.get('firstName'),
        lastname: this.get('lastName'),
        email: this.get('email'),
        password: this.get('password')
      };
      this.sendAction('signUp', params);
    }
    
  }
});
