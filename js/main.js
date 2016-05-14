$(function() {
    
    var $window = $(window);
    
    $('section[data-type="background"]').each(function() {
        
        var $bgobj = $(this);
        
        $(window).scroll(function() {
            
            // scroll the background at var spped
            // the yPos is a negative val bc we're scrollin up!
            
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            
            // Put together our final bacground pos
            var coords = '50% '+ yPos + 'px';
            
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); // end window scroll
    });
});