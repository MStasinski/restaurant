import Ember from 'ember';
export default Ember.Controller.extend({


  firebaseApp: Ember.inject.service(),
  session: Ember.inject.service('session'),

  actions: {
    isAuth: false,
    login: function () {

      var email = this.get('userEmail');
      var password = this.get('userPassword');
      const auth = this.get('firebaseApp').auth();
      const promise = auth.signInWithEmailAndPassword(email, password);

      promise.then(function () {
        this.set('isAuth', true);
       // this.transitionTo('protected');
      }.bind(this));
    }
  }
});
