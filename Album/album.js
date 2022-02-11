import { getAlbum } from '../fetch-utils.js';
import { renderAlbum } from '../render-utils.js';

//load eventlistener that gets an album from getalbum, passing an Id number we get from a windows search param. that single album is passed through renderAlbum which returns a div and we append that to our main thing here. 

const albumDiv = document.getElementById('album');

window.addEventListener('load', async() => {

    const params = new URLSearchParams(window.location.search);

    const album = await getAlbum(params.get('id'));
    console.log(album);
    const albumEl = renderAlbum(album);

    albumDiv.append(albumEl);
});

