document.addEventListener('DOMContentLoaded', () => {
// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = guardians.map((guardian) => {
        const playlist = songs.filter(song => song.genre === guardian.genre)
             .map(song => ({ title: song.title, artist: song.artist }));
        return {
            name: guardian.name,
            playlist: playlist
        };
    });

   

   return playlists;

    // Use the map() function to create playlists for each Guardian
    // Your code here
}
const guardians = [
    {name:"Star-Lord", genre:"Rock"},
    {name:"Gamora", genre:"Pop"},
    {name:"Drax", genre:"Afrobeats"},
    {name:"Rocket", genre:"Hip hop"},
    {name:"Groot", genre:"R&B"},
    // Add preferences for Drax, Rocket, and Groot
];

// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Man Down", artist: "Rihanna", genre: "Pop" },
    { title: "All Of The Lights", artist: "Kanye West", genre: "Hip hop" },
    { title: "Kilometre", artist: "Burna Boy", genre: "Afrobeats" },
    { title: "Gbona", artist: "Burna Boy", genre: "Afrobeats" },
    { title: "Whatcha Say", artist: "Jason Derulo", genre: "Pop" },
    // Feel free to add even more songs
];


// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
console.log(playlists);

const container = document.getElementById(`playlist-container`);

playlists.forEach(({name, playlist}) => {
    const guardianDiv = document.createElement(`div`);
    guardianDiv.className = `guardian`;

    const nameElement = document.createElement(`h2`);
    nameElement.textContent = `${name}'s Playlist` ;

    guardianDiv.appendChild(nameElement);

    const playlistElement = document.createElement(`ul`);

    playlist.forEach(song => {
        const songElement = document.createElement(`li`);

        const titleElement = document.createElement(`span`);
        titleElement.textContent = song.title;
        titleElement.className = `song-title`;

        const artistElement = document.createElement(`span`);
        artistElement.textContent = ` by ${song.artist}`;
        artistElement.className = `song-artist`;

        songElement.appendChild(titleElement);
        songElement.appendChild(artistElement);
       
        playlistElement.appendChild(songElement);
    });

    guardianDiv.appendChild(playlistElement);

    container.appendChild(guardianDiv);
});

});
