var aboutOpen = false;
var contactOpen = false;

$(document).ready(function () {
  ScrollToPortfolioSection(500);
  toggleAbout(500);
  toggleContact(500);
})


function ScrollToPortfolioSection(duration) {
  $('a[href^="#portfolio"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    console.log($(this));
    if (aboutOpen || contactOpen) {
      aboutOpen = false;
      contactOpen = false;
      closeAbout();
      closeContact();
      $('.landing-content').animate({
        opacity: 1
      }, 500);
    }
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}


function openAbout(duration) {
  $('#about').animate({
    left: '0'
  }, duration);
}

function closeAbout(duration) {
  $('#about').animate({
    left: '-40%'
  }, duration);
}

function openContact(duration) {
  $('#contact').animate({
    right: '0'
  }, duration)
}

function closeContact(duration) {
  $('#contact').animate({
    right: '-40%'
  }, duration)
}

function toggleAbout(duration) {
  $('a[href^="#about"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    // console.log($(this));
    if (target.length) {
      event.preventDefault();

      if (contactOpen) {
        closeContact(duration);
        contactOpen = !contactOpen;

      }

      if (!aboutOpen) {
        openAbout(duration);
        $('.landing-content').animate({
          opacity: 0.1
        }, 500);
      } else {
        closeAbout(duration);
        $('.landing-content').animate({
          opacity: 1
        }, 500);
      }

      aboutOpen = !aboutOpen;
      console.log(aboutOpen)

    }

  })
}

function toggleContact(duration) {
  $('a[href^="#contact"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();

      if (aboutOpen) {
        closeAbout(duration);
        aboutOpen = !aboutOpen;
      }

      if (!contactOpen) {
        openContact(duration);
        $('.landing-content').animate({
          opacity: 0.1
        }, 500);
      } else {
        closeContact(duration);
        $('.landing-content').animate({
          opacity: 1
        }, 500);
      }

      contactOpen = !contactOpen;
      console.log(contactOpen)

    }

  })
}

function slideInContainers() {
  $('#link').on('click', function (event) {
    var linkTo = $('#link').text();
    if (linkTo === "about") {
      var target = $('#about');
      target.css({

      });
    } else if (linkto === "contact") {
      var target = $('#about');

    }


  });
}

function goBackToTop(duration = 1000) {
  $('.backToTop').on('click', () => {
    $('html, body').animate({
      scrollTop: $('body').offset().top
    }, duration);
  });
}

$(document).scroll(function () {
  onScroll(1000);

});

function onScroll(duration) {
  // document.addEventListener("scroll",(e)=>{
  //    let element = document.body;
  // })
  var scrollPos = $(document).scrollTop() + 100;
  var landingHeight = $('.landing-wrapper').height() - 100;

  let el_span = document.querySelector('.nav > span');
  let el_navbar = document.querySelector('.navbar');
  let el_navbg = document.querySelector('.nav-container');
  if (scrollPos > landingHeight) {
    el_navbar.style.flexDirection = 'row';
    el_navbg.style.background = '#000';
    // el_navbg.style.opacity = 0.8;

  } else {
    el_navbar.style.flexDirection = 'column';
    el_navbg.style.background = 'transparent';

  }

  if (scrollPos > landingHeight + 100) {
    el_span.style.transition = "opacity 1s linear 0s";
    el_span.style.opacity = 1;
  } else {
    el_span.style.transition = "none";
    el_span.style.opacity = 0;
  }

  // if (scrollPos > landingHeight - 600) {
  //   el_btt.style.opacity = 1
  //   el_btt.style.cursor = 'pointer'
  //   el_btt.addEventListener('click', goBackToTop)
  // } else {
  //   // el_btt.style.opacity = 0
  //   el_btt.style.cursor = 'none'

  // }


}


