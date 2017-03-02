import DS from 'ember-data';

export default Ember.Controller.extend({
    sortProps: ['rank:desc'],
    sortedModel: Ember.computed.sort('model', 'sortProps'),
  
});
