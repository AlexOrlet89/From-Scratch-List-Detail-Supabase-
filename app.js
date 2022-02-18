// import functions and grab DOM elements
import { getAlbums } from './fetch-utils.js';
import { renderAlbums } from './render-utils.js';
// let state
const discog = document.getElementById('Main-list');
// set event listeners 
window.addEventListener('load', async() => {
    const albums = await getAlbums();
    console.log(albums);

    for (let album of albums) {
        const albumEl = renderAlbums(album);
      //create a render function that is given an album's worth of data and returns a div to append to discog
        console.log(albumEl);
        discog.append(albumEl);
    }
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
