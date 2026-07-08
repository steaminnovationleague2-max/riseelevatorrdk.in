// ==============================
// RDK RISE PROGRAMME
// Elevator Pitch Gallery
// Part 1
// ==============================

const students = [

{name:"Vaibhav",file:"vaibhav.mp4"},
{name:"Namish",file:"Namish.mp4"},
{name:"Nehchal",file:"nehchalpreetkaur.mp4"},
{name:"Lisha",file:"lisha.mp4"},
{name:"Navkiran",file:"navkiran.mp4"},
{name:"Saanvi",file:"saanvi.mp4"},
{name:"Avneet",file:"avneet.mp4"},
{name:"Harleen",file:"harleen.mp4"},
{name:"9F Manpreet",file:"manpreet9f.mp4"},
{name:"Rehmat Preet",file:"rehmatpreet.mp4"},
{name:"Manuleen",file:"manuleen.mp4"},
{name:"Manpreet",file:"manpreet.mp4"},
{name:"Ananya",file:"ananya.mp4"},
{name:"Pushti",file:"pushti.mp4"},
{name:"Abhijot",file:"abhijot.mp4"},
{name:"Prince",file:"prince.mp4"},
{name:"Harsirat",file:"harsirat.mp4"},
{name:"Arshiya",file:"arshiya.mp4"},
{name:"Rehatpreet",file:"rehatpreet.mp4"},
{name:"Tanvi",file:"tanvi.mp4"},
{name:"Ridhima",file:"ridhima.mp4"},
{name:"Mansirat",file:"mansirat.mp4"},
{name:"Khushjot",file:"khushjot.mp4"},
{name:"Jasleen",file:"jasleen.mp4"},
{name:"Apsarajit",file:"apsarajit.mp4"},
{name:"Rishabh",file:"rishabh.mp4"},
{name:"Ansh",file:"ansh.mp4"},
{name:"Rydham",file:"rydham.mp4"},
{name:"Gurleen",file:"gurleen.mp4"},
{name:"Saksham",file:"saksham.mp4"},
{name:"Ekamjot",file:"ekamjot.mp4"},
{name:"Gurman",file:"gurmanpreet.mp4"},
{name:"Mukul",file:"mukul.mp4"},
{name:"Mehul",file:"mehul.mp4"},
{name:"Nikhil",file:"nikhil.mp4"},
{name:"Smriti",file:"smriti.mp4"},
{name:"Nandika",file:"nandika.mp4"},
{name:"Kavya",file:"kavya.mp4"},
{name:"Ronit",file:"ronit.mp4"},
{name:"Shubampreet",file:"shubampreet.mp4"},
{name:"Surkhpartap",file:"surkhpartap.mp4"},
{name:"Ridham Ohri",file:"ridham.mp4"},
{name:"Anch Preet",file:"anchpreet.mp4"},
{name:"Manyata",file:"manyata.mp4"},
{name:"Moulik",file:"moulik.mp4"}

];

let currentIndex = 0;

const gallery = document.getElementById("gallery");
const player = document.getElementById("playerSection");
const video = document.getElementById("videoPlayer");
const studentName = document.getElementById("studentName");

document.getElementById("totalVideos").innerText = students.length;

createGallery();

function createGallery(){

gallery.innerHTML="";

students.forEach((student,index)=>{

gallery.innerHTML+=`

<div class="studentCard" onclick="playVideo(${index})">

<div class="videoPreview">

<video
src="videos/${student.file}"
muted
preload="metadata">
</video>

<div class="playIcon">

▶

</div>

</div>

<h3>${student.name}</h3>

</div>

`;

});

}

function playVideo(index){

currentIndex=index;

player.classList.remove("hidden");

gallery.style.display="none";

document.querySelector(".counter").style.display="none";

document.querySelector(".topBar").style.display="none";

studentName.innerHTML=students[index].name;

video.src="videos/"+students[index].file;

video.load();

video.play();

window.scrollTo({

top:0,

behavior:"smooth"

});

}

document.getElementById("searchBox").addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".studentCard");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(value))

card.style.display="block";

else

card.style.display="none";

});

});
// ==============================
// PART 2
// ==============================

// Close Player
document.getElementById("closePlayer").addEventListener("click", function () {

    video.pause();

    video.currentTime = 0;

    player.classList.add("hidden");

    gallery.style.display = "grid";

    document.querySelector(".counter").style.display = "block";

    document.querySelector(".topBar").style.display = "flex";

    document.getElementById("searchBox").value = "";

    const cards = document.querySelectorAll(".studentCard");

    cards.forEach(card => {

        card.style.display = "block";

    });

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// Previous Video

document.getElementById("prevBtn").addEventListener("click",function(){

    currentIndex--;

    if(currentIndex<0){

        currentIndex=students.length-1;

    }

    playVideo(currentIndex);

});


// Next Video

document.getElementById("nextBtn").addEventListener("click",function(){

    currentIndex++;

    if(currentIndex>=students.length){

        currentIndex=0;

    }

    playVideo(currentIndex);

});


// Full Screen

document.getElementById("fullscreenBtn").addEventListener("click",function(){

    if(video.requestFullscreen){

        video.requestFullscreen();

    }

});


// Dark Mode

document.getElementById("darkBtn").addEventListener("click",function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        this.innerHTML="☀ Light Mode";

    }

    else{

        this.innerHTML="🌙 Dark Mode";

    }

});


// Keyboard Shortcuts

document.addEventListener("keydown",function(e){

    if(player.classList.contains("hidden")) return;

    if(e.key==="ArrowRight"){

        document.getElementById("nextBtn").click();

    }

    if(e.key==="ArrowLeft"){

        document.getElementById("prevBtn").click();

    }

    if(e.key==="Escape"){

        document.getElementById("closePlayer").click();

    }

    if(e.key===" "){

        e.preventDefault();

        if(video.paused){

            video.play();

        }

        else{

            video.pause();

        }

    }

});


// Auto Play Next Video

video.addEventListener("ended",function(){

    currentIndex++;

    if(currentIndex<students.length){

        playVideo(currentIndex);

    }

});


// Scroll Player Into View

video.addEventListener("loadeddata",function(){

    player.scrollIntoView({

        behavior:"smooth"

    });

});


// Mobile Friendly

window.addEventListener("resize",function(){

    if(window.innerWidth<700){

        document.querySelector(".controls").style.flexDirection="column";

    }

    else{

        document.querySelector(".controls").style.flexDirection="row";

    }

});


// Initialize Layout

window.dispatchEvent(new Event("resize"));