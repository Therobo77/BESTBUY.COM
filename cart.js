let cartLS = JSON.parse(localStorage.getItem("cartProduct")) || [];

let totalPrice = 0;

function displayTotal(price) {
    document.querySelector(".show-total").innerText = `${price}`;
    document.querySelector(".show-total1").innerText = `${price}`;
    localStorage.setItem("Total",price); 
}

function displayCartItems(cartLS){
    totalPrice = 0;
    cartLS.forEach(function(el,index){
        let div = document.createElement("div");
        div.style.height = "200px"
        let img = document.createElement("img");
        img.setAttribute("src",el.image_url);
        img.setAttribute("width","30%");
        let name = document.createElement("span");
        name.innerText = "Product Name: " + el.name
        name.style.fontSize = "25px";
        name.style.width = "30%";
        name.style.display = "block";
        name.style.margin = "0px 0px 30px 15px"
        div.style.display = "flex";
        let price = document.createElement("span");
        price.innerText = "Price: " + el.price
        price.style.fontSize = "20px";
        let deleteCart = document.createElement("span");
        deleteCart.style.textDecoration = "none";
        deleteCart.innerText = "Remove";
        deleteCart.style.color = "blue";
        deleteCart.style.height = "10px"
        deleteCart.addEventListener("mouseover", function(e) {
            deleteCart.style.cursor = "pointer";
        })
        deleteCart.addEventListener("click", function(e){
            deleteProd(el, index)
        } )

        div.append(img,name,price,deleteCart);
        document.querySelector("#cart-items").append(div)
        totalPrice = totalPrice + el.price;
    })
    displayTotal(totalPrice)
}

function deleteProd(el, index) {
    cartLS.splice(index, 1);
    localStorage.setItem("cartProduct", JSON.stringify(cartLS));
    // displayCart(cartLS);
    window.location.href = "cart.html"
    
}

displayCartItems(cartLS)

document.querySelector(".btn-checkout").addEventListener("click", function(){
    window.location.href = "payment.html";
})