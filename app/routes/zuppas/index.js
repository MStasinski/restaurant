// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('zuppa');
  },

  actions: {

    deleteLibrary(zuppa) {
      let confirmation = confirm('Czy jesteś pewny?');

      if (confirmation) {
        zuppa.destroyRecord();
      }
    }
  }

});
