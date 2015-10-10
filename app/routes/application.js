
import Ember from 'ember';
  var ref = new Firebase("https://message-board-code-review.firebaseio.com");
export default Ember.Route.extend({
    // firebase: null,
    // why do i need to do this?
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },
  // what does this do?
  model() {
    var sessionId = this.get("session").content.uid;
    return this.store.findRecord('user', sessionId);
    },

    // what does this do?
    afterModel(model) {
      return this.get('session').get('content').user = model.user;
    },

  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },

    signOut: function() {
      this.get("session").close();
    },

    signUp: function(params) {

      ref.createUser({
        email     : params.email,
        password  : params.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          ref.child('users').child(userData.uid).set({
            firstname: params.firstname,
            lastname: params.lastname,
            email: params.email,
            username: params.username,
            uid: userData.uid
          });
        } debugger;
      });
    }
  }
});
