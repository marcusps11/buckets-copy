$(initialize);

function initialize(){
  toggleSideBar();
  // $('#back-arrow').on("click", toggleSidebarImage)
}

function toggleSideBar(){
  $("#back-arrow").on("click", function() {
    event.preventDefault();
    $('.sidebar').toggleClass("menu-hidden");
  });
}

// function toggleSidebarImage(){

//   if ($('.sidebar').hasClass('not-hidden')){
//     $('.sidebar').addClass('menu-hidden')
//   } else {
//     $('.sidebar').removeClass('menu-hidden')
//   }
// }