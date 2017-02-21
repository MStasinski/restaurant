import DS from 'ember-data';
//import * as firebase from "firebase";
export default Ember.Controller.extend({

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
      /*newLibrary.set('days', this.get('days'));   
      newLibrary.set('name', this.get('name'));    
      newLibrary.set('description', this.get('description'));       
      newLibrary.set('category', this.get('selectedCategory').get('name'));*/
// Create the file metadata
   var metadata = {
     contentType: 'image/png'
   };
var storageRef = this.get('firebaseApp').storage().ref();

//var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
   
   var path = 'images/' + newLibrary.get('id') + '.png';
var uploadTask = storageRef.child(path).put(this.get('file'), metadata);
uploadTask.on('state_changed', function(snapshot){
     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     console.log('Upload is ' + progress + '% done');
     console.log(snapshot.state);
   }, function(error) {
   }, function() {
      var downloadURL = uploadTask.snapshot.downloadURL;
     

       let dataFormat = Date().split(' ');
       console.log(dataFormat);
       newLibrary.set('date', "Data:   "+dataFormat[1]+" "+dataFormat[2]+" "+dataFormat[3]+"                      Godzina:    "+dataFormat[4]);
      newLibrary.set('imageUrl', downloadURL);
     // newPlan.save().then(() => ctrl.transitionToRoute('plans'));
       newLibrary.save().then(() => ctrl.transitionToRoute('blogs'));

      //newLibrary.set('file', '');
      //ctrl.set('selectedCategory', '');
     // ctrl.set(document.getElementById('output').src, '');
     // ctrl.set('days', '');
      //ctrl.set('isDisabled', true);
   });



      //console.log(newLibrary)
      //newPlan.set('imageUrl', downloadURL);
      //newPlan.save().then(() => ctrl.transitionToRoute('plans'));
     // newLibrary.save().then(() => this.transitionTo('blogs'));
    }
  }

});