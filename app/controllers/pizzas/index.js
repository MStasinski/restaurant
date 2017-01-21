import DS from 'ember-data';

export default Ember.Controller.extend({
    sortProps: ['rank'],
    sortedModel: Ember.computed.sort('model', 'sortProps'),
  
});