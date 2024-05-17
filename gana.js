const audioElement = new Audio('1.mp3');
const masterPlay = document.getElementById('masterplay');
const myProgressBar = document.getElementById('myprogessbar');
const gif = document.getElementById('gif');
const songItems = Array.from(document.getElementsByClassName('songitem'));
const songs = [
  { songName: "Ram Siya Ram", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Half girlfriend", filePath: "songs/2.mp3", coverPath: "covers/2.jfif" },
  { songName: "Mann mera", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songName: "Sajni Re", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songName: "Barbadiya", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songName: "Valam", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  { songName: "Mehbooba", filePath: "songs/7.mp3", coverPath: "covers/7.jfif" },
  { songName: "Bol n halke", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" }
];

let songIndex = 0;

// Use arrow functions for concise code
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  // element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener('timeupdate', () => {
  const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  });
};


Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    if (audioElement.paused || audioElement.currentTime <= 0) {
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      if (previousSongIndex !== -1 && previousSongIndex !== songIndex) {
        document.getElementById(`${previousSongIndex}`).classList.remove('fa-pause-circle');
        document.getElementById(`${previousSongIndex}`).classList.add('fa-play-circle');
      }
      previousSongIndex = songIndex;
    } else {
      e.target.classList.remove('fa-pause-circle');
      e.target.classList.add('fa-play-circle');
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
    }
  });
});

document.getElementById('next').addEventListener('click', () => {
  songIndex = (songIndex >= 8)? 1 : songIndex + 1;
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

  if (previousSongIndex !== -1 && previousSongIndex !== songIndex) {
    document.getElementById(`${previousSongIndex}`).classList.remove('fa-pause-circle');
    document.getElementById(`${previousSongIndex}`).classList.add('fa-play-circle');
  }
  previousSongIndex = songIndex;

});


document.getElementById('privious').addEventListener('click', () => {
  songIndex = (songIndex <= 1)? 1 : songIndex - 1;
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
});
