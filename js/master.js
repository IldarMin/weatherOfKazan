var month = new Array();
              month[0] = "January";
              month[1] = "February";
              month[2] = "March";
              month[3] = "April";
              month[4] = "May";
              month[5] = "June";
              month[6] = "July";
              month[7] = "August";
              month[8] = "September";
              month[9] = "October";
              month[10] = "November";
              month[11] = "December";
var date = new Date();
              // header date
              $('.slide_head_m1').html(date.getDate() + ' ' + (month[date.getMonth() + 1]) + ' ' + date.getFullYear());
              $('.slide_head_m2').html((date.getDate() + 1) + ' ' + (month[date.getMonth() + 1]) + ' ' + date.getFullYear());
              $('.slide_head_m3').html((date.getDate() + 2) + ' ' + (month[date.getMonth() + 1]) + ' ' + date.getFullYear());

              // footer date
              $('.slideshow_nav_m1').html(date.getDate() + ' ' + (month[date.getMonth() + 1]));
              $('.slideshow_nav_m2').html((date.getDate() + 1) + ' ' + (month[date.getMonth() + 1]));
              $('.slideshow_nav_m3').html((date.getDate() + 2) + ' ' + (month[date.getMonth() + 1]));

var firstLetter = function(el){
      a = el.slice(0 , 1).toUpperCase();
      b = el.substring(1);
      return a+b;
    },
    celsiusDegree = function(el){
      return Math.round(el - 273.15);
};

$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?id=551487&appid=0aad3f96d1c89f9594e7ea7e08b72cf3", function(json) {
    var one = json.list[0],
        two = json.list[1],
        three = json.list[2];

        // weather description
    $('.slide_wr_head_m1').html(firstLetter(one.weather[0].description));
    $('.slide_wr_head_m2').html(firstLetter(two.weather[0].description));
    $('.slide_wr_head_m3').html(firstLetter(three.weather[0].description));

        //  temp of a day
    $('.slide_wr_footer_m1').html((celsiusDegree(one.temp.max)));
    $('.slide_wr_footer_m2').html((celsiusDegree(two.temp.max)));
    $('.slide_wr_footer_m3').html((celsiusDegree(three.temp.max)));
        //  city
    $('#slideshow_wrapper_city').html(json.city.name);

    // image for weather
    $('.slideshow_wrapper_image_m1').attr("src", "/images/"+one.weather[0].main+".svg");
    $('.slideshow_wrapper_image_m2').attr("src", "/images/"+two.weather[0].main+".svg");
    $('.slideshow_wrapper_image_m3').attr("src", "/images/"+three.weather[0].main+".svg");

    // image for navigate
    $('.slideshow_nav_img_m1').attr("src", "/images/"+one.weather[0].main+".svg");
    $('.slideshow_nav_img_m2').attr("src", "/images/"+two.weather[0].main+".svg");
    $('.slideshow_nav_img_m3').attr("src", "/images/"+three.weather[0].main+".svg");

    // console.log(json);
});

$('a', '#slideshow_nav').click(function (e) {
    e.preventDefault();
    var $a = $(this),
        slide = $($a.attr('href')),
        wrapper = $('#slideshow_wrapper'),
        headSlider = $('#slideshow_head'),
        headWrapper = $('#slideshow_wrapper_head'),
        footerWrapper = $('#slideshow_wrapper_footer');
        // console.log("slide   ", slide.position().left);
    $a.addClass('active').siblings('a').removeClass('active');
    wrapper.animate({left: -slide.position().left}, 150, 'linear', function(){
      headWrapper.animate({left: -slide.position().left}, 200, 'linear');
      footerWrapper.animate({left: -slide.position().left}, 220, 'linear');
    });
    headSlider.animate({left: -slide.position().left}, 250, 'linear');
});
