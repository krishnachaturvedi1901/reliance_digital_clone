let product=JSON.parse(localStorage.getItem("idData")) || []

const displayProduct=(product)=>{
    let imgDiv=document.getElementById("bigImage")
    let imgTag=document.createElement("img")
    imgTag.src=product.imglink;
    imgDiv.append(imgTag)


    let smallImg1 = document.getElementById("threeImages")
    let imgTag1 = document.createElement("img");
    imgTag1.src=product.img1;
    smallImg1.append(imgTag1)

    let smallImg2 = document.getElementById("threeImages")
    let imgTag2 = document.createElement("img");
    imgTag2.src=product.img2;
    smallImg2.append(imgTag2)

    let smallImg3 = document.getElementById("threeImages")
    let imgTag3 = document.createElement("img");
    imgTag3.src=product.img1;
    smallImg3.append(imgTag3)

    let nameDiv=document.getElementById("productName")
    let nameTag=document.createElement("p")
    nameTag.textContent=product.name;
    nameDiv.append(nameTag)


}

displayProduct(product)

let cartBtn=document.getElementById("addToCartDetail")
cartBtn.addEventListener("click",addToCart)

function addToCart(){

    let cartProductArr=JSON.parse(localStorage.getItem("Cart"))||[]
    cartProductArr.push(product)
    console.log(cartProductArr)
    localStorage.setItem("Cart",JSON.stringify(cartProductArr))
    window.onload(location.href="cart.html") 
}