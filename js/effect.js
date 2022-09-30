$(window).load(function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function () {
    var vw;
    $(window).resize(function () {
        vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({top: 240, left: vw - vw/1}, 500);
        $('#b22').animate({top: 240, left: vw - vw/1.5}, 500);
        $('#b33').animate({top: 240, left: vw - vw/3}, 500);
        $('#b44').animate({top: 240, left: vw - vw/10}, 500);
        $('#b55').animate({top: 240, left: vw + vw/6}, 500);
        $('#b66').animate({top: 240, left: vw + vw/2}, 500);
        $('#b77').animate({top: 240, left: vw + vw/1.3}, 500);
    });

    // 开灯
    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#play').fadeIn('slow');
        });
    });

    // 播放第一首音乐
    var audio; vw = $(window).width() / 2;
    var time = 5000;
    $('#play').click(function () {
        audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color', '#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(time).promise().done(function () {
            $('#play2').fadeIn('slow');
        });
    });

    // 播放第二首音乐
    $('#play2').click(function () {
        var audio1 = $('.song1')[0];
        audio.pause();
        audio1.play();
        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    // 彩带
    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(time).promise().done(function () {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    // 第一个气球
    function loopOne() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopOne();
        });
    }

    // 第二个气球
    function loopTwo() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopTwo();
        });
    }

    // 第三个气球
    function loopThree() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopThree();
        });
    }

    // 第四个气球
    function loopFour() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopFour();
        });
    }

    // 第五个气球
    function loopFive() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopFive();
        });
    }

    // 第六个气球
    function loopSix() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopSix();
        });
    }

    // 第七个气球
    function loopSeven() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopSeven();
        });
    }

    // 来点气球
    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({top: -vw}, 8000);
        $('#b1,#b3,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b4,#b6').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();

        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    // 来个蛋糕
    $('#cake_fadein').click(function () {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#light_candle').fadeIn('slow');
        });
    });

    // 点燃蜡烛
    $('#light_candle').click(function () {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function () {
            $('#wish_message').fadeIn('slow');
        });
    });

    // 许下愿望
    $('#wish_message').click(function () {
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22')
        $('#b3').attr('id', 'b33')
        $('#b4').attr('id', 'b44')
        $('#b5').attr('id', 'b55')
        $('#b6').attr('id', 'b66')
        $('#b7').attr('id', 'b77')
      $('#b11').animate({top: 240, left: vw - vw/1}, 500);
      $('#b22').animate({top: 240, left: vw - vw/1.5}, 500);
      $('#b33').animate({top: 240, left: vw - vw/3}, 500);
      $('#b44').animate({top: 240, left: vw - vw/10}, 500);
      $('#b55').animate({top: 240, left: vw + vw/6}, 500);
      $('#b66').animate({top: 240, left: vw + vw/2}, 500);
      $('#b77').animate({top: 240, left: vw + vw/1.3}, 500);
        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(30000).promise().done(function () {
            $('#story').fadeIn('slow');
        });
    });

    // 查看祝福留言
    $('#story').click(function () {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function () {
            $('.message').fadeIn('slow');
        });
        var i;
        function msgLoop(i) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(1200).promise().done(function () {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(2500);
                if (i == 50) {
                    $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                        $('.cake').fadeIn('fast');
                    });
                } else {
                    msgLoop(i);
                }
            });
        }
        msgLoop(0);
    });
});