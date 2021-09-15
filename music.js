const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs = [
    {
        name: "hawayien",
        image: "musicB1",
        title: "HAWAYIEN",
        artist: "ARIJIT SINGH"
    },
    {
        name: "TeraZikr",
        image: "musicB2",
        title: "TERA ZIKR",
        artist: "DARSHAN RAVAL"
    },
    {
        name: "IshqKaRaja",
        image: "musicB3",
        title: "ISHQ KA RAJA",
        artist: "ADDY NAGAR"
    },

]

let isPlaying = false;

// for play function
const playMusic= () => {
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play', "fa-pause");
    img.classList.add("anime");
};

//for pause function
const pauseMusic= () => {
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
})

//changing the music data

const loadSong =(songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "Music/" + songs.name + ".mp3";
    img.src = "Image/" + songs.image + ".jpg";
};

songIndex= 0;
 //loadSong(songs[1]);

const nextSong = () =>{
    //songIndex++;
    songIndex = (songIndex +1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () =>{
    //  songIndex++;
    songIndex = (songIndex -1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

