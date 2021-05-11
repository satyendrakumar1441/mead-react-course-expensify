import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {firebase, googleAuthProvider, database as default};

  // // child_removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // // child_changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  //  // child_added
  //  database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').push({
  //   description: 'Dinner',
  //   amount: 3290,
  //   createdAt: 100,
  //   note: 'Chuys'
  // });

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()   
//         });
//       });

//       console.log(expenses);
//     });

// const onValueChange =database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()   
//         });
//       });

//       console.log(expenses);
// });



  // database.ref('expenses').push({
  //   description: 'Coffee',
  //   amount: 239,
  //   createdAt: 0,
  //   notes: 'Starbucks'
  // });

  // database.ref('expenses').push({
  //   description: 'Rent',
  //   amount: 102900,
  //   createdAt: -100,
  //   note: 'On the bend'
  // });

  // database.ref('expenses').push({
  //   description: 'Dinner',
  //   amount: 3290,
  //   createdAt: 100,
  //   note: 'Chuys'
  // });

  // database.ref('notes')
  //   .push({
  //     title: 'Course topics',
  //     body: 'Reactive Native, Python'
  //   });

  // database.ref('notes/-M_Q6fr6FbBXJiyRZzcb').remove();


  // database.ref().set({
  //   name: 'Satya Kumar',
  //   age: 52,
  //   isSingle: false,
  //   location: {
  //       city: 'Austin',
  //       country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved');
  // }).catch((e) => {
  //   console.log('This failed.', e);
  // })

  // database.ref('age').set(52);
  // database.ref('location/city').set('New York');
  // database.ref('attributes').set({
  //   height: 157,
  //   weight: 165
  // });

  // database.ref('sports').set({
  //   soccer: false,
  //   golf: true
  // }).then(() => {
  //   console.log('sports added');
  // }).catch((e) => {
  //   console.log('sports update failed!', e);
  // });



  // console.log('I made a request to change the data');

  // database.ref()
  //   .remove()
  //   .then(() => {
  //     console.log('Data was removed');
  //   })
  //   .catch((e) => {
  //     console.log('Did not remove data!', e);
  //   });

  // database.ref('isSingle').set(null);

  // database.ref().update({
  //   name: 'Mike',
  //   age: 29,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software Developer',
  //     company: 'Google'
  //   },
  //   isSingle: null
  // });

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });

  // database.ref()
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e)=> {
  //     console.log('Error fetching data', e);
  //   });

  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (e) => {
  //   console.log('Error with data fetching', e);
  // });

  // setTimeout(() => {
  //   database.ref('age').set(29);
  // }, 3500);

  // setTimeout(() => {
  //   database.ref().off(onValueChange);
  // }, 7000);

  // setTimeout(() => {
  //   database.ref('age').set(30);
  // }, 10500);

  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
  // }, (e) => {
  //   console.log('Error with data fetching', e);
  // });

  // setTimeout(() => {
  //   database.ref().update({
  //     name: 'Satya',
  //     'job/title': 'Software Architect'
  //   });
  // }, 3000);

  // const firebaseNotes = {
  //   notes: {
  //     id12: {
  //       title: 'First note!',
  //       body: 'This is my note'
  //     },
  //     id13: {
  //       title: 'Another note',
  //       body: 'This is my second note'  
  //     }
  //   }
  // }
  // const notes = [{
  //   id: '12',
  //   title: 'First note!',
  //   body: 'This is my note'
  // }, {
  //   id: '761ase',
  //   title: 'Another note',
  //   body: 'This is my second note'
  // }];

  // database.ref('notes').set(notes);