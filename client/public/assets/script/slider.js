$(document).ready(function () {
  $(".SlickCarousel").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
    autoplaySpeed: 5000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 5, // Number Of Carousel
    slidesToScroll: 3, // Slide To Move
    pauseOnHover: false,
    appendArrows: $(".container-slider .Head .Arrows"), // Class For Arrows Buttons
    prevArrow:
      '<button class="btn btn-info me-3 slide-btn mt-2"> <i class="fas fa-chevron-left me-2 "></i> </button>',
    nextArrow:
      '<button class="btn btn-info me-1 slide-btn mt-2 "> <i class="fas fa-chevron-right ms-2"></i> </button>',
    easing: "linear",
    responsive: [
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Slide To Move
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".SlickCarousel2").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    speed: 800, // Transition Speed
    slidesToShow: 8, // Number Of Carousel
    slidesToScroll: 8, // Slide To Move
    centerMode: true,
    pauseOnHover: false,
    appendArrows: $(".container-slider2 .Head2 .Arrows"), // Class For Arrows Buttons
    prevArrow:
      '<button class="btn btn-info me-3 slide-btn mt-2"> <i class="fas fa-chevron-left me-2 "></i> </button>',
    nextArrow:
      '<button class="btn btn-info me-1 slide- btn mt-2 "> <i class="fas fa-chevron-right ms-2"></i> </button>',
    easing: "linear",
    responsive: [
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, // Slide To Move
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".SlickCarousel3").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    speed: 800, // Transition Speed
    slidesToShow: 7, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move

    pauseOnHover: false,
    appendArrows: $(".container-slider3 .Head3 .Arrows"), // Class For Arrows Buttons
    prevArrow:
      '<button class="btn btn-info me-3 slide-btn mt-2"> <i class="fas fa-chevron-left me-2 "></i> </button>',
    nextArrow:
      '<button class="btn btn-info me-1 slide- btn mt-2 "> <i class="fas fa-chevron-right ms-2"></i> </button>',
    easing: "linear",
    responsive: [
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 3,
          // Slide To Move
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".SlickCarousel4").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
    autoplaySpeed: 5000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 5, // Number Of Carousel
    slidesToScroll: 3, // Slide To Move
    pauseOnHover: false,
    appendArrows: $(".container-slider4 .Head4 .Arrows4"), // Class For Arrows Buttons
    prevArrow:
      '<button class="btn btn-info me-3 slide-btn mt-2"> <i class="fas fa-chevron-left me-2 "></i> </button>',
    nextArrow:
      '<button class="btn btn-info me-1 slide-btn mt-2 "> <i class="fas fa-chevron-right ms-2"></i> </button>',
    easing: "linear",
    responsive: [
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Slide To Move
        },
      },
    ],
  });
});
