/* eslint-disable no-undef */
$(document).ready(function () {
  $(".navbar-toggler-css").click(function () {
    $(".navbar-collapse-css").slideToggle(300);
  });

  smallScreenMenu();
  let temp;
  function resizeEnd() {
    smallScreenMenu();
  }

  $(window).resize(function () {
    clearTimeout(temp);
    temp = setTimeout(resizeEnd, 100);
    resetMenu();
  });
});

const subMenus = $(".sub-menu-css");
const menuLinks = $(".menu-link-css");

function smallScreenMenu() {
  if ($(window).innerWidth() <= 992) {
    menuLinks.each(function (item) {
      $(this).click(function () {
        $(this).next().slideToggle();
      });
    });
  } else {
    menuLinks.each(function (item) {
      $(this).off("click");
    });
  }
}

function resetMenu() {
  if ($(window).innerWidth() > 992) {
    subMenus.each(function (item) {
      $(this).css("display", "none");
    });
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 150) {
      $(".main-wrapper-css").addClass("fixed");
    } else {
      $(".main-wrapper-css").removeClass("fixed");
    }
  });
});
