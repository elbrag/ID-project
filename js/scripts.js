
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


      for (i = 0; i < regstep.length; i++) {

        regstep[i].addEventListener("click", function() {

          $('.regstep_button.active').removeClass('active');
          $('.reg_content.active').removeClass('active');

          this.classList.toggle("active");

          var content = this.nextElementSibling;

          if (content.classList.contains('active')){
            content.classList.remove('active');
          } else {
            content.classList.add('active');
          }

        });

        }



});
