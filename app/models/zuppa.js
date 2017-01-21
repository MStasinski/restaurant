import DS from 'ember-data';

export default DS.Model.extend({
   
  rank: DS.attr('number'),
  price: DS.attr('number'),
  name: DS.attr('string'),
  desc: DS.attr('string')

});
