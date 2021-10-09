/* eslint-disable no-undef */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 80) {
      $(".navbar").addClass("fixed");
    } else {
      $(".navbar").removeClass("fixed");
    }
  });
});
