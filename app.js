console.log('shkjsjs')

// portfolio items filter

// const filterContainer = document.querySelector(".portfolio-filter")
// fikterBtns = filterContainer.children;


// aside navbar
/*

const nav = document.querySelector('.nav'),
navList = nav.querySelectorAll('li'),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection= allSection.length;

for(let i=0; i<totalNavList; i++){
const a = navList[i].querySelector("a");
a.addEventListener("click",function(){
    // renove back sectionnclass 

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section")
    }

    for(let j=0; j<totalNavList; j++){
        if(navList[j].querySelector('a').classList.contains("active")){
        //   add back section xlass 
            allSection[j].classList.add("back-section")
        }
        navList[j].querySelector("a").classList.remove("active")
    }
    this.classList.add("active")

    showSection(this);
})
}


function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active")
    }
const target = element.getAttribute("href").split("#")[1]
document.querySelector("#"+target).classList.add("active")
}



const navTogglerBtn=document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",()=>{
        asideSectionTogglerBtn();
    })
*/

// Asise navbar
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList=navList.length;
allSection=document.querySelectorAll(".section")
totalSection=allSection.length

for(let i =0; i<totalNavList; i++){
    const a = navList[i].querySelector("a")
    a.addEventListener("click",function(){
        // remove back section class 
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
        for(let j=0; j<totalNavList;j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                // add back section class 
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove('active')
        }
        this.classList.add("active")

        showSection(this);

        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element){
      for(let i=0; i<totalSection; i++){
          allSection[i].classList.remove("active");
      }
     const target= element.getAttribute("href").split("#")[1]
     document.querySelector("#"+target).classList.add("active")
    }


    const navTogglerBtn=document.querySelector(".nav-toggler"),
    aside=document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",() =>{
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
      for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
      }
    }

    