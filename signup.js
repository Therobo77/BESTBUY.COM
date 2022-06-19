let dataArr = JSON.parse(localStorage.getItem("user-details")) || [];
document.querySelector("form").addEventListener("submit", addData);
function addData(event) {
    event.preventDefault()
    let dataObj = {
        firstName:document.querySelector("#first-name").value,
        lastName:document.querySelector("#last-name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        mobile: document.querySelector("#mobile-number").value
    }
    let password = document.querySelector("#password").value
    let confirmPassword = document.querySelector("#confirm-password").value
    if (password==confirmPassword){
        if (checkEmail(dataObj.email)) {
            dataArr.push(dataObj);
            localStorage.setItem("user-details", JSON.stringify(dataArr))
            alert("Sign Up Successful")
            window.location.href = "login.html"
        } else {
            alert("Email Already Exist")
        }
    }else{
        let warnPass = document.createElement("p");
        warnPass.innerText = "Password do not match";
        warnPass.style.color = "red";
        document.querySelector("#con-pass").append(warnPass)
    }
}
document.querySelector("#confirm-password").addEventListener("focus", function() {
    document.querySelector("#con-pass>p").innerText = ""
})
function checkEmail(email) {
    let filtered = dataArr.filter(function (el) {
        return el.email == email;
    })
    if (filtered.length > 0) {
        return false;
    } else {
        return true
    }
}



document.querySelector(".change-lb1").addEventListener("focus",function (){
    let label = document.querySelector(".lb1")
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.fontSize = "13px";
    label.style.padding = "2px"
    label.style.marginTop = "12px";
    label.style.marginLeft = "8px";
} )
// document.querySelector(".change-lb1").addEventListener("blur",function (){
//     let label = document.querySelector(".lb1")
//     label.style.fontSize = "15px";
//     label.style.marginTop = "33px";
//     label.style.marginLeft = "15px";
//     label.style.position = "absolute";
//     label.style.zIndex ="2";
//     label.style.backgroundColor = "white";
// } )

document.querySelector(".change-lb2").addEventListener("focus",function (){
    let label = document.querySelector(".lb2")
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.fontSize = "13px";
    label.style.padding = "2px"
    label.style.marginTop = "12px";
    label.style.marginLeft = "8px";
} )
// document.querySelector(".change-lb2").addEventListener("blur",function (){
//     let label = document.querySelector(".lb2")
//     label.style.fontSize = "15px";
//     label.style.marginTop = "33px";
//     label.style.marginLeft = "15px";
//     label.style.position = "absolute";
//     label.style.zIndex ="2";
//     label.style.backgroundColor = "white";
// } )

document.querySelector(".change-lb3").addEventListener("focus",function (){
    let label = document.querySelector(".lb3")
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.fontSize = "13px";
    label.style.padding = "2px"
    label.style.marginTop = "12px";
    label.style.marginLeft = "8px";
} )
// document.querySelector(".change-lb3").addEventListener("blur",function (){
//     let label = document.querySelector(".lb3")
//     label.style.fontSize = "15px";
//     label.style.marginTop = "33px";
//     label.style.marginLeft = "15px";
//     label.style.position = "absolute";
//     label.style.zIndex ="2";
//     label.style.backgroundColor = "white";
// } )

document.querySelector(".change-lb4").addEventListener("focus",function (){
    let label = document.querySelector(".lb4")
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.fontSize = "13px";
    label.style.padding = "2px"
    label.style.marginTop = "12px";
    label.style.marginLeft = "8px";
} )
// document.querySelector(".change-lb4").addEventListener("blur",function (){
//     let label = document.querySelector(".lb4")
//     label.style.fontSize = "15px";
//     label.style.marginTop = "33px";
//     label.style.marginLeft = "15px";
//     label.style.position = "absolute";
//     label.style.zIndex ="2";
//     label.style.backgroundColor = "white";
// } )

document.querySelector(".change-lb5").addEventListener("focus",function (){
    let label = document.querySelector(".lb5")
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.fontSize = "13px";
    label.style.padding = "2px"
    label.style.marginTop = "12px";
    label.style.marginLeft = "8px";
    document.querySelector("#con-pass>p").innerText = ""
} )
document.querySelector(".change-lb5").addEventListener("blur",function (){
    document.querySelector("#con-pass>p").innerText = ""
} )

document.querySelector(".change-lb6").addEventListener("focus",function (){
    let label = document.querySelector(".lb6")
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.fontSize = "13px";
    label.style.padding = "2px"
    label.style.marginTop = "12px";
    label.style.marginLeft = "8px";

} )
// document.querySelector(".change-lb6").addEventListener("blur",function (){
//     let label = document.querySelector(".lb6")
//     label.style.fontSize = "15px";
//     label.style.marginTop = "33px";
//     label.style.marginLeft = "15px";
//     label.style.position = "absolute";
//     label.style.zIndex ="2";
//     label.style.backgroundColor = "white";
// } )


document.querySelector("input[type=checkbox][name=show-password]").addEventListener("click", function(e) {
    
    let checkBox = document.querySelector("input[type=checkbox][name=show-password]")
    if (checkBox.checked == true){
        document.querySelector("input.change-lb4").setAttribute("type","text");
        document.querySelector("input.change-lb5").setAttribute("type","text");
      } else {
        document.querySelector("input.change-lb4").setAttribute("type","password");
        document.querySelector("input.change-lb5").setAttribute("type","password");
      }
})