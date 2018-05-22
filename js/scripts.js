
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
      $('.trash').on('click', function(){
      var trashparent = this.parentElement.parentElement;
      trashparent.remove();

      });


});
