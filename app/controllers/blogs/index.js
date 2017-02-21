import DS from 'ember-data';

export default Ember.Controller.extend({
    sortProps: ['count'],
    sortedModel: Ember.computed.sort('model', 'sortProps'),
  
});
