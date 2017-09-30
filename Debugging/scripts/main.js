/*
    Read the comments and follow the instructions
    Total Points available -> 80
    Part 1 - 30 points
    Part 2 - 40 points
    Clean Code and Comments - 10 points

    Total Challenge/Bonus points -> 10
*/


/*========================
    Part 1 Fixing Code - 30
====================================*/


/*
    The code below is broken and not doing what it should.  
    
    Do your best to fix it.
    Look for:
    Wrong selectors
    Misspelling
    Variables used at the wrong time
    Wrong operators

    It uses the HTML in /debugging/index.html  

    Points Available: 30points
*/
$(document).ready(function () {


    //adds an event listener 

    document.getElementById('btnMake').addEventListener('click', build);

    function build() {
        var firstName = $('#firstName');
        var firstNameValue = firstName.val();

        var lastName = $('#lastName');
        var lastNameValue = lastName.val();

        /*invalid adds a red border around the respective input
            It also shows a hidden error message */
        if (firstNameValue === '') {
            firstName.addClass('invalid');

            var parentDiv = firstName.closest('.input-group');
            var errorSpan = parentDiv.find('.errors');
            errorSpan.show();
        }

        if (lastNameValue === '') {
            lastName.addClass('invalid');

            var parentDiv = firstName.closest('.input-group');
            var errorSpan = parentDiv.find('.errors');
            errorSpan.show();
        }
        var stateValue = $('#state').val();
        var fullName = firstNameValue + ' ' + lastNameValue;
        var userObject = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            fullname: fullName,
            state: stateValue
        };

        console.log(userObject);



    }





});



/*========================
    Part 2 Writing Functions -  10 points each
====================================*/


/*

    JavaScript function that accepts 
    one input parameter and returns the number 
    of characters in the string.

*/

function getLength(input) {
    return input.length;
}


/*
    JavaScript function that computes the sum
    all of the numbers in an array.

*/
function sumArray(input) {
    var array = input;
    var total = 0;
    for (var i in array) {
        total += array[i];
    }
    return total;
};


/*
    JavaScript function that converts a decimal
    into a percentage.


*/

function percentage(number) {
    return (number * 100) + "%";
}

/*
    JavaScript function that takes a date and adds a 
    number of days to it.

*/

function addDays(date) {
    var result = new Date(date);
    result.setDate(result.getDate() + 10);
    return result;
}


/*
    Challenge - 
    Write a javascript function to take an array of numbers
    and sorts them in ascending order.

    //Sample
    var array1 = [3, 5, 1, 10];
    console.log(sortArray(array1); //outputs [1,3,5,10]


*/











































































/*
=====================================================================
    Nothing is broken here... here be dragons
    Go away :)
*/
$(function () {
    $('#btnReset').on('click', function () {
        $('#firstName').val('John');
        $('#lastName').val('Doe');
        $('#state').val('OK');
        $('.errors').hide();
        $('.invalid').removeClass('invalid');
    });
});