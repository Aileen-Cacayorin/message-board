import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  model() {
    var sessionId = this.get("session").content.uid;
    return this.store.findRecord('user', sessionId);
    },
});
