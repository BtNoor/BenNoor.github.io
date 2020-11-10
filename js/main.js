$(document).ready(function() {

    $('#waypoint1').waypoint(function() {

          //Calc Dates (Pre-Course)
          var startPre = new Date(2020, 9, 1)
                endPre = new Date(2020, 10, 9) 
                today = new Date(),
                preCourse = Math.round(((today - startPre) / (endPre - startPre)) * 100);


                if (preCourse <= 0) {
                      preCourse = 0;
                } else if (preCourse >= 100) {
                      /*var i = parseInt(preCourse);
                      i = 100;
                      preCourse = i;*/
                      preCourse = 100;
                };

          //Calc Dates (Phase 1)
          var startOne = new Date(2020, 10, 9)
                endOne = new Date(2020, 11, 6)
                phaseOne = Math.round(((today - startOne) / (endOne - startOne)) * 100);

                if (phaseOne <= 0) {
                      phaseOne = 0;
                } else if (phaseOne >= 100) {
                      phaseOne = 100;
                };

          //Calc dates (Phase 2)
          var startTwo = new Date(2020, 11, 7)
                endTwo = new Date(2021, 0, 3)
                phaseTwo = Math.round(((today - startTwo) / (endTwo - startTwo)) * 100);

                if (phaseTwo <= 0) {
                      phaseTwo = 0;
                } else if (phaseTwo >= 100) {
                      phaseTwo = 100;
                };

          //Calc dates (Phase 3)
          var startThree = new Date(2021, 0, 4)
                endThree = new Date (2021, 2, 5)
                phaseThree = Math.round(((today - startThree) / (endThree - startThree)) * 100);

                if (phaseThree <= 0) {
                      phaseThree = 0;
                } else if (phaseThree >= 100) {
                      phaseThree = 100;
                };

          //Update Progress Pre
          $('.pbOne').css('width',preCourse + '%');
          $('#preCourse').text("Pre Course - " + preCourse + '%');

          //Update Progress Phase One
          $('.pbTwo').css('width',phaseOne + '%');
          $('#phaseOne').text("Remote Learning - " + phaseOne + '%');

          //Update Progress Phase Two
          $('.pbThree').css('width',phaseTwo + '%');
          $('#phaseTwo').text("Code Review - " + phaseTwo + '%')

          //Update Progress Phase Three
          $('.pbFour').css('width',phaseThree + '%');
          $('#phaseThree').text("Bootcamp - " + phaseThree + '%');
      }, {
          offset: '65%'
      }, {
            
      });

});

