$(document).ready(function(){

  var muArray = []; //array created from data.mu
  //var currentPerson; //current person string
  var number = 0; //a number equal to the array index which is also equal to element id

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        muArray = data.mu;
        showPerson();
        createPerson();
      }
    });

      //on document ready...next/previous buttons and personContainer (holds person boxes) is created on DOM
      $('body').append('<button class="next">next</button><button class="previous">previous</button>');
      $('body').append('<div class="personContainer"></div>');

      //create person info message box
      $('body').append('<div class="personInfo"></div>');
      var $el = $('body').children().last();
      $el.append('<p class="name"></p>' + '<p class="git"></p>' + '<p class="shoutout"></p>');

      //function to create person boxes..person boxes are the yellow/red boxes that line the bottom
      function createPerson() {
        for(var i = 0; i < muArray.length; i++) {
          $('body').append('<div data-id="' + i + '" class="person"></div>');
        }
      }

      //clicking on "next" button..increment number, remove old DOM info, rerun showperson()
      $('body').on('click', '.next', function() {
        number++;
        if(number > 21) {
          number = 0;
        }
        console.log(number);
        showPerson();
        $('body').find('.person').css({'background-color': 'yellow'});
        //for loop for looping through to select correct person box to color * UNSOLVED
        //for(i = 0; i < muArray.length; i++) {
          //if(number = $('.person').data('id'))
        //}

      });

      //clickingn on "previous"..decrement number, remove old DOM info, rerun showPerson()
      $('body').on('click', '.previous', function() {
        number--;
        if(number < 0) {
          number = 21;
        }
        //console.log(number);
        showPerson();
      });

      //function to change color of person box from yellow/red as persons are selected
      function yellow() {
        $('body').find('.person').css({'background-color': 'yellow'});
      }

      function red() {
        if ($('personBox').hasClass('person')) {
          $(this).toggleClass('personRed');
        }
      }

      //function to display current person info
      function showPerson() {
        $('body').find('.name').text("Name: " + muArray[number].name);
        $('body').find('.git').text("github: " + muArray[number].git_username);
        $('body').find('.shoutout').text("Shoutout: " + muArray[number].shoutout);
      }

      //define and show current person
      $('body').on('click', '.person', function() {
        number = $(this).data('id');
        //currentPerson = muArray[number];
        showPerson();
        $('body').find('.person').css({'background-color': 'yellow'});
        $(this).css({'background-color': 'red'});

      });









});
