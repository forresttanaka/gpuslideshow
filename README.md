#GPU Slideshow
***

**GpuSlideshow** is a photo slideshow jQuery plugin that takes advantage of CSS3 animations and GPU acceleration if the target browser supports it, yet it gracefully degrades to use jQuery animation for browsers not supporting CSS3 animations.

#Getting Started
***

Include both **jquery.gpuslideshow.js** and **gpuslideshow.css** in your HTML. Create a slideshow in your HTML surrounded by an element (likely a `<div>` or `<section>`) marked by a unique class or id. Initialize your slideshow with the following line (assuming the slideshow element has an id of **#slides**):

	$('#slides').gpuslideshow();

Your slideshow then begins, dissolving between slides once per second, with a transition of one second (do each transition begins just as the previous one ends — probably not the way you want, but that’s where options come in.

##Options

GpuSlideshow has two options, shown with default values here:

	$('#slides').gpuslideshow({
		'pause': 1000, //milliseconds between transitions
		'gpu': true //allow GPU acceleration
		});

If the **gpu** option is set to false, that forces the plugin to use jQuery animation instead of CSS3 animation, preventing the GPU from being used.

#License
***

The GpuSlideshow plugin is made [“public domain”](http://en.wikipedia.org/wiki/Public_domain) using [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0).