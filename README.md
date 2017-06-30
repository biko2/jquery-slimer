# jquery.slimer.js #

> Simple slider with timer and progress bar.

[https://github.com/biko2/jquery-slimer](https://github.com/biko2/jquery-slimer)

### Demo

See the [jquery.slimer.js demo](https://github.com/biko2/jquery-slimer).


### Install

[jQuery](http://jquery.com/download/) is required, so include it first.
  Download [jquery.slimer.js](https://raw.githubusercontent.com/liabru/jquery-match-height/master/jquery.matchHeight.js) and include the script in your HTML file:

	<script src="jquery.slimer.js" type="text/javascript"></script>

You can also install using the package managers [Bower](http://bower.io/search/?q=slimer)

    bower install slimer

### Usage

	$(function() {
		$('.item').slimer(options);
	});

Where `options` is an optional parameter.   
See below for a description of the available options and defaults.

### Options

The default `options` are:

    {
      time: 10000,
      classBar: '.js-progress-bar',
      classWrapper: '.js-slider-wrap',
      classHidden: 'hidden',
      classLeft: '.js-slider-left',
      classRight: '.js-slider-right'
    }


## POWERED by BIKO2
### Twitter: [@biko2](https://twitter.com/biko2)
