// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('secondi');
  },

  actions: {

    deleteLibrary(secondi) {
      let confirmation = confirm('Czy jesteś pewny?');

      if (confirmation) {
        secondi.destroyRecord();
      }
    }
  }

});
