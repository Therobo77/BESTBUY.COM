let userData = JSON.parse(localStorage.getItem("user-details")) || []
    document.querySelector("form").addEventListener("submit", loginFunc)

    function loginFunc(event) {
        event.preventDefault()
        let getEmail = document.querySelector("#email").value;
        let getPassword = document.querySelector("#password").value;
        let login = {
            Email: getEmail,
            Password: getPassword
        }

        let flag = false;
        userData.forEach(function (el) {
            if (el.email == getEmail && el.password == getPassword) {
                flag = true;
            }
        })

        console.log(login)
        if (flag) {
            localStorage.setItem("signin", JSON.stringify(login))
            alert("login successful")
            window.location.href = "product.html"
        } else if (userData == []) {
            alert("Wrong Email or Password")
        }
        else {
            alert("Wrong Email or Password")
        }
    }


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


document.querySelector("input[type=checkbox][name=show-password]").addEventListener("click", function(e) {
    
    let checkBox = document.querySelector("input[type=checkbox][name=show-password]")
    if (checkBox.checked == true){
        document.querySelector("input.change-lb4").setAttribute("type","text");
      } else {
        document.querySelector("input.change-lb4").setAttribute("type","password");
      }
})





    
