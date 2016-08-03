$(initialize);

function initialize(){
  toggleSideBar();
  // $('#back-arrow').on("click", toggleSidebarImage)
}

function toggleSideBar(){
  $(".sidebar").on("click", function() {
    event.preventDefault();
    $('.sidebar').toggleClass("menu-hidden");
    $('.all-clubs').toggleClass("hide-content");
  });
}

// function toggleSidebarImage(){

//   if ($('.sidebar').hasClass('not-hidden')){
//     $('.sidebar').addClass('menu-hidden')
//   } else {
//     $('.sidebar').removeClass('menu-hidden')
//   }
// }