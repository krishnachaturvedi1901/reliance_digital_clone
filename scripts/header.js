
// for mobile and application carosal iffect
document.getElementById("ctegry_list_mobile").addEventListener("mouseenter",()=>{
    document.getElementById("nav_mobiles").style.display = "flex";
    document.getElementById("ctegry_list_mobile").style.background = "#e42529"
})
document.getElementById("ctegry_list_mobile").addEventListener("mouseleave",()=>{
    document.getElementById("nav_mobiles").style.display = "none";
    document.getElementById("ctegry_list_mobile").style.background = "#003380"
})

// telivision carosal effect
document.getElementById("ctegry_list_telivision").addEventListener("mouseenter",()=>{
    document.getElementById("nav_TELEVISIONS").style.display = "flex";
    document.getElementById("ctegry_list_telivision").style.background = "#e42529"
})
document.getElementById("ctegry_list_telivision").addEventListener("mouseleave",()=>{
    document.getElementById("nav_TELEVISIONS").style.display = "none";
    document.getElementById("ctegry_list_telivision").style.background = "#003380"
})
// sound and speekers carosal iffect
document.getElementById("ctegry_list_HEADPHONES").addEventListener("mouseenter",()=>{
    document.getElementById("nav_HEADPHONES").style.display = "flex";
    document.getElementById("ctegry_list_HEADPHONES").style.background = "#e42529"
})
document.getElementById("ctegry_list_HEADPHONES").addEventListener("mouseleave",()=>{
    document.getElementById("nav_HEADPHONES").style.display = "none";
    document.getElementById("ctegry_list_HEADPHONES").style.background = "#003380"
})

//home application carosal iffect
document.getElementById("ctegry_list_APPLIANCES").addEventListener("mouseenter",()=>{
    document.getElementById("nav_APPLIANCES").style.display = "flex";
    document.getElementById("ctegry_list_APPLIANCES").style.background = "#e42529"
})
document.getElementById("ctegry_list_APPLIANCES").addEventListener("mouseleave",()=>{
    document.getElementById("nav_APPLIANCES").style.display = "none";
    document.getElementById("ctegry_list_APPLIANCES").style.background = "#003380"
})
//computers carosal iffect

document.getElementById("ctegry_list_COMPUTERS").addEventListener("mouseenter",()=>{
    document.getElementById("nav_COMPUTERS").style.display = "flex";
    document.getElementById("ctegry_list_COMPUTERS").style.background = "#e42529"
})
document.getElementById("ctegry_list_COMPUTERS").addEventListener("mouseleave",()=>{
    document.getElementById("nav_COMPUTERS").style.display = "none";
    document.getElementById("ctegry_list_COMPUTERS").style.background = "#003380"
})
// camra carosal iffect
document.getElementById("ctegry_list_CAMERAS").addEventListener("mouseenter",()=>{
    document.getElementById("nav_CAMERAS").style.display = "flex";
    document.getElementById("ctegry_list_CAMERAS").style.background = "#e42529"
})
document.getElementById("ctegry_list_CAMERAS").addEventListener("mouseleave",()=>{
    document.getElementById("nav_CAMERAS").style.display = "none";
    document.getElementById("ctegry_list_CAMERAS").style.background = "#003380"
})
// kitchen carosal iffect
document.getElementById("ctegry_list_KITCHEN").addEventListener("mouseenter",()=>{
    document.getElementById("nav_KITCHEN").style.display = "flex";
    document.getElementById("ctegry_list_KITCHEN").style.background = "#e42529"
})
document.getElementById("ctegry_list_KITCHEN").addEventListener("mouseleave",()=>{
    document.getElementById("nav_KITCHEN").style.display = "none";
    document.getElementById("ctegry_list_KITCHEN").style.background = "#003380"
})

//personal care carosal iffect
document.getElementById("ctegry_list_PERSONAL").addEventListener("mouseenter",()=>{
    document.getElementById("nav_PERSONAL").style.display = "flex";
    document.getElementById("ctegry_list_PERSONAL").style.background = "#e42529"
})
document.getElementById("ctegry_list_PERSONAL").addEventListener("mouseleave",()=>{
    document.getElementById("nav_PERSONAL").style.display = "none";
    document.getElementById("ctegry_list_PERSONAL").style.background = "#003380"
})
//ctegry_list_ACCESSORIES
document.getElementById("ctegry_list_ACCESSORIES").addEventListener("mouseenter",()=>{
    document.getElementById("nav_ACCESSORIES").style.display = "flex";
    document.getElementById("ctegry_list_ACCESSORIES").style.background = "#e42529"
})
document.getElementById("ctegry_list_ACCESSORIES").addEventListener("mouseleave",()=>{
    document.getElementById("nav_ACCESSORIES").style.display = "none";
    document.getElementById("ctegry_list_ACCESSORIES").style.background = "#003380"
})
//small sreen
localStorage.setItem("num",0);
document.getElementById("lishtshowbaar").onclick = ()=>{
    let num = localStorage.getItem("num");
    if(num == 0){
        document.getElementById("ctegry_list").style.display = "flex";
        localStorage.setItem("num",1);
    }
    if(num == 1){
        document.getElementById("ctegry_list").style.display = "none";
        localStorage.setItem("num",0);
    }
}
