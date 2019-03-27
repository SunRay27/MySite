
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) 
  {


var loc = window.location.pathname;
if(window.location.pathname.indexOf('/') == window.location.pathname.length-1)
{
loc+="index.html"
console.log("no index.html was found");
}

console.log(loc);
console.log(this.href);
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" && this.href.includes(loc)) 
    {
      console.log("passed though")
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
   if (!$('html, body').is(':animated'))
   {
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
    } // End if
  });
});


function ScrollToAnchor (hash)
{

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

}


