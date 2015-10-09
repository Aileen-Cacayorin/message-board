
import Ember from 'ember';

export default Ember.Route.extend({
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
      return this.get('session').get('content').user = model;
    },

  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },

    signOut: function() {
      this.get("session").close();
    }
  }
});
