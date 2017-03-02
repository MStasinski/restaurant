import DS from 'ember-data';
//import * as firebase from "firebase";
export default Ember.Controller.extend({

firebaseApp: Ember.inject.service(),
storageRef: '',
file: '',

actions: {

didSelectImage(files) {

      console.log("file",files[0]);
    // File or Blob named mountains.jpg

    // Get a reference to the storage service, which is used to create references in your storage bucket
//var storage = firebase.storage();
 const storageRef = this.get('firebaseApp').storage().ref();

    var file = files[0]
    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
     uploadTask.on(window.firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {


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
       // this.set('downloadURL', uploadTask.snapshot.downloadURL);
      });
}}

});