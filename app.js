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
=======
var imgs = ['bag-busmall','banana-busmall','bathroom-busmall','boots-busmall','breakfast-busmall','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];


var allProducts= [];
var left = document.getElementById('left');
var center =document.getElementById('center');
var right =document.getElementById('right');
var container = document.getElementById('container');
var totalClicks = 0;





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
=======
var previousImageDisplay = [];

var resultList = document.getElementById('result-list');
var submitButton = document.getElementById('submit-button');


//constructor for objects
//templete literal- string literal 
// convert all images to jpg

function ImageTracker(name) {
    this.name = name;
    // this.path = 'img/' + name + '.jpg'; //this is the templete literal
    this.path = `img/${name}.jpg`;
    //     img is the string
    this.views = 0;
    this.votes = 0;
    allProducts.push(this);
}
//------this creates all of my product loops -----
for(var i = 0; i < imgs.length; i++){
    new ImageTracker(imgs[i]); // i is going through the array and selecting the individual image.
}

//-------//this is generating the random number 
function randomNum() {
    return Math.floor(Math.random() * allProducts.length); 
}

//--------this is generating random images----
function threeRandomImages() {
//----------for each empty img tag assign a random .src attribute 
    var ranIndexes =[];    
    
        ranIndexes[0]=randomNum();
        ranIndexes[1]=randomNum();
        ranIndexes[2]=randomNum();
    
    // this is randomizing the images. Its going through this loop to make sure that no photos loaded again
    while (ranIndexes[0] === ranIndexes[1] || ranIndexes[0] === ranIndexes[2] || ranIndexes[1] === ranIndexes[2] || previousImageDisplay.includes(ranIndexes[0])|| previousImageDisplay.includes(ranIndexes[1]) || previousImageDisplay.includes(ranIndexes[2])) {
        ranIndexes[0] = randomNum();
        ranIndexes[1] = randomNum();
        ranIndexes[2] = randomNum();
        console.log('duplicate prevented');
    }
    
    //////////------------------ Randomimages--------
    console.log("previousImageDisplay", previousImageDisplay);
    previousImageDisplay =[];

    left.src = allProducts[ranIndexes[0]].path;
    previousImageDisplay.push(ranIndexes[0]);

    center.src = allProducts[ranIndexes[1]].path;
    previousImageDisplay.push(ranIndexes[1]);

    // console.log(allProducts[ranIndexes[2]].path);
    
    right.src = allProducts[ranIndexes[2]].path;
    previousImageDisplay.push(ranIndexes[2]);
    console.log("current display",previousImageDisplay);
    
    left.title = allProducts[ranIndexes[0]].name;
    center.title = allProducts[ranIndexes[1]].name;
    right.title = allProducts[ranIndexes[2]].name;
    
    allProducts[ranIndexes[0]].views++
    allProducts[ranIndexes[1]].views++
    allProducts[ranIndexes[2]].views++ 
//console.log(allProducts[ranIndexes[0]].path);
}

//------------event handler-------
function handleClick(event){
    if (event.target.id === 'container') {
        return alert('Click on images, please!');
    }
    console.log(event.target.title);
    for (var i = 0; i <allProducts.length; i++){
        if (event.target.title === allProducts[i].name){
            allProducts[i].votes++;
        }
    }

    totalClicks++; //here so that if the user clicks outside the box it will not count towards the 25 clicks.
    console.log(totalClicks, 'total clicks');

    if (totalClicks > 19) {
        alert('You are out clicks!');
        container.removeEventListener('click',handleClick);
        submitButton.style.display ='block';
       createResultList();
    }
    

    //console.log(event.target, 'was clicked');
    threeRandomImages();
    
    
}

threeRandomImages();

container.addEventListener('click', handleClick);






function createResultList(){
    var ulEl = document.getElementById('list');
    for (var i = 0; i< allProducts.length;i++){
        var liEl = document.createElement('li');
        liEl.textContent = allProducts[i].votes + ' votes for the ' + allProducts[i].name;
        ulEl.appendChild(liEl);
    }
}


//     for(var i = 0; i < imgs.length; i++) {
    //         imgObjs.push(new ImageTracker(imgs[i]));
    //     }       
    
    
    // var imgEl1 = document.getElementById('imgone');
    // var imgEl2 = document.getElementById('imgtwo');
    // var imgEl3 = document.getElementById('imgthree');
    
    // //-----Generating Random number------//
    
    // //var pictureEl = document.getElementById('picture box');
    // var imgEl1 = document.getElementById('imgone');
    // var imgEl2 = document.getElementById('imgtwo');
    // var imgEl3 = document.getElementById('imgthree');
    
    
    // var numPhoto = ['imgone','imgtwo','imgthree']
    
    
    // //created a loop to show up 3 seperate photos place where I'm unsure
    // function imgShow() {
        //     for (var a = 0; a < 3; a ++){
            //         document.getElementById(numPhoto[a]).src = 'img/'+imgObjs[randomNum()].path;
            
            //     }
            
            // }
            // imgShow();
            //-------this is to be able to create a random function 
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

