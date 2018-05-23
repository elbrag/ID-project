
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
  var regstep = $('.reg_step');
  var regstep_button = $('.regstep_button');

  var regstep_button_noclick = $('.noclick');

//By default the first step is open
  regstep.first().addClass('active');



  regstep_button.click(openAcc);

    function openAcc(e){

          e.preventDefault();
          //prevent to click step 3 if no fill
          if(regstep_button.hasClass("noclick")){
            e.preventDefault();
            var error = false;
            field.removeClass("error");

            field.each(function() {
              var fieldval = $(this).val();
              if( fieldval == undefined || fieldval == null || fieldval == "" )  {
                $('.reg_step.active').removeClass('active');
                $('#step_2').addClass('active');
                $(this).addClass("error");
                error = true;
              }
            });

            field.click(function() {
              if ($(this).hasClass('error')) {
                $(this).blur( function() {
                    $(this).removeClass("error");
                });
              };
            });

            if (error == false) {
              e.preventDefault();
              $('.regstep_button').removeClass('noclick');
              getStep(e, this, "next");
            }else{
              console.log('Im here')
            }

          }else{
            regstep.removeClass('active');
            this.closest('li').classList.toggle("active");
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

// validate on validation button to prevent next step if form not filled out
var valbut = $('.validate');
valbut.on('click', function(e){
  e.preventDefault();
  var error = false;
  field.removeClass("error");

  field.each(function() {
    var fieldval = $(this).val();
    if( fieldval == undefined || fieldval == null || fieldval == "" )  {
      $('.reg_step.active').removeClass('active');
      $('#step_2').addClass('active');
      $(this).addClass("error");
      error = true;
    }
  });

  field.click(function() {
    if ($(this).hasClass('error')) {
      $(this).blur( function() {
          $(this).removeClass("error");
      });
    };
  });

  if (error == false) {
    $('.regstep_button').removeClass('noclick');
    getStep(e, this, "next");
  }else{

  }
});

//the function that runs after clicking the next/prev buttons
    function getStep(e, element, which) {

      e.preventDefault();

      $('.reg_step.active').removeClass('active');

      var parent = element.closest('li');
      var sibling = parent.previousElementSibling;

      if (which == 'next') {
        sibling = parent.nextElementSibling;
      }

      sibling.classList.add('active');

    }


//REGISTRATION FORM STUFF ---------------------------------------------------//

var field = $('#register').find("*[required]");

//JS validation of registration form

$("#register").submit( function(e) {
  e.preventDefault();

  var error = false;

  field.removeClass("error");

  field.each(function() {

    var fieldval = $(this).val();

          if( fieldval == undefined || fieldval == null || fieldval == "" )  {

            $('.reg_step.active').removeClass('active');
            $('#step_2').addClass('active');
            $(this).addClass("error");

            error = true;
          }
        });

        field.click(function() {
          if ($(this).hasClass('error')) {

            $(this).blur( function() {

                $(this).removeClass("error");

            });
          };
        });

        if (error == false) {
          $('.reg_step.active').removeClass('active');
          $('#step_4').addClass('active');

          window.setTimeout(function(){

              window.location.href = "mypage.html";

          }, 3000);

        }

});


//taking inputs from the register form fields and displaying them for the user to review

    field.blur(function() {

      var fieldname = $(this).attr('id');
      var fieldval = $(this).val();

      if ( fieldval != undefined || fieldval != null || fieldval != "" ) {

        var thefield = document.getElementById(fieldname+"_val");
        thefield.innerHTML = "";
        thefield.append(fieldval);

      }

    });



//remove bookmark click trashcan
      $('.trash').on('click', function(){
        var trashparent = this.parentElement.parentElement;
        jQuery(trashparent).fadeOut(300);
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
