import Ember from 'ember';

export function postedDate(params) {
  var date = params[0];
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

export default Ember.Helper.helper(postedDate);
