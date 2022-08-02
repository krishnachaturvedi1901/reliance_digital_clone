let container = document.getElementById("container")

async function fetchData(){
    try{
        let res = await fetch("http://localhost:3000/television");
        let data = await res.json()
        displayData(data)
        console.log(data);
    }catch (error){
        console.log(error);
    }
}

const displayData = (data) => {
    data.forEach((television)=>{

        let image = document.createElement("img");
        let imageDiv = document.createElement("div");
        image.src = television.imglink;
        imageDiv.append(image);
        imageDiv.id = "image";

        let name  = document.createElement("h3");
        name.innerText = television.name;

        let mrp  = document.createElement("p");
        mrp.innerText = television.MRPx;

        let dealprice  = document.createElement("p");
        dealprice.innerText = television.dealpricex;

        let discount  = document.createElement("p");
        discount.innerText = television.discountx;

        let saveprice  = document.createElement("p");
        saveprice.innerText = television.savepricex;

        let priceDiv = document.createElement("div");
        priceDiv.append(mrp,dealprice,discount,saveprice);
        priceDiv.id="priceDiv"

        let wishlist = document.createElement("div");
        let wp  = document.createElement("p");
        wp.innerText= "Wishlist";
        let hrt = document.createElement("i");
        hrt.className="fa-regular fa-heart"
        wishlist.append(hrt,wp);

        let compareDiv = document.createElement("div");
        let cp  = document.createElement("p");
        cp.innerText= "Compare";
        let sqr = document.createElement("i");
        sqr.className="fa-regular fa-square"
        compareDiv.append(sqr,cp);

        let btn = document.createElement("div");
        btn.append(compareDiv,wishlist)
        btn.id = "btnDiv"


        let div = document.createElement("div");
        div.append(imageDiv,name,priceDiv,btn);
        container.append(div)
        div.id = "productGrid"

    })
}

fetchData()
