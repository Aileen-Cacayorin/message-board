import Ember from 'ember';

export function postedAgo(params) {
  var date = params[0];
  return moment(date).startOf('hour').fromNow();


}

export default Ember.Helper.helper(postedAgo);
