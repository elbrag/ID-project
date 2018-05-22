
//this is to remove the class on the hamb menu that we only need in mobile+tablet version
$(window).resize(function() {

  function windowSize() {
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        return windowWidth;
      }

      if (windowSize() > 960) {
        $('#menu-item-container').removeClass('open');
      }

});


$(document).ready(function() {


//hamburger menu opening/closing
  $('#menuicon').on('click', function(){

    $('#menu-item-container').toggleClass('open');

  });


//accordion for registration steps: https://www.w3schools.com/howto/howto_js_accordion.asp 20/5-2018
  var i;
  var regstep = $('.regstep_button');

//By default the first step is open
  $('.regstep_button:first').addClass('active');
  $('.reg_content:first').addClass('active');


        regstep.click(openAcc);

        function openAcc(e){

          e.preventDefault();

          $('.regstep_button.active').removeClass('active');
          $('.reg_content.active').removeClass('active');

          this.classList.toggle("active");

          var content = this.nextElementSibling;

          if (content.classList.contains('active')){
            content.classList.remove('active');
          } else {
            content.classList.add('active');
          }
        }

    var prevbut = $('.prevstep');
    var nextbut = $('.nextstep');

    prevbut.on('click', function(e){
      getStep(e, this, "prev");
    });

    nextbut.on('click', function(e){
      getStep(e, this, "next");
    });

//the function that runs after clicking the next/prev buttons
    function getStep(e, element, which) {

      e.preventDefault();

      $('.regstep_button.active').removeClass('active');
      $('.reg_content.active').removeClass('active');

      var parent = element.closest('li');
      var sibling = parent.previousElementSibling;

      if (which == 'next') {
        sibling = parent.nextElementSibling;
      }

      var heading = sibling.querySelectorAll('button')[0];
      var content = sibling.querySelectorAll('.reg_content')[0];


      heading.classList.add('active');
      content.classList.add('active');

    }


//remove bookmark click trashcan
// @FREDRIK - here we are trying to animate the removing of the clicked elearning with either a delay or fadeOut but it doesn't work
      $('.trash').on('click', function(){
        // $(".last-item").addClass("fadeout");
        // function sleep (miliseconds){
        //   var start = new Date().getTime();
        //   for (var i=0; i < 1e7; i++){
        //     if((new Date().getTime()- start) > miliseconds){
        //       break
        //     }
        //   }
        // }
        // setTimeout (sleep, 2000);

        var trashparent = this.parentElement.parentElement;
        trashparent.remove();
        // trashparent.fadeOut(300,function(){$(this).remove();});

      });

      // @FREDRIK -- here we want to slide the divs left or right depending on the arrow clicked but it only works once for one arrow the you have to refresh the page. Why?
      //slide links on arrow clicked
      $("a.arrow-right").on("click", function(e) {
        $(".mypagelink").addClass("slide-right");
      });

      $("a.arrow-left").on("click", function(e) {
        $(".mypagelink").addClass("slide-left");
      });
});
