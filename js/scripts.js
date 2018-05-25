
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
  // var regstep_button = $('.regstep_button');

  // var regstep_button_noclick = $('.noclick');

//By default the first step is open
  regstep.first().addClass('active');


//when we click the blue tab, run the function
//   regstep_button.click(openAcc);
//
// //accordion function for clicking on tabs:
//     function openAcc(e){
//
//           e.preventDefault();
//           //prevent to click step 3 if no fill
//           if(regstep_button.hasClass("noclick")){
//             e.preventDefault();
//             var error = false;
//             field.removeClass("error");
//
//             //go through all required fields and run this function:
//             field.each(function() {
//
//               //the value of the fields:
//               var fieldval = $(this).val();
//
//               //if field values are not filled in, you can't leave this step (step 2)
//               if( fieldval == undefined || fieldval == null || fieldval == "" )  {
//                 $('.reg_step.active').removeClass('active');
//                 $('#step_2').addClass('active');
//                 $(this).addClass("error");
//                 error = true;
//               }
//             });
//
//             /*If we have gotten an error on a form field, clicking it and then leaving it again removes the error message, giving the user a new chance*/
//             field.click(function() {
//               if ($(this).hasClass('error')) {
//                 $(this).blur( function() {
//                     $(this).removeClass("error");
//                 });
//               };
//             });
//
//             /*The variable error is our check, since it increments when there are field errors. If it is false, we're good to go to the next step */
//             if (error == false) {
//               e.preventDefault();
//               $('.regstep_button').removeClass('noclick');
//               getStep(e, this, "next");
//
//             }else{
//               console.log('Im here')
//             }
//
//           }else{
//             regstep.removeClass('active');
//             this.closest('li').classList.toggle("active");
//           }
//
//
//       }

//--------------accordion function for next and previous buttons below

//declaring variables for the next and previous buttons
    var prevbut = $('.prevstep');
    var nextbut = $('.nextstep');


//Below are function calls getStep(e, this, "next" or "prev").
//e = the event, since we need to prevent the default behaviour
//this = we need to capture the element that was clicked
//"prev" or "next" = a string that we use to determine if we're going to the next or the previous step

//only runs when clicking previous
    prevbut.on('click', function(e){
      getStep(e, this, "prev");
    });

//only runs when clicking next.
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

  // if (error == false) {
  //   $('.regstep_button').removeClass('noclick');
  //   getStep(e, this, "next");
  // }else{
  //
  // }
});

//the function that runs after clicking the next/prev buttons
//Notice that "this" in the function call is now called element
    function getStep(e, element, which) {

      //first of all, stop default button behaviour
      e.preventDefault();

//then, the step we're already on should become inactive
      $('.reg_step.active').removeClass('active');

//find our parent <li>! (We're a variable called element, which is the button right now)
      var parent = element.closest('li');
//the sibling of our parent is the previous <li>. If we sent in "prev", that is
      var sibling = parent.previousElementSibling;

//or, if we sent in "next", the sibling of our parent is the NEXT <li>.
      if (which == 'next') {
        sibling = parent.nextElementSibling;
      }

//either way, that sibling is now the active <li>
      sibling.classList.add('active');

    }


//REGISTRATION FORM STUFF ---------------------------------------------------//

var field = $('#register').find("*[required]");

//JS validation of registration form

//We finally submit the form
$("#register").submit( function(e) {
  e.preventDefault();

//assuming from the start that there are no errors, we set this variable to false
  var error = false;

//any errors from previous attempts are removed
  field.removeClass("error");


  field.each(function() {

    var fieldval = $(this).val();

//if the field isn't correctly filled in
          if( fieldval == undefined || fieldval == null || fieldval == "" )  {

//...we cannot leave step 2. THe errors prompt the user to fill in the fields
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

//No errors, then we can
        if (error == false) {

//show that we're processing the user's input, then logging them in
          $('.regloading').addClass('loading');

//first we run this function
          window.setTimeout(function(){ loadingscreendone() }, 3000);

//...and after its timeout, we run another one
          window.setTimeout(function(){ redirect() }, 6000);

/*the first function runs after 3 seconds of the processing message. It stops the processing message, then inactivates step 3, then activates step 4 (confirmation screen)*/
          function loadingscreendone() {
            $('.regloading').removeClass('loading');
            $('.reg_step.active').removeClass('active');
            $('#step_4').addClass('active');
          }
//this function runs after having shown the "registration successful" message
          function redirect() {
            window.location.href = "mypage.html";
          }


        }

});


//taking inputs from the register form fields and displaying them for the user to review

//when leaving a form field..
    field.blur(function() {


      var fieldname = $(this).attr('id');

//we fetch the value of each field...
      var fieldval = $(this).val();

//...and unless they are empty...
      if ( fieldval != undefined || fieldval != null || fieldval != "" ) {

//...we fetch the p tags that are supposed to display what you filled in, in step 3
        var thefield = document.getElementById(fieldname+"_val");
//..empty them of what was in there before (otherwise we would have rows and rows of all the users attempts)
        thefield.innerHTML = "";
//then fills in the new value gotten from the form
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
