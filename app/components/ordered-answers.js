import Ember from 'ember';

export default Ember.Component.extend({
  sortedVotes: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortedVotes'),

  actions: {
    upvote(answer) {
      this.sendAction('upvote', answer)
    },

    downvote(answer) {
      this.sendAction('downvote', answer)
    }
  }
});
