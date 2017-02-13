// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('pasta');
  },

  actions: {

    deleteLibrary(pasta) {
      let confirmation = confirm('Czy jesteś pewny?');

      if (confirmation) {
        pasta.destroyRecord();
      }
    }
  }

});
