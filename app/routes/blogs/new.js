// app/routes/libraries/new.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('blog');
  },

  actions: {

    didSelectImage(files) {

      console.log("file",files[0]);
    // File or Blob named mountains.jp

   },

    

    willTransition() {
        let model = this.controller.get('model');

        if (model.get('isNew')) {
            model.destroyRecord();
        }
    }
  }
});
