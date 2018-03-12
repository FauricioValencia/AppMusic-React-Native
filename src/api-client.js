const URL ='https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=3322be7e1c8baa3156a23d9baebaf09e&format=json';

function getArtists (){
    
    return fetch(URL)
    .then(response  =>  response.json())
    .then( data     =>  data.topartists.artist)
    .then(artists   =>  artists.map(artist   =>  {
        return {
            name:artist.name,
            image: artist.image[3]['#text'],
            likes:200,
            comments:14
        }
    }))
}

export {getArtists}