import { database } from '~src/firebase';

export const getMovies = database.collection('movies').get().then((querySnapshot) => {
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}).catch(err => console.log(err));


export const postMovies = body => database.collection("movies").add(body);

export const updateMovie = (id, body) => database.collection('movies').doc(id).set(body);

export const deleteMovie = id => database.collection('movies').doc(id).delete();
