/**
 * jQuery GPU Slideshow Plugin 1.0.0
 *
 * Copyright (c) 2012 Forrest Tanaka
 * http://forrest-tanaka.com/
 * https://www.facebook.com/ForrestTanakaPhotoWebMedia
 *
 * Licensed under Creative Commons Zero:
 *   http://creativecommons.org/publicdomain/zero/1.0/
 *
 * Requires:
 *   jQuery (http://jquery.com)
 *   Modernizr (http://modernizr.com) build with cssanimations detection
 *   gpuslideshow.css (included with this repo)
 */

;(function ($) {

	$.fn.gpuslideshow = function (options) {

    var settings = $.extend({
      'pause' : 1000,
      'gpu'   : true
    }, options);

		// Actual plugin functionality
		return this.each(function (i, slideshowElem) {

			var elem = this;
			// Set fader function to repeat
			if (Modernizr.cssanimations && settings.gpu) {
			
				// ID all children within the element so we can put necessary
				// CSS styling on them (mostly positioning)
				$current = $('._sgcurrent', elem);
				$(elem).children().addClass('_sgchild');
				if (0 == $current.length) {
					$(elem).children(':first').addClass('_sgcurrent');
				}

				// Trigger the following code after the pause, and
				// repeatedly after each pause duration
				setInterval(function () {
					// Remove any .sglast tags
					$last = $('._sglast', elem);
					if (0 != $last.length) {
						$last.removeClass( '_sglast' );
					}
					
					// Change the current ._sgcurrent element to ._sglast element
					$current = $('._sgcurrent', elem);
					$current.removeClass('_sgcurrent').addClass('_sglast');

					// Set the next child element to ._sgcurrent element,
					// or the first element if we're at the last one
					if (0 != $current.next('img').length) {
						$current.next().addClass('_sgcurrent');
					} else {
						$(elem).children(':first').addClass('_sgcurrent');
					}
	      }, settings.pause);
      } else {

				// ID all children within the element so we can put necessary
				// CSS styling on them (mostly positioning)
				$current = $('._scurrent', elem);
				$(elem).children().addClass('_schild').css({opacity:0});
				if (0 == $current.length) {
					$(elem).children(':first').addClass('_scurrent').animate({opacity: 1}, 1000);
				}

				// Trigger the following code after the pause, and
				// repeatedly after each pause duration
				setInterval(function () {
					$last = $('._slast', elem);
					if (0 != $last.length) {
						$last.removeClass( '_slast' );
					}
					$current = $('._scurrent', elem);
					$current.removeClass('_scurrent').addClass('_slast').animate({opacity: 0}, 1000);
					if (0 != $current.next('img').length) {
						$current.next('img').addClass('_scurrent').animate({opacity: 1}, 1000);
					} else {
						$(elem).children(':first').addClass('_scurrent').animate({opacity: 1}, 1000);
					}
	      }, settings.pause);
      }

			// Active part of slideshow; repeated every requested interval
			
		})
	}
})(jQuery);
