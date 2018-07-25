// 'use strict';

// var imgs = ['bag-busmall.jpg','banana-busmall.jpg','bathroom-busmall.jpg','boots-busmall.jpg','breakfast-busmall.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];

// var imgObjs = [];
// var backImgs = [];
// var currentImgs =[];

// function ImageTracker (img) {
//     this.name = img.split('.');
//     this.path = img;
//     this.totalClicks = 0;
//     this.timesDisplayed = 0;
//     this.beenSeen = false;
//     this.lastSeen = false;
   
// }
//     for(var i = 0; i < imgs.length; i++) {
//         imgObjs.push(new ImageTracker(imgs[i]));
//     }       

// //--------update chartdata

// // var data ={
// //     labels: names,
// //     datasets[ {
// //         data:votes,
        

// // }





//     //-----Generating Random number------//

// //var pictureEl = document.getElementById('picture box');
// var imgEl1 = document.getElementById('imgone');
// var imgEl2 = document.getElementById('imgtwo');
// var imgEl3 = document.getElementById('imgthree');


// var numPhoto = ['imgone','imgtwo','imgthree']


// function randomNum() {
//     return Math.floor((Math.random() * (imgs.length))) //this is generating the random number 
// }
// //created a loop to show up 3 seperate photos place where I'm unsure
// function imgShow() {
//     for (var a = 0; a < 3; a ++){
//         document.getElementById(numPhoto[a]).src = 'img/'+imgObjs[randomNum()].path;
    
//     }

// }
// imgShow();
// //-------this is to be able to create a random function 
// function differentImg(){
//     firstImage =imgObjs[randomNum()];
//     while(firstImage.beenSeen === true || firstImage.lastSeen === true) 
//     firstImage = imgObjs[randomNum()];
// }
// firstImage.beenSeen = true;




// function clickHandler(event){
//     for(i=0; i < imgObjs.length; i++){
//         if(imgObjs[i].name === event.target.id){
//             img0bjs[i].totalsDisplayed++;
//         }
//     // }
//     // if(counter < 20){}
        
//     //------the event listeners
//     firstProductEl.addEventListener('click', click);
//     secondProductEl.addEventListener('click', click);
//     thirdProductEl.addEventListener('click', click);
//     }