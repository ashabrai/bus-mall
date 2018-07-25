'use strict';

var imgs =['bag-busmall','banana-busmall','bathroom-busmall','boots-busmall','breakfast-busmall'
,'bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];


var allProducts= [];
var left = document.getElementById('left');
var center =document.getElementById('center');
var right =document.getElementById('right');
var container = document.getElementById('container');
var totalClicks = 0;
var previousImageDisplay = [];
var resultList = document.getElementById('result-list');
// var submitButton = document.getElementById('submit-button');

//constructor for objects
//templete literal- string literal
// convert all images to jpg
 function ImageTracker(name) {
    this.name = name;
    // this.path = 'img/' + name + '.jpg'; //this is the templete literal
    this.path = `img/${name}.jpg`;
    // img is the string
    this.votes = 0;
    this.views = 0;
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
    while (ranIndexes[0] === ranIndexes[1] || ranIndexes[0] === ranIndexes[2] || ranIndexes[1] === ranIndexes[2] || previousImageDisplay.includes(ranIndexes[0])|| previousImageDisplay.includes(ranIndexes[1]) ||previousImageDisplay.includes(ranIndexes[2])) {
    
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
        liEl.textContent = allProducts[i].votes + ' votes for the ' +
        allProducts[i].name;
        ulEl.appendChild(liEl);
    }
}
///------------------CHART

//the chart needs to have the name of the item and then the totals of clicks to show on the graph.

// var img = [];
var name = [];
var votes = [];

function updateChart(){
    for (var i = 0; i < allProducts.length; i++){
    votes[i] = allProducts[i].votes;
    name[i] = allProducts[i].name;   
    }
}

//---------to show the data in a list form 
function showPicList(){
    var picList = document.getElementById('pic-list');
    picList.innerHTML = '';
    picList.hidden = false;
    picList.textContent ='Click to hide list';
    for (var i = 0; i < allProducts.length; i++){
        var piLiEL = document.createElement ('li');
        piLiEL.textContent = allProducts[i].votes + ', ' + allProducts[i].name + 'votes';
        picList.appendChild(piLiEL);
    };
};


//-------- This is suppose to be a chart---------/
var ctx = document.getElementById('mychart').getContext('2d');
function drawChart(ctx){
    var myChart = new Chart (ctx, {
        type: 'bar',
        data:
        { 
            labels: ['bag-busmall','banana-busmall','bathroom-busmall','boots-busmall','breakfast-busmall'
            ,'bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'],
            datasets: [{
                label: 'Number of Votes',
                data: totalClicks,
                backgroundColor:[
                    'bisque', 
                    'darkgray',
                    'burlywood',
                    'lightblue',
                    'navy'
                ],
                borderWidth:1 
            }]
        },
                options: {
            // responsive: false,
            // animation: {
            //     duration: 1000,
            //     easing:'easeOutBounce'
            }
        },
    scales: {
        yAxes: [{
            ticks: {
                max: 10,
                min: 0,
                stepSize: 1.0
                beginAtZero:true
            }
        }]  
    }
}
});









// // //-------- chart creation --------------------
// function resultChart()
//  //construct arrays of names votes and views
//  //views and votes
//     var picNames = [];
//     var picVotes = [];
//     var picViews =[];
//     var picbackgroundColors = [];
    
//     for (img of allProducts) {
//     picNames.push(img.name[0]);
//     picVotes.push(img.totalClicks);
//     picViews.push(img.totalViews);
//  }
//     for(img of allProducts){ seattle-201d37
//  //Math.floor(Math.random() * allProducts.length)
    
//     var tmpColor = `rgba(${Math.floor(Math.random() * Math.floor(255))},${Math.floor(Math.random() * Math.floor(255))}, ${Math.floor(Math.random() * Math.floor(255))}, 1)`;
//  }
//     var myChart = new Chart(resultsChart, {
//             type: 'bar',
//                 data: {
//                 labels: [picNames],
//                 datasets: [{
//                 label: '# of Votes',
//                 data: totalClicks,
//                 backgroundColor: picbackgroundColors,
//                 borderColor: picbackgroundColors,
//                 borderWidth: 1
//                 }]
//                     },
//                     options: {
//                             scales: {
//                                     yAxes: [{
//                                              ticks: {
//                                      beginAtZero:true
//                                             }
//                                         }]
//                                     }
//                                 }
//                                 });
// document.getElementById('draw-chart').addEventListener('click',function() {
//  drawChart();
// });
// document.getElementById('list-button').addEventListener('click',function() {

// }