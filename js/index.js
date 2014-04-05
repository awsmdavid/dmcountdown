var end = new Date('05/19/2015 10:1 AM');

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
            document.getElementById('countdown').style.display="none";

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdowndays').innerHTML = days;
        document.getElementById('countdownhrs').innerHTML = hours;
        document.getElementById('countdownmins').innerHTML = minutes;
        document.getElementById('countdownsecs').innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);