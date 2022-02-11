export function renderAlbums(album) {
    
    //this function is given a single object, in this case an album, we must create elements and define their contents with the values in our object. We have our HTML for our test, we will go ahead and create these elements based on that :)

    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const a = document.createElement('a');
    div.classList.add('album');

    // alright, now that we have our elements created, its time to see if our data is passing to us through our function's argument (cd). let's console log a key to see if we can get it's value.
    // console.log(album.id);
    // console.log(album.YearReleased);
    // console.log(album.Tracks.length);
    // console.log(album.Tracks.split(',').length);

    h3.textContent = album.AlbumName;
    img.src = `/assets/${album.id}.jpg`;
    p.textContent = `${album.YearReleased}, ${album.Tracks.length} tracks`;
    a.href = `/Album/?id=${album.id}`;
    
    // console.log(album.Tracks.data);

    a.append(h3, img, p);
    
    div.append(a);
    return a;
    
}

export function renderAlbum(album) {
    console.log(album);   
    const div = document.createElement('div');
    const albumName = document.createElement('h2');
    const year = document.createElement('h4');
    const albumArt = document.createElement('img');
    const ol = document.createElement('ol');
    const title = document.querySelector('title');

    div.classList.add('album');
    div.id = 'album';

    title.textContent = album.AlbumName;
    albumName.textContent = album.AlbumName;
    year.textContent = album.YearReleased;
    albumArt.src = `/assets/${album.id}.jpg`;

    console.log(album.Tracks);
    
    for (let track of (album.Tracks)) {
        console.log(album.Tracks);
        const li = document.createElement('li');
        li.textContent = track;
        ol.append(li);
    }
        
    div.append(albumName, year, albumArt, ol);
    return div;

        
}
    