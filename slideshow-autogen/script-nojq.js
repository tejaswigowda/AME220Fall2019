var allImages = [];

var currentSlide = 1;
var startEmbed = function()
{
  allImages = location.hash.replace("#","").split(",");
  startAux();
}

var startEmbednoJQ = function()
{
  allImages = location.hash.replace("#","").split(",");
  startAux();
}

var start = function()
{
  allImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pied-winged_swallow_%28Hirundo_leucosoma%29.jpg/1280px-Pied-winged_swallow_%28Hirundo_leucosoma%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Rufous-tailed_flycatcher_%28Myiarchus_validus%29.JPG/1024px-Rufous-tailed_flycatcher_%28Myiarchus_validus%29.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bare-faced_curassow_%28Crax_fasciolata%29_female_head.JPG/1024px-Bare-faced_curassow_%28Crax_fasciolata%29_female_head.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Savanna_hawk_%28Buteogallus_meridionalis%29.JPG/800px-Savanna_hawk_%28Buteogallus_meridionalis%29.JPG'
];
  startAux();
}


function startAux()
{
  var markup = "";
  for(var i = 0; i < allImages.length; i++){
    var imgURL = allImages[i];
    markup = markup + "<div class='slide' style='background-image:url(" + imgURL + ")'></div>";
  }

  /*
  var i = 0;
  while(i < allImages.length){
    var imgURL = allImages[i];
    markup = markup + "<div class='slide' style='background-image:url(" + imgURL + ")'></div>";
    i = i + 1;
  }
   */
 // $("#ssContainer").html(markup);
  document.getElementById("ssContainer").innerHTML = markup;

  var markup1 = "";
  for(var i = 0; i < allImages.length; i++){
    markup1 = markup1 + '<button onclick="goToSlide(' + (i + 1) + ',1000)">' + (i + 1) + '</button>';
  }
  //$("#numContainer").html(markup1);
  document.getElementById("numContainer").innerHTML = markup1;
  


  goToSlide(1, 0);
}

var ani = "swipe";

var goToSlide = function(n, d)
{
  d = d || 0;
  if(ani === "fade"){
    //$("#ssContainer .slide").stop().fadeOut(d);
    //$("#ssContainer .slide:nth-of-type(" + n + ")").stop().fadeIn(d);
    var slideElements = document.getElementById("ssContainer").getElementsByClassName("slide");
    for(var i = 0; i < slideElements.length; i++){
      var ele = slideElements[i];
      ele.style.transitionDuration = d + "ms";
      if( n == (i+1) ){
        ele.style.opacity = 1;
      }
      else{
        ele.style.opacity = 0;
      }
    }
  }
 else{
    if(n > currentSlide){ // swipe left
      var slideElements = document.getElementById("ssContainer").getElementsByClassName("slide");
      for(var i = 0; i < slideElements.length; i++){
        slideElements[i].style.transitionDuration = d + "ms";
        if(n == (i + 1)){
          slideElements[i].style.transitionDuration = "0ms";
          slideElements[i].style.marginLeft = "100%";
          var x = slideElements[i];
          setTimeout(function(){
            x.style.transitionDuration = d + "ms";
            x.style.opacity = 1;
            x.style.marginLeft = "0%";
          }, 100);
        }
        else{
          slideElements[i].style.opacity = 0;
          slideElements[i].style.marginLeft = "-100%";
        }
      }
      /*
      $("#ssContainer .slide").stop().animate({"margin-left":"-100%"}, d);
      $("#ssContainer .slide:nth-of-type(" + currentSlide + ")").stop().animate({"margin-left":"-100%", "opacity":0}, d);
      $("#ssContainer .slide:nth-of-type(" + n + ")").stop().css({"opacity":"0"}).css({"margin-left":"100%"}).animate({"opacity":"1","margin-left":"0%"}, d);
     */
    }
    else{  // swipe right
    var slideElements = document.getElementById("ssContainer").getElementsByClassName("slide");
      for(var i = 0; i < slideElements.length; i++){
        slideElements[i].style.transitionDuration = d + "ms";
        if(n == (i + 1)){
          slideElements[i].style.transitionDuration = "0ms";
          slideElements[i].style.marginLeft = "-100%";
          var x = slideElements[i];
          setTimeout(function(){
            x.style.transitionDuration = d + "ms";
            x.style.opacity = 1;
            x.style.marginLeft = "0%";
          }, 100);
        }
        else{
          slideElements[i].style.opacity = 0;
          slideElements[i].style.marginLeft = "-100%";
        }
      }
      /*
      $("#ssContainer .slide").stop().animate({"margin-left":"-100%"}, d);
      $("#ssContainer .slide:nth-of-type(" + currentSlide + ")").stop().animate({"margin-left":"100%", "opacity": 0}, d);
      $("#ssContainer .slide:nth-of-type(" + n + ")").stop().css({"opacity":0,"margin-left":"-100%"}).animate({"opacity":1,"margin-left":"0%"}, d);
      */
    }
  }

  //$("#numContainer button").removeClass("active");
  //$("#numContainer button:nth-of-type(" + n + ")").addClass("active");
    var numElements = document.getElementById("numContainer").getElementsByTagName("button");
    for(var i = 0; i < numElements.length; i++){
      var ele = numElements[i];
      if( n == (i+1) ){
        ele.className = "active";
      }
      else{
        ele.className = "";
      }
    }

  currentSlide = n;
}


var goNext = function()
{
  var n = currentSlide + 1;
  if (n > allImages.length){
    n = 1;
  } 
  goToSlide(n, 1000);
}

var goPrev = function()
{
  var n = currentSlide - 1;
  if (n < 1){
    n = allImages.length;
  } 
  goToSlide(n, 1000);
}
