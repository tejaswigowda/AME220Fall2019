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

var ani = "fade";
var usejQ = false;

var goToSlide = function(n, d)
{
  d = d || 0;
  if(ani === "fade"){
    $("#ssContainer .slide").stop().fadeOut(d);
    $("#ssContainer .slide:nth-of-type(" + n + ")").stop().fadeIn(d);
  }
 else{
    if(n > currentSlide){ // swipe left
      $("#ssContainer .slide").stop().animate({"margin-left":"-100%"}, d);
      $("#ssContainer .slide:nth-of-type(" + currentSlide + ")").stop().animate({"margin-left":"-100%", "opacity":0}, d);
      $("#ssContainer .slide:nth-of-type(" + n + ")").stop().css({"opacity":"0"}).css({"margin-left":"100%"}).animate({"opacity":"1","margin-left":"0%"}, d);
    }
    else{  // swipe right
      $("#ssContainer .slide").stop().animate({"margin-left":"-100%"}, d);
      $("#ssContainer .slide:nth-of-type(" + currentSlide + ")").stop().animate({"margin-left":"100%", "opacity": 0}, d);
      $("#ssContainer .slide:nth-of-type(" + n + ")").stop().css({"opacity":0,"margin-left":"-100%"}).animate({"opacity":1,"margin-left":"0%"}, d);
    }
  }

  $("#numContainer button").removeClass("active");
  $("#numContainer button:nth-of-type(" + n + ")").addClass("active");
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
