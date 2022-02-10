// import functions and grab DOM elements
import { getAlbums } from './fetch-utils.js';
// let state
const discog = document.getElementById('Main-list');
// set event listeners 
window.addEventListener('load', async() => {
    const albums = await getAlbums();
    console.log(albums);

    for (let album of albums) {
      const albumEl = renderAlbum(album);
      //create a render function that is given an album's worth of data
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
