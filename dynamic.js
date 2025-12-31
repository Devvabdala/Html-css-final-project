const burger = document.querySelector(".burger");
const icon = burger.querySelectorAll("i");
const mobileMenu = document.getElementById("mobile-navigation");

burger.addEventListener("click", () =>{
   const currentState = mobileMenu.getAttribute("appear");
   if(currentState =="false"){
     mobileMenu.setAttribute("appear", "true");
     icon[0].setAttribute("appear", "false");
     icon[1].setAttribute("appear", "true");
   }
   if(currentState =="true"){
     mobileMenu.setAttribute("appear", "false");
     icon[0].setAttribute("appear", "true");
     icon[1].setAttribute("appear", "false");
   }
   
})






