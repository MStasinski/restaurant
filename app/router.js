import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  
  
  this.route('pizzas', function() {
    this.route('new');
    this.route('edit', { path: '/:pizza_id/edit' });
  });
    this.route('zuppas', function() {
    this.route('new');
    this.route('edit', { path: '/:zuppa_id/edit' });
  });
  this.route('insalates', function() {
    this.route('new');
    this.route('edit', { path: '/:insalate_id/edit' });
  });
  
  
  this.route('pasta');
  this.route('alforno');
  this.route('secondi');
  this.route('dolci');
  this.route('napoje');
});

export default Router;
