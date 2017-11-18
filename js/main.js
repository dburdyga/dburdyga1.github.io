// var hamburger-menu-link = document.getElementById('block')
// var button = document.getElementById('button')

$(document).ready(function(){
    // $(".nav").toggleClass('nav--visible');
    $(".hamburger-menu-link").click(function(){
    $(".hamburger-menu-link_img").toggleClass('hamburger-menu-link_img--visible')
    $(".nav").toggleClass('nav--visible');
    });
});

$(document).ready(function(){
    
    $(".hamburger-menu-link").click(function(){
        console.log('ok')
         $(".header__menu").toggleClass('header__menu--visible');
    });
});


$(document).ready(function(){
    $(".hamburger-menu-link").click(function(){
        console.log('ok')
           $(".header__logo ").toggleClass('header__logo--visible');
    });
});



// $(document).ready(function(){
//     $(".nav").toggleClass('nav--close');
//     $(".hamburger-menu-link_img").click(function(){
       
//         $(".nav").closest('nav--close');
//     });
// });
 
// $(document).ready(function(){
    // $(".header__menu").toggleClass('header__menu--close');
    // $(".hamburger-menu-link_img").click(function(){
       
        // $(".header__menu").closest('header__menu--close');
    // });
// });
 


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