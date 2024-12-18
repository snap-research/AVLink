window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "https://homes.cs.washington.edu/~kpar/nerfies/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: false,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})


document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video[data-src]');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const source = document.createElement('source');
        source.src = video.dataset.src;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.load();
        observer.unobserve(video);
      }
    });
  });

  videos.forEach(video => observer.observe(video));
});


const resources = document.querySelectorAll('img, video');
const totalResources = resources.length;
let loadedResources = 0;
let loadingBar = document.getElementById('loading-bar');

// Update the progress bar
function updateProgressBar() {
    loadedResources++;
    let progress = (loadedResources / totalResources) * 100;
    loadingBar.style.width = progress + '%';

    if (loadedResources === totalResources) {
        // All resources have loaded
        setTimeout(function() {
            loadingBar.style.width = '100%';
            setTimeout(function() {
                loadingBar.style.display = 'none';
            }, 500);
        }, 200);
    }
}

// Attach event listeners to resources
resources.forEach(resource => {
    if (resource.tagName.toLowerCase() === 'img') {
        resource.addEventListener('load', updateProgressBar);
    } else if (resource.tagName.toLowerCase() === 'video') {
        // For videos, listen to 'loadeddata' or 'canplaythrough' events
        resource.addEventListener('loadeddata', updateProgressBar);
    }
});

// Start the progress bar when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadingBar.style.width = '0%';
});