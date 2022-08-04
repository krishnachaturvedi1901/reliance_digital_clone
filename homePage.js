import { footer } from "./footer.js";
let hp13=document.querySelector("#hp13");
hp13.innerHTML="";
hp13.innerHTML=footer();

roll1();
roll2();

class si{
    constructor(parent,arr){
        this.i=0;
        this.si=setInterval(()=>{
            if(this.i==arr.length)this.i=0;
            console.log(this.i);
            parent.src=arr[this.i].imglink;
            this.i++;
        },2000)
    }
}

async function getData(url){
    try {
        let res=await fetch(url);
        let data=await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}
async function roll1(){
    let data=await getData(`http://localhost:3000/roll1`);
    console.log(data);
    // let i=0;
    let hp2img=document.querySelector("#hp2img");
    hp2img.src="";
    let setI=new si(hp2img,data);
}

async function roll2(){
    let data=await getData(`http://localhost:3000/roll2`);
    console.log(data);
    let i=0;
    let hp2img=document.querySelector("#hp7img");
    hp2img.src="";
    let setI=new si(hp2img,data);
}

let ihp3=0;
let ihp4=0;

hp3();

async function hp3(){
    let data=await getData(`http://localhost:3000/laptop`);
    let key="laptop";
    console.log(data);
    let parent=document.querySelector("#hp3components");
    dispData(data,parent,3,key);
    console.log(ihp3,"---");
}

hp4();

async function hp4(){
    let data=await getData(`http://localhost:3000/appliances`);
    let key="appliances";
    console.log(data);
    let parent=document.querySelector("#hp4components");
    dispData(data,parent,4,key);
}

document.querySelector("#hp3btnRight").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/laptop`);
    let parent=document.querySelector("#hp3components");
    let key="laptop";
    console.log(ihp3);
    if(ihp3==5){
        parent.innerHTML="";
        for(let i=ihp3;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp3].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp3].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp3].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp3].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp3].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp3<data.length){
                a.addEventListener("click",()=>{
                    localStorage.setItem("productId",JSON.stringify(data[i].id));
                    localStorage.setItem("productKey",JSON.stringify(key));
                    console.log(data[ihp3].id);
                });
                ihp3++;
                parent.append(a);
            }
        };
    }else if(ihp3==data.length){
        ihp3=0;
        parent.innerHTML="";
        for(let i=ihp3;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp3].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp3].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp3].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp3].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp3].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp3<5){
                a.addEventListener("click",()=>{
                    localStorage.setItem("productId",JSON.stringify(data[i].id));
                    localStorage.setItem("productKey",JSON.stringify(key));
                    console.log(data[ihp3].id);
                });
                ihp3++;
                parent.append(a);
            }
        };
    }
})

document.querySelector("#hp3btnLeft").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/laptop`);
    let parent=document.querySelector("#hp3components");
    let key="laptop";
    console.log(ihp3);
    if(ihp3==5){
        parent.innerHTML="";
        for(let i=ihp3;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp3].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp3].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp3].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp3].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp3].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp3<data.length){
                a.addEventListener("click",()=>{
                    localStorage.setItem("productId",JSON.stringify(data[i].id));
                    localStorage.setItem("productKey",JSON.stringify(key));
                    console.log(data[ihp3].id);
                });
                ihp3++;
                parent.append(a);
            }
        };
    }else if(ihp3==data.length){
        ihp3=0;
        parent.innerHTML="";
        for(let i=ihp3;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp3].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp3].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp3].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp3].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp3].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp3<5){
                a.addEventListener("click",()=>{
                    localStorage.setItem("productId",JSON.stringify(data[i].id));
                    localStorage.setItem("productKey",JSON.stringify(key));
                    console.log(data[ihp3].id);
                });
                ihp3++;
                parent.append(a);
            }
        };
    }
})

document.querySelector("#hp4btnLeft").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/appliances`);
    let parent=document.querySelector("#hp4components");
    let key="appliances";
    console.log(ihp4);
    if(ihp4==5){
        parent.innerHTML="";
        for(let i=ihp4;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp4].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp4].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp4].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp4].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp4].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp4<data.length){
                a.addEventListener("click",()=>{
                    localStorage.setItem("productId",JSON.stringify(data[i].id));
                    localStorage.setItem("productKey",JSON.stringify(key));
                    console.log(data[ihp4].id);
                });
                ihp4++;
                parent.append(a);
            }
        };
    }else if(ihp4==data.length){
        ihp4=0;
        parent.innerHTML="";
        for(let i=ihp4;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp4].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp4].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp4].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp4].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp4].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp4<5){
                a.addEventListener("click",()=>{
                    localStorage.setItem("productId",JSON.stringify(data[i].id));
                    localStorage.setItem("productKey",JSON.stringify(key));
                    console.log(data[ihp4].id);
                });
                ihp4++;
                parent.append(a);
            }
        };
    }
})

document.querySelector("#hp4btnRight").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/appliances`);
    let parent=document.querySelector("#hp4components");
    let key="appliances";
    console.log(ihp4);
    if(ihp4==5){
        parent.innerHTML="";
        for(let i=ihp4;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp4].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp4].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp4].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp4].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp4].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp4<data.length){
                a.addEventListener("click",()=>{
                    localStorage.setItem("productId",JSON.stringify(data[i].id));
                    localStorage.setItem("productKey",JSON.stringify(key));
                    console.log(data[ihp4].id);
                });
                ihp4++;
                parent.append(a);
            }
        };
    }else if(ihp4==data.length){
        ihp4=0;
        parent.innerHTML="";
        for(let i=ihp4;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp4].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp4].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp4].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp4].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp4].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp4<5){
                a.addEventListener("click",()=>{
                    localStorage.setItem("productId",JSON.stringify(data[i].id));
                    localStorage.setItem("productKey",JSON.stringify(key));
                    console.log(data[ihp4].id);
                });
                ihp4++;
                parent.append(a);
            }
        };
    }
})

function dispData(data,parent,q,key){
    if(q==3){
        parent.innerHTML="";
        for(let i=ihp3;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp3].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp3].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp3].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp3].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp3].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp3<5){
                a.addEventListener("click",()=>{
                    localStorage.setItem("productId",JSON.stringify(data[i].id));
                    localStorage.setItem("productKey",JSON.stringify(key));
                    console.log(data[ihp3].id);
                });
                ihp3++;
                parent.append(a);
            }
        }
    }else if(q==4){
        parent.innerHTML="";
        for(let i=ihp4;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp4].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp4].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp4].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp4].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp4].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp4<5){
                a.addEventListener("click",()=>{
                    localStorage.setItem("productId",JSON.stringify(data[i].id));
                    localStorage.setItem("productKey",JSON.stringify(key));
                    console.log(data[ihp4].id);
                });
                ihp4++;
                parent.append(a);
            }
        }
    }
}