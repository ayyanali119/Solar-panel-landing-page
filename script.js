/* Sticky Navigation - Beginning */
let navbar = $(".navbar");

$(window).scroll(function() {
  let topOfTheSecondSection = $("#section-1").offset().top - window.innerHeight;
  if ($(window).scrollTop() > topOfTheSecondSection) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});
/* Sticky Navigation - End */
/* Counter Animation - Beginning */
let counterAnimation = function (selector) {
  $(selector).each(function () {
    $(this).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: "swing",
      step: function (value) {
        $(this).text(Math.ceil(value));
      }
    });
  });
};
let i = 0;
$(window).scroll(function () {
  let topOfTheNumbersDiv = $("#numbers").offset().top - window.innerHeight;
  if (i == 0 && $(window).scrollTop() >= topOfTheNumbersDiv) {
    i++;
    counterAnimation(".rectangle > h1");
  }
});
/* Counter Animation - End */
