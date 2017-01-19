// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('insalate');
  },

  actions: {

    deleteLibrary(insalate) {
      let confirmation = confirm('Czy jesteś pewny?');

      if (confirmation) {
        insalate.destroyRecord();
      }
    }
  }

});
