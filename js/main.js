var timerRunning;
var time;
var interval;

function crazy(sessionTime, sessionInterval) {

    currentTime = sessionTime
    currentInterval = 1
    remainingIntervals = sessionInterval
    timerRunning = true

    minutes = Math.floor(currentTime / 60)
    seconds = currentTime % 60 ? currentTime % 60 : '00'
    $('.time').text(('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2));
    $('.interval').text((currentInterval + " / " + sessionInterval));

    timer = setInterval(function() {

        // There's still time left in this interval
        if (currentTime != 0) {

            currentTime--

            minutes = Math.floor(currentTime / 60)
            seconds = currentTime % 60 ? currentTime % 60 : '00'
            $('.time').text(('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2));
            $('.interval').text((currentInterval + " / " + sessionInterval));

        // There's no more time in this interval
        } else {

            // When there are still remaining intervals
            if (remainingIntervals != 1) {

                currentTime = time

                remainingIntervals--
                currentInterval++

                minutes = Math.floor(currentTime / 60)
                seconds = currentTime % 60 ? currentTime % 60 : '00'
                $('.time').text(('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2));
                $('.interval').text((currentInterval + " / " + sessionInterval));

            // When there are no more intervals
            } else {

                $('.restart').addClass("active");
                $('.done').addClass("active");
                $('.sound').addClass("hide");
                $('.time').text("Done!");
                clearTimeout(timer)
                timerRunning = false

            }

        }

    }, 1000);

}


$(".start").click(function() {

    if (timerRunning == true) {
        clearTimeout(timer);
    }

    time = parseInt($(this).data("seconds"));
    interval = parseInt($("input[name='interval']:checked").val());

    // Divide total time if run as a 8 interval sessin
    if (interval == 8 && time == 300) {
        time = 304
        time = time / 8;
    } else {
        if (interval == 8) {
            time = time / 8;
        }    
    }

    $(".timer-overlay").addClass("active");

    crazy(time, interval);

});

$(".restart").click(function() {
    $('.restart').removeClass("active");
    $('.done').removeClass("active");
    $('.sound').removeClass("hide");
    crazy(time, interval);
});

$(".done").click(function() {
    $(".timer-overlay").removeClass("active");
    $('.restart').removeClass("active");
    $('.done').removeClass("active");
    $('.sound').removeClass("hide");
    clearTimeout(timer);
});

$(".close-timer-overlay").click(function() {
    $(".timer-overlay").removeClass("active");
    $('.restart').removeClass("active");
    $('.done').removeClass("active");
    $('.sound').removeClass("hide");
    clearTimeout(timer);
});


// Video player

// $(".video").click(function() {
//     $(".video-player").addClass("active");
// });

// $(".close-video-player").click(function() {
//     $(".video-player").removeClass("active");
//     player.stopVideo();
// });

// $(".video-player").click(function() {
//     $(".video-player").removeClass("active");
//     player.stopVideo();
// });


