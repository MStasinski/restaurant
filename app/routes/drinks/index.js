// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('drink');
  },

  actions: {

    deleteLibrary(drink) {
      let confirmation = confirm('Czy jesteś pewny?');

      if (confirmation) {
        drink.destroyRecord();
      }
    }
  }

});
