$( document ).ready(function() {

    $('#btn-all').on("click", function() {
         $('.grid-item').show();
     });
    
    $('.btn').on("click", function() {
          $('.grid-item').hide();
          $($(this).data('show')).show();
     });


  // Add active class to the current button (highlight it)
  var header = document.getElementById("grid-filter");
  var btns = header.getElementsByClassName("grid_btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("myHeader");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      document.getElementById("portfolio").classList.add("portfolio");
    } else {
      header.classList.remove("sticky");
      document.getElementById("portfolio").classList.remove("portfolio");
    }
  }

});