import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  small: DS.attr('string'),
  medium: DS.attr('string'),
  large: DS.attr('string'),
  desc: DS.attr('string')

});
