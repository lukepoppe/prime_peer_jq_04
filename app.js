var string="";
var num;
var method="";
var results;
var displayResults;

$(document).ready(function() {
    $('.num').on('click', function (e) {
        e.preventDefault();
        console.log($(this).val());
        var num = $(this).val()
        string += num;
        if(method == ""){
            $('.calculationOne').children().remove();
            $('.calculationOne').append("<p>" + string + "</p>");
        } else {
           num = string;
            $('.calculationThree').children().remove();
            $('.calculationThree').append("<p>" + num + "</p>");
        }

    });

    $('.function').on('click', function (e) {
        e.preventDefault();
        console.log($(this).val());
        method = $(this).val();
        num = string;
        $('.calculationTwo').append("<p>" + method + "</p>");
        console.log(num);
        string = "";


    });
    $('.eq').on('click', function () {
        string = parseInt(string);
       num = parseInt(num);

        var numberOne = num;
        var numberTwo = string;


        console.log(numberOne);
        console.log(numberTwo);
        builder(numberOne, numberTwo, method);
        displayResults = results;
        $('.calculationFour').append("<p>"+displayResults+"</p>");
    });
});


    function builder(numberOne, numberTwo, method){
        if (method == "+"){
            results = (numberOne)+(numberTwo);
        } else if (method == "-") {
            results = (numberOne) - (numberTwo);
        }else if (method == "*") {
            results = (numberOne) * (numberTwo);
        }else if (method == "/") {
            results = (numberOne) / (numberTwo);
        } else {alert("Why you no pick method?!");

        }
        displayResults = results;
        console.log(results);
    }

