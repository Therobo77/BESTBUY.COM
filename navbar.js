document.querySelector(".menuBar").addEventListener("click",function(){
    myFunction(this)
});
function myFunction(x) {
  x.classList.toggle("change");
}
let menu=document.querySelector(".menuBar");
menu.addEventListener("click",display);
function display(){
    document.querySelector(".menuList").style.display="inline-block";
    let open=document.querySelector(".menuList");
    window.onclick = function(event){
        if(menu.classList.contains("change")==false){
            document.querySelector(".menuList").style.display="none";
        }
    }
}

document.querySelector("#account").addEventListener("click",function(){
    accFunction(this)
});
function accFunction(x) {
  x.classList.toggle("close");
}
let acc=document.querySelector("#account");
acc.addEventListener("click", displaybar);
    function displaybar(){
    document.querySelector(".accountList").style.display="inline-block";
    //let open=document.querySelector(".accountList");
    window.onclick = function(event){
        if(acc.classList.contains("close")==false){
        document.querySelector(".accountList").style.display="none";
        }
    }
}