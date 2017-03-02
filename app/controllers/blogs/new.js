import DS from 'ember-data';
//import * as firebase from "firebase";
import moment from 'moment';

export default Ember.Controller.extend({


 sortProps: ['id'],
    sortedModel: Ember.computed.sort('model', 'sortProps'),

firebaseApp: Ember.inject.service(),
storageRef: '',
file: '',

actions: {

didSelectImage(files) {

  console.log("file",files[0]);

  let reader = new FileReader();
 
  reader.onloadend = Ember.run.bind(this, function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
      this.set('file', files[0]);
  });

 reader.readAsDataURL(files[0]);



  /*const storageRef = this.get('firebaseApp').storage().ref();
  var file = files[0]
  
  var metadata = {
    contentType: 'image/jpeg'
  };

  var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
  uploadTask.on(window.firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {

          var downloadURL = uploadTask.snapshot.downloadURL;
          console.log(downloadURL)
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          this.set('progressText', `Upload is ${Math.round(progress * 100) / 100} % done`);
          this.set('progress', progress);
          switch (snapshot.state) {
            case window.firebase.storage.TaskState.PAUSED:
              this.set('status', 'Upload is paused');
              break;
            case window.firebase.storage.TaskState.RUNNING:
              this.set('status', 'Upload is running');
              break;
          }
        }, (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
        }
      }, () => {
        this.set('downloadURL', uploadTask.snapshot.downloadURL);
      });
    */
    },


    saveLibrary(newLibrary) {
      let ctrl =  this;

   var metadata = {
     contentType: 'image/png'
   };
var storageRef = this.get('firebaseApp').storage().ref();

//var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
   
   var path = 'images/' + this.get('file').name;

var uploadTask = storageRef.child(path).put(this.get('file'), metadata);


uploadTask.on('state_changed', function(snapshot){
     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     console.log('Upload is ' + progress + '% done');
     console.log(snapshot.state);

   }, function(error) {
   }, function() {
      var downloadURL = uploadTask.snapshot.downloadURL;
     

       let dataFormat = moment(new Date()).format('DD.MM.YYYY');
      
       newLibrary.set('rank',moment().format());
       
       if (newLibrary.get('title') == undefined) {
          newLibrary.set('title',"");
       }
       if (newLibrary.get('news') == undefined) {
          newLibrary.set('news',"");
       }

       if (newLibrary.get('imageUrl') == undefined) {
          newLibrary.set('imageUrl',"");
       }
       console.log(ctrl.get('title'))
       console.log(ctrl.get('news'))

   
     newLibrary.set('date', dataFormat);

     newLibrary.set('imageUrl', downloadURL);
       newLibrary.save().then(() => ctrl.transitionToRoute('blogs'));

    
   });



     
    }
  }

});