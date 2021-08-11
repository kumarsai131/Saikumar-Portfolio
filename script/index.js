window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
      document.querySelector(".preloader").style.display="none";
    },1000)
  })
  
var nav = document.querySelector('.nav1'), // get nav
navList = nav.querySelectorAll("li"), // get nav ul li
totalNavList = navList.length, // length of nav i.e. 4 items
section = document.querySelectorAll(".section"), // 4 sections total
totalSection = section.length; //4

for(let i=0;i<totalNavList;i++){
    const a = navList[i].querySelector("a")
    a.addEventListener('click',function(){
        for(let i=0;i<totalSection;i++)
        section[i].classList.remove("back-section")

        for(let j=0;j<totalNavList;j++){
            if(navList[j].querySelector('a').classList.contains("active"))
            section[j].classList.add("back-section")

            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add('active')
        showsection(this);
        if(window.innerWidth<1200)
            asideSectionTogglerBtn();
    })
}

function showsection(e){
    for(let i=0;i<totalSection;i++)
    section[i].classList.remove("active")

    const target = e.getAttribute("href").split('#')[1];
    document.querySelector('#'+target).classList.add("active");
}

const x = document.querySelectorAll(".fas");
const openham = x[0];
const closeham = x[1];

const navTogglerBtn=document.querySelector(".nav-toggler"),
sidebar=document.querySelector(".sidebar");

openham.addEventListener('click',function(){
  closeham.style.display = 'block'
  sidebar.classList.toggle("open")
  navTogglerBtn.classList.toggle("open");
  openham.style.display = 'none'
})

closeham.addEventListener('click',function(){
  openham.style.display = 'block'
  sidebar.classList.remove("open")
  navTogglerBtn.classList.remove("open")
  closeham.style.display = 'none'
})

function asideSectionTogglerBtn(){
  sidebar.classList.toggle("open")
  navTogglerBtn.classList.toggle("open");
  for(let i=0;i<totalSection;i++){
    section[i].classList.toggle("open");
    openham.style.display = 'block'
    closeham.style.display = 'none'
}}

function sendEmail() 
{
  window.location = "mailto:kumarsai131@gmail.com";
}

const heart = document.querySelector(".fa-heart");
heart.style.fontSize="10px";

setInterval(function(){
    var font = parseInt(heart.style.fontSize);
    font = font>15 ? font-5 : font+5;
    heart.style.fontSize = font + "px";
  
},1000);

// const arrow = document.getElementsByClassName("arrow")
// console.log(arrow)
// window.onscroll = function(){
//   scrollFunction()
// };
// function scrollFunction() {
//   if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
//     arrow[0].style.display = "block";
//   } else {
//     arrow[0].style.display = "none";
//   }
// }
// arrow[0].addEventListener("click", function(){
//   document.documentElement.scrollTop = 0;
// })