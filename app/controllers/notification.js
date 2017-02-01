import DS from 'ember-data';

export default Ember.Controller.extend({
actions: {

sendNotification() {

    const tit = this.get('titleM');
    const mess= this.get('messageM');
    $.ajax({ 
      
      url: 'https://michal-stasinski.type.pl/start.php',
      type: "POST",
      data:{title:tit, message:mess}

    }).done(function( msg ) {
    alert( "Data : " + msg );
  });
     
     
    }
  }
});

