import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedComments: Ember.computed.sort('comments', 'sortBy')
});
