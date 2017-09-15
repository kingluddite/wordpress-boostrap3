$(function() {
  // Cache the window object
  const $window = $(window);

  // Parallax background effect
  $('section[data-type="background"]').each(function() {
    const $bgObj = $(this); // assigning the object

    $(window).scroll(function() {
      // scroll the background at var speed
      // the yPos is a negative value because we are scrolling up

      const yPos = $window.scrollTop() / $bgObj.data('speed');

      // Put together our final bg position
      const coords = `50% ${yPos} px`;

      // Move the bg
      $bgObj.css({ backgroundPosition: coords });
    });
  });
});
