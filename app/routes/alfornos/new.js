// app/routes/libraries/new.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('alforno');
  },

  actions: {
    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('alfornos'));
    },

    willTransition() {
        let model = this.controller.get('model');

        if (model.get('isNew')) {
            model.destroyRecord();
        }
    }
  }
});
