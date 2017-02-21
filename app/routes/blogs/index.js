// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('blog');
  },

  actions: {

    deleteLibrary(blog) {
      let confirmation = confirm('Czy jesteś pewny?');

      if (confirmation) {
        blog.destroyRecord();
      }
    }
  }

});
