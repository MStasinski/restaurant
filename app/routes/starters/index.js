// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('starter');
  },

  actions: {

    deleteLibrary(starter) {
      let confirmation = confirm('Czy jesteś pewny?');

      if (confirmation) {
        starter.destroyRecord();
      }
    }
  }

});
