import DS from 'ember-data';

export default DS.Model.extend({
  
  date: DS.attr('string'),
  news: DS.attr('string'),
  title: DS.attr('string'),
  imageUrl: DS.attr('string')

});