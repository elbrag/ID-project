
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

});
