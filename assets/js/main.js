// make sure the whole page is loaded before we start doing things
$( document ).ready(function() {
    // console.log( "ready!" );

    // create a variable to hold the value of the selected answer
    var selectedAnswer;
    // console.log(selectedAnswer);

    // set the url of the back button using the data file
    $('#backButton').attr('href', $('#previous-question').val() + ".html");
    // make the next button look disabled when the page loads
    $('#nextButton').css('opacity', .5);

    // when a radio button is pressed...
    $('#question input:radio').on('click', function() {

        // set the variable to the value of the selected button
        var selectedAnswer = $(this).val();
        // show it in the console
        console.log(selectedAnswer);
        // set the url of the next button to page indicated by the selected answer
        $('#nextButton').attr('href', selectedAnswer + ".html");
        // make the next button look enabled
        $('#nextButton').css('opacity', 1);
    });

});