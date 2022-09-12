//Nav bar
let nabbtn = document.getElementById("navbtn");
let nav = document.getElementById("menuitem");
let cross = document.getElementById("cross")


function shownav(){
    console.log("show nav")
    nav.style.transform = "translate(0%)"
    nabbtn.style.display="none"
    cross.style.display = "block"
}
function hidenav(){
    console.log("show nav")
    nav.style.transform = "translate(100%)"
    nabbtn.style.display="block"
    cross.style.display = "none"
}

//Form setting
let line = document.getElementById("indicator");
let login_form = document.getElementById("loginForm");
let signup_form = document.getElementById("ragester")

function indicator(){

}

function login(){
    console.log('login')
    signup_form.style.display="none"
    login_form.style.display ="block"
    login_form.style.left="0px"
    line.style.transform="translate(0%)"
}

function signup(){
    console.log('signup')
    login_form.style.display="none"
    signup_form.style.display="block"
    line.style.transform="translate(100%)"


}


// prodect-galary

let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("smallImg");

 smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}


//Nav 