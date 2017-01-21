// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('alforno');
  },

  actions: {

    deleteLibrary(alforno) {
      let confirmation = confirm('Czy jesteś pewny?');

      if (confirmation) {
        alforno.destroyRecord();
      }
    }
  }

});
