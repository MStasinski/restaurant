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

  this.route('insalates', function() {
    this.route('new');
    this.route('edit', { path: '/:insalate_id/edit' });
  });

    this.route('zuppas', function() {
    this.route('new');
    this.route('edit', { path: '/:zuppa_id/edit' });
  });
  
  this.route('alfornos', function() {
    this.route('new');
    this.route('edit', { path: '/:alforno_id/edit' });
  });
  
  this.route('pastas', function() {
    this.route('new');
    this.route('edit', { path: '/:pasta_id/edit' });
  });

  this.route('starters', function() {
    this.route('new');
    this.route('edit', { path: '/:starter_id/edit' });
  });

  this.route('secondis', function() {
    this.route('new');
    this.route('edit', { path: '/:secondi_id/edit' });
  });

  this.route('drinks', function() {
    this.route('new');
    this.route('edit', { path: '/:drink_id/edit' });
  });

  this.route('blogs', function() {
    this.route('new');
    this.route('edit', { path: '/:blog_id/edit' });
  });

 
 this.route('news');
   this.route('notification');
});

export default Router;
