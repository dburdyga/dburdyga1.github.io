// $(document).ready(function() {
//   // $(."burgers__arrow").click(function(){
//     $(".burgers__item").fancybox({
//       openEffect  : 'none',
//       closeEffect : 'none',
//       transitionEffect: 'slide',
//     });

//     $(this).next().toggleClass('burgers__item--active');
//     $(this).toggleClass('burgers__item--active');      
 

// });


 


$(document).ready(function(){
    $(".burgers__list").owlCarousel({
      navigation : true,  
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1, 
      loop:true,
      dots:false,
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false });
 
    console.log('ok');
    var owl = $('.owl-carousel');
    $('.burgers__arrow--right').click(function() {
      owl.trigger('next.owl.carousel', 1000);
    })
    $('.burgers__arrow--left').click(function() {
    owl.trigger('prev.owl.carousel', 1000);
})
    });
 





 
// $('.burgers__item').slick();


//  $(document).ready(function(){
//       $('.burgers__item').slick({
        
//       });
//     });

// // $(document).ready(function(){
// // $('.burgers__item').slick({
// //   dots: true,
// //   infinite: true,
// //   speed: 500,
// //   fade: true,
// //   cssEase: 'linear'
// // });
  
// // });

const display = $('.maincontent');
const sections = $('.section');

let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const switchMenuActiveClass = sectionEq => {
  $('.fixed-menu__item').eq(sectionEq).addClass('active')
    .siblings().removeClass('active');
}

const performTransition = sectionEq => {
  if (inScroll) return
  inScroll = true

  const position = (sectionEq * -100) + '%';

  display.css({
    'transform': `translate(0, ${position})`,
    '-webkit-transform': `translate(0, ${position})`
  })

  sections.eq(sectionEq).addClass('active')
    .siblings().removeClass('active');

  setTimeout(() => {
    inScroll = false;
    switchMenuActiveClass(sectionEq);
  }, 1300);
}

const difineSections = sections => {
  const activeSection = sections.filter('.active');
  return {
    activeSection: activeSection,
    nextSection: activeSection.next(),
    prevSection: activeSection.prev()
  }
}

const scrollToSection = direction => {
  const section = difineSections(sections)

  if (inScroll) return;

  if (direction === 'up' && section.nextSection.length) { // вниз
    performTransition(section.nextSection.index())
  }

  if (direction === 'down' && section.prevSection.length) { // вверх
    performTransition(section.prevSection.index())
  }
}

$('.wrapper').on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    let direction = (deltaY > 0) 
      ? 'up' 
      : 'down'

    scrollToSection(direction);
  },
  touchmove: e => (e.preventDefault())
});


$(document).on('keydown', e => {
  const section = difineSections(sections);

  if (inScroll) return

  switch (e.keyCode) {
    case 40: // вверх
      if (!section.nextSection.length) return;
      performTransition(section.nextSection.index());
      break;

    case 38: //вниз
      if (!section.prevSection.length) return;
      performTransition(section.prevSection.index());
      break;
  }
});

if (isMobile) {
  $(window).swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      console.log(direction);
      scrollToSection(direction);
    }
  })
}


$('[data-scroll-to]').on('click touchstart', e => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const sectionIndex = parseInt($this.attr('data-scroll-to'));

  performTransition(sectionIndex);
});












// var hamburger-menu-link = document.getElementById('block')
// var button = document.getElementById('button')

$(document).ready(function(){
    // $(".nav").toggleClass('nav--visible');
    $(".hamburger-menu-link").click(function(){
    $(".hamburger-menu-link_img").toggleClass('hamburger-menu-link_img--visible')
    $(".nav_hamburger").toggleClass('nav_hamburger--visible');
    $(".wrapper").toggleClass('wrapper--closed');
    $(".container").toggleClass('container--visible');

    });
});

$(document).ready(function(){
        $(".hamburger-menu-link").click(function(){
         $(".hamburger-menu__items ").toggleClass('hamburger-menu__items--visible');
    });
});


$(document).ready(function(){
    $(".hamburger-menu-link").click(function(){
        console.log('ok')
           $(".header__logo ").toggleClass('header__logo--visible');
    });
});


$(document).ready(function(){
    $(".burger__composition").click(function(){
        console.log('ok')
           $(".composition__table").toggleClass('composition__table--visible');
    });
});




$(document).ready(function(){
    $('.team-acco__triger').click(function(){
    $('.team-acco__triger').next().removeClass('team-acco__content--visible');
    $('.team-acco__triger').removeClass('team-acco__triger--visible');
    $(this).next().toggleClass('team-acco__content--visible');
    $(this).toggleClass('team-acco__triger--visible'); 

});
});

$(document).ready(function(){
    $('.team-acco__triger').click(function(){
    $('.team-acco__content-visible').removeClass('team-acco__content--visible');
    $(this).toggleClass('team-acco__triger');  
 
});
});



$(document).ready(function(){
 $('.review__view').click(function(){
     console.log('ok')
  $('.full-review').toggleClass('full-review--visible')
    });
});


$(document).ready(function(){
 $('.full-review__close-btn').click(function(){
     console.log('ok')
  $('.full-review').removeClass('full-review--visible')
  $('.burger__composition').toggleClass('burger__composition--visible')
    });
});




$(document).ready(function(){
    $('.menu-acco__trigger').mouseover(f_ccc);
    $('.menu-acco__triger').mouseout(function(){
        $('.menu-acco__triger').next().removeClass('menu-acco__content--visible');
        $('.menu-acco__triger').removeClass('menu-acco__trigger--visible');

    });
});
 
function f_ccc(){
    $('.menu-acco__triger').next().removeClass('menu-acco__content--visible');
    $('.menu-acco__triger').removeClass('menu-acco__triger--visible')
    $(this).next().toggleClass('menu-acco__content--visible');
    $(this).toggleClass('menu-acco__triger--visible'); 

}



 $(document).ready(function(){
    $('.composition__button').mouseover(f_bbb);
    $('.composition__button').mouseout(f_bb); 
});

function f_bbb(){
    $('.composition__table').toggleClass('composition__table--visible');
}

function f_bb(){ 
   $('.composition__table').removeClass('composition__table--visible');
}


























ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
            '</div>'
        ]
    },
    {
        latitude: 59.94,
        longitude: 30.25,
        hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
            '</div>'
        ]
    },
    {
        latitude: 59.93,
        longitude: 30.34,
        hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
            '</div>'
        ]
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/sprite.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/burger.png',
                size: [100, 100],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}