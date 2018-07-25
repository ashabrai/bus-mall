'use strict';

var imgs =['bag','banana','bathroom','boots','breakfast'
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
 
var busMallNames = [];
var productVotes = [];

function ImageTracker(name) {
    this.name = name;
    // this.path = 'img/' + name + '.jpg'; //this is the templete literal
    this.path = `img/${name}.jpg`;
    // img is the string
    this.votes = 0;
    this.views = 0;
    allProducts.push(this);
    
    busMallNames.push(this.name);
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
        if (totalClicks > 24) {
        //putting all the votes in its own array.
        for (var k = 0; k < allProducts.length; k++) {
        //pushing the votes object in its own array
        productVotes.push(allProducts[k].votes);
        }
        //dom element manipulation styling. to get ridee of the images after the last click
        left.style.display = "none";
        center.style.display = "none";
        right.style.display = "none";
        
        alert('You are out clicks!');
        container.removeEventListener('click',handleClick);// removing event listners
       
        createResultList();
        drawChart();
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

// -------- This is suppose to be a chart---------/
function drawChart(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data:
        { 
            labels: busMallNames,
            datasets: [{
                label: 'Number of Votes',
                data: productVotes,
                backgroundColor:[
                    'bisque', 
                    'darkgray',
                    'burlywood',
                    'lightblue',
                    'navy'
                ],
            
            }]
        },
                options: {
                    responsive: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    xAxes: [{
                        ticks: {
                            autoSkip: false
                        }
                    }]    
                } 
        }        
       
    });
}

