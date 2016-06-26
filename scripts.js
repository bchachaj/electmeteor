/**
 * @author Benediah
 */

//Modal script
$(document).ready (function () {var bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');}

);

$(document).ready(function(){
    $("#myBtn1").click(function(){
        $("#myModal1").modal();
      
    });
});
  

//			Modal contents in Jumbotron 

//Countdown to presidential election
var end = new Date('11/8/2016 10:1 AM');

    var _millisecond = 1;
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
       
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
    //    var milliseconds = Math.floor((distance % _second) / _millisecond);
	
        document.getElementById('countdown').innerHTML = days + ' days ';
        document.getElementById('countdown').innerHTML += hours + ' hrs ';
        document.getElementById('countdown').innerHTML += minutes + ' mins ';
        document.getElementById('countdown').innerHTML += seconds + ' seconds' + ' ';
       // document.getElementById('countdown').innerHTML += milliseconds +'';
    }

    timer = setInterval(showRemaining, 10);
//function for random number generation
 var randomNumber = Math.floor(Math.random() * (999 - 000 + 1)) + 25;
   var staticNumber = "11";
   var placeholder = "5";
   var randomNumber2 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

function doSomething() {}
//function for continous updating
(function loop() {
    var rand = Math.round(Math.random() * (5000 - 1000)) + 500;
    setTimeout(function() {
            document.getElementById('speed-count').innerHTML = staticNumber + randomNumber2 + "," + randomNumber + " " + "MPH";
            doSomething();
            loop();  
    }, rand);
    
   var randomNumber = Math.floor(Math.random() * (999 - 000 + 1)) + 25;
   var staticNumber = "11";
   var placeholder = "5";
   var randomNumber2 = Math.floor(Math.random() * (7 - 5 + 1)) + 5;

  
  
}());

//Wikipedia API 

$(document).ready(function() {
	$.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Meteoroid&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
 
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#article').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });

});

$(document).ready(function() {
var d = new Date();
document.getElementById("wikidate").innerHTML = d.toDateString();

});
