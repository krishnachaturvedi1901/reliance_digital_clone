let product=JSON.parse(localStorage.getItem("product"))

`http://localhost:3000/${product.productKey}? &id=${product.productId}`
// let x = {
//             "id" :8,
//             "imglink":"https://www.reliancedigital.in/medias/ONEPLUS-43Y1S-EDGE-SMART-LED-TV-492796557-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MzIyMHxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaDI4Lzk3Nzg1NjMzMTc3OTAuanBnfGYwZTJhZWZhNTdjMzc2MTIwZGFmNzEwYmI1YzEwOWY1NGMzMGE0ZWZkNGJlNTUyMWMwODY3MzkwNGI3OTk1ZWM",
//             "name":"OnePlus 108 cm (43 inch) Full HD Android Smart LED TV with Dolby Audio Surround Sound Technology, 43Y1S Edge",
//              "MRP":33999,
//              "MRPx":"₹33,999",
//              "brand":"Oneplus",
//              "dealprice":26999,
//              "dealpricex":"₹26,999",
//              "discount": 21,
//              "page":1,
//              "discountx": "21%",
//              "saveprice" :7000,
//              "savepricex" :"₹7,000",
//              "cashback": "Yes",
//              "feature" : "HDMI",
//              "tvops":"Linux",
//              "HDMI" : 1,
//              "USB" : 2,
//              "displayTech":"OLED",
//              "displayType":"UltraHD(4K)",
//              "displaySize":"178cm",
//              "img1":"https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODYzOTV8aW1hZ2UvanBlZ3xpbWFnZXMvaGFlL2gzOC85ODEwMDU4Mzc5Mjk0LmpwZ3wwYWE2Y2UzOTE3MzU3ODI0ZjJmZjhkZGVmZTVkNzc3ODlmNzIwMjQ3N2U0ZWViMzFmOGYxMmYxZWNiZGM2NGUx",
//              "img2":"https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0ODY1Mjd8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g4Yi85ODEwNjIyMjE4MjcwLmpwZ3wwYzlkODBmOTZhOTc3ZTU0YjQ2ODQ5ZWY4MjE0ZWJjN2YzZmE2YmMyYmUxYWRhZWZjNjgyODhkMWNhYTQ2OTVk",
//             "img3":"https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTgxMDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDg3L2g3Yy85ODEwNjIyODczNjMwLmpwZ3w2MTcxN2ExMzNiNGFkMjhiMGVlMzc5MDBhMjdhZDgwNmI1Y2E1N2RlYTFjMGMxMzA2YTM2YzI2NGMzYWNjMGQ2"

// };

const displayProduct=(product)=>{
    let imgDiv=document.getElementById("bigImage")
    let imgTag=document.createElement("img")
    imgTag.src=product.imglink;
    imgDiv.append(imgTag)


    let smallImg1 = document.getElementById("threeImages")
    let imgTag1 = document.createElement("img");
    imgTag1.src=product.img1;

    let imgTag2 = document.createElement("img");
    imgTag2.src=product.img2;

    let imgTag3 = document.createElement("img");
    imgTag3.src=product.img3;
    smallImg1.append(imgTag1,imgTag2,imgTag3)

    let nameDiv=document.getElementById("productName")
    let nameTag=document.createElement("p")
    nameTag.textContent=product.name;
    nameDiv.append(nameTag)

    document.getElementById("deal").innerText =product.dealpricex;

    document.getElementById("offer").innerText = product.MRPx;

    document.getElementById("mrp").innerText =product.MRPx;
}

displayProduct(product)

// displayProduct(x)

let cartBtn=document.getElementById("addToCartDetail")
cartBtn.addEventListener("click",addToCart)

function addToCart(){

    let cartProductArr=JSON.parse(localStorage.getItem("Cart"))||[]
    cartProductArr.push(product)
    console.log(cartProductArr)
    localStorage.setItem("Cart",JSON.stringify(cartProductArr))
    window.onload(location.href="cart.html") 
}


// image iteration

let images = document.querySelectorAll("#threeImages>img");
console.log(images)
for(let i=0; i<images.length; i++){
    images[i].addEventListener("click",function(){
        document.querySelector("#bigImage>img").src=images[i].src;
    })
}