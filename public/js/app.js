$(document).ready(function() {
  Frb.initialize();
  Frb.twitter.getTweets();
  Frb.instagram.getPhotos();
  Frb.barMap.initialize();
  Frb.bindEvents();
});



var Frb = Frb || {};




Frb.initialize = function() {
  $('.fa-bars').on('click', function() {
    if( $(this).hasClass('open-menu') ) {
      Frb.hideMenuItems();

      setTimeout(closeMenu, 1250);
    } else {
      Frb.openMenu();
    }
  });
}

Frb.openMenu = function() {
  $('.fa-bars').removeClass('close-menu');
  $('.fa-bars').addClass('open-menu');

  $('ol').addClass('animated slideInRight').one('webkitAnimationEnd', function() {
    $(this).removeClass('animated slideInRight');
    $('ol').removeClass('hidden');
  });

  setTimeout(Frb.showMenuItems, 800);
}

Frb.closeMenu = function() {
  $('.fa-bars').removeClass('open-menu');
}

Frb.showMenuItems = function() {
  $('ol').removeClass('hidden');
}

Frb.hideMenuItems = function() {
  $('ol').addClass('animated slideOutRight').one('webkitAnimationEnd', function() {
    $(this).removeClass('animated slideOutRight');
    $(this).addClass('hidden');
  });
}

Frb.twitter = {};

Frb.twitter.getTweets = function() {
  var ajax = $.ajax({
    method: "get",
    url: 'https://frozen-stream-20171.herokuapp.com/api/twitter'
  }).done(function(data){
    // console.log(data);
    Frb.twitter.showData(data);
  });
};

Frb.twitter.showData = function(data) {
  $('#twitter').append("<p class='social'>" + data.tweets + "</p>" )
};


Frb.instagram = {};

Frb.instagram.getPhotos = function() {
  var ajax = $.ajax({
    method: "get",
    url: 'https://frozen-stream-20171.herokuapp.com/api/instagram/get'
  }).done(function(data){
    Frb.instagram.showData(data);
  });
};

Frb.instagram.showData = function(data) {
  $('#instagram').append("<img class='img-responsive instagram' src=" + data.image + ">" );
  $('#caption').append("<p class='social'>" + data.caption + "</p><hr>" )
};

Frb.barMap = {};


Frb.barMap.initialize = function() {
  Frb.barMap.addBars();
  

  window.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.525964, lng: -0.080139},
    scrollwheel: false,
    zoom: 12,
    styles: mapStyle,

  });
};


Frb.barMap.addBars = function(){
  // Making ajax call to back-end in order to retrieve json bar data
  var ajax = $.ajax({
    method: "get",
    url: 'http://localhost:3000/api/clubs'
  }).done(function(data){
    $.each(data.clubs, function(index, bar){
      Frb.barMap.markBar(bar);
      Frb.barMap.showClub(bar);


    });
  });
};

Frb.barMap.markBar = function(bar) {
  var marker = new google.maps.Marker({
    position: {lat: bar.lat, lng: bar.lng},
    map: window.map,
    title: bar.name

  });
  marker.addListener('click', function() {
    Frb.barMap.markerClick(bar, marker);
  });
};

Frb.barMap.markerClick = function(bar, marker) {
  var infowindow = new google.maps.InfoWindow({
    content:'<div class="infowindow"><h3>'+ bar.name +'</h3><h4>'+ bar.address +'</h4></div>'
  });
  if (infowindow)
    infowindow.close();
  
    infowindow.open(window.map, marker);
    $('.sidebar').scrollTo($('.scroll_'+bar._id), 1000);



};

Frb.barMap.showClub = function(club){
  $('.all-clubs').append("<div class='tile scroll_"+club._id+"'><a href='"
    +club.website+"' target='_blank'><h4>"
    +club.name+"</h4></a><h5>"+club.address
    +"</h5><div class='toolbar'><a href='"
    +club.website+"' target='_blank'>"+club.website+"</a><div class='club-image' style='background-image: url("
    +club.image+")'></div><p>"+club.description+"</p></div><hr>");
  $('.delete').addClass("logged-in");
}

Frb.bindEvents = function() {
  $(".navbar-nav>li>a").on("click", Frb.ui.toggleTab);
};

Frb.ui = {};

Frb.ui.toggleTab = function() {
  console.log('hello')
  var tab = $(this).attr("title");
  console.log(tab)
  Frb.ui.toggleDisplays(tab);
};

Frb.ui.toggleDisplays = function(id){

  $('.tab').slideUp(1000);
  $("#" + id).toggle(1000);
  
};


