document.querySelector(".btn-order").addEventListener("click",function(){
    let paymentDetails = {
        cardNum:document.querySelector("#card-num").value,
        expireMonth:document.querySelector("#month-select").value,
        expireYear:document.querySelector("#year-select").value,
        cvv:document.querySelector("#cvv-input").value,
    }
    if(paymentDetails.cardNum.length == 16 && paymentDetails.cvv.length == 3){
        document.querySelector("#payment").style.display = "block"
        document.querySelector("#place-order").style.display = "none"
    }else{
        alert("Please enter correct details")
    }
})

document.querySelector("#shopping-btn").addEventListener("click", function(){
    window.location.href = "product.html"
})

let totalprice = localStorage.getItem("Total")
console.log(totalprice)

document.querySelector("#totalFromLs").innerText = totalprice