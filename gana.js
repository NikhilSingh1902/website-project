let songindex=0;
let audioelement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogessbar=document.getElementById('myprogessbar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let song=[
    {songName:"Ram Siya Ram",filePath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Half girlfriend",filePath:"songs/2.mp3",coverpath:"covers/2.jfif"},
    {songName:"Hum tere bin",filePath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songName:"Duniya",filePath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName:"Barbadiya",filePath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songName:"Hum jaise jee rhe",filePath:"songs/6.mp3",coverpath:"covers/6.jfif"},
    {songName:"Mehbooba",filePath:"songs/7.mp3",coverpath:"covers/7.jfif"},
    {songName:"Bol n halke",filePath:"songs/8.mp3",coverpath:"covers/8.jpg"}
    
]
songitem.forEach((Element,i)=>{ 
    console.log(Element,i);
    Element.getElementsByTagName("img")[0].src = song[i].coverpath;
   // Element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})
masterplay.addEventListener('click',()=>{
    if( audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-paly-circle');
        masterplay.classList.add('fa-paused-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    
 })
 audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogessbar.value=progress;
 })
 myprogessbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogessbar.value*audioelement.duration/100;
 })

 const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })
 }
 Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
        classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`songs/${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
 })
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=8)
    {
        songindex=1;
    }
    else{
        songindex += 1;
    }
    audioelement.src=`songs/${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('privious').addEventListener('click',()=>{
    if(songindex<=1)
    {
        songindex=1;
    }
    else{
        songindex -= 1;
    }
    audioelement.src=`songs/${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})