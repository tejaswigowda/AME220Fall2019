var currentSlide = 1;

function goToSlide(n)
{
  $(".img").fadeOut();
  $(".img:nth-of-type(" + n + ")").stop().fadeIn();
  $(".num").removeClass("selected");
  $(".num:nth-of-type(" + n + ")").addClass("selected");
  currentSlide = n;
}

function goPrev()
{
    var nextSlide = currentSlide - 1
    if(nextSlide == 0){
      nextSlide = 4;
    }
    goToSlide(nextSlide);
}


function goNext()
{
  var nextSlide = currentSlide + 1
  if(nextSlide == 5){
    nextSlide = 1;
  }
  goToSlide(nextSlide);
}



