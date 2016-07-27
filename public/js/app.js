$(document).ready(function() {
  Frb.initialize();
  Frb.twitter.getTweets();
  Frb.instagram.getPhotos();
})



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
    url: 'http://frb-refactor.herokuapp.com/api/twitter'
  }).done(function(data){
      console.log(data);
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
    url: 'http://frb-refactor.herokuapp.com/api/instagram/get'
  }).done(function(data){
      console.log(data);
      Frb.instagram.showData(data);
  });
};

Frb.instagram.showData = function(data) {
  $('#instagram').append("<img class='img-responsive instagram' src=" + data.image + ">" );
  $('#caption').append("<p class='social'>" + data.caption + "</p><hr>" )
};




