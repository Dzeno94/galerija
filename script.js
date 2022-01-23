var slike = ["https://media.istockphoto.com/photos/dream-home-luxury-house-success-suburban-house-picture-id1281554848?b=1&k=20&m=1281554848&s=170667a&w=0&h=s7X81b-3hfEGTYVkFKDOG7ZDySs57Tpw_WAETXi5xnQ=","https://image.cnbcfm.com/api/v1/image/106758801-1603459526384-picture-perfect-beautiful-house-on-the-island-of-coronado-in-sunny-california-beautifully-landscaped_t20_6lJOrv.jpg?v=1603459593&w=1600&h=900","https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519","https://charlotteaxios-charlotteagenda.netdna-ssl.com/wp-content/uploads/2021/09/509-Poindexter-axios-charlotte-hot-homes.jpg.webp","https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-23.jpg",]
var index=0;
var container= document.createElement("div");
container.style="display:flex;align-items:center";
var backButton=document.createElement("button");
backButton.onclick=back;
backButton.innerHTML="<";
backButton.style="width:20px;height:50px;"
var nextButton=document.createElement("button");
nextButton.onclick=next;
nextButton.innerHTML=">";
nextButton.style="width:20px;height:50px;"
var img= document.createElement("img");
img.src = slike[0];
img.style="width:800px;height:400px;";
document.body.appendChild(container);
container.appendChild(backButton);
container.appendChild(img);
container.appendChild(nextButton);
var div=document.createElement("div");
div.id="bottom-slider";
document.body.appendChild(div);

function switchImage(){  
    
        if(index>slike.length-1) {index=0;}
        img.src = slike[index];       
        index++;
        drawSlideImages();
        
    
    } 
    function next(){
        if(index>slike.length-1) {index=0;}
        img.src = slike[index];       
        index++;
        drawSlideImages();
    }

    function back(){
        if(index<0) {index=slike.length-1;}
        img.src = slike[index];       
        index--;
        drawSlideImages();
    }
    function drawSlideImages(){
     let bottomSlider=document.getElementById("bottom-slider");
     bottomSlider.innerHTML="";
     let backButton1=document.createElement("button");
            backButton1.onclick=back;
            backButton1.innerHTML="<";
            backButton1.style="width:20px;height:50px;"
            let nextButton1=document.createElement("button");
            nextButton1.onclick=next;
            nextButton1.innerHTML=">";
            nextButton1.style="width:20px;height:50px;"
    
     bottomSlider.style="margin-top:10px;width:840px; display:flex;align-items:center;";
     bottomSlider.appendChild(backButton1);
     for (let i = 0; i < slike.length; i++) {
         let sl=document.createElement("img");
         sl.style="width:190px;height:100px;margin-right:10px;";
         if(index==i){
             sl.style="width:190px;height:100px;margin-right:10px;border:1px solid black;";
         }
        sl.src = slike[i];
        sl.onclick=function (ev){            
            img.src=slike[i];
            index=i;
            drawSlideImages();
        } 
        bottomSlider.appendChild(sl);
         
     }
     bottomSlider.appendChild(nextButton1);
    
    }

    

    drawSlideImages();



      
setInterval(  switchImage,5000)