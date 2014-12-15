// This uses GreenSocks TweenMax and TimeLine Classes for all the animated parts
// Rather than using CANVAS that will break earlier browsers, instead we animate
// DOM elements in realtime using JavaScript.
// As the script is loaded AFTER the content, we can use onLoad :)

/*

Motion Sequence
---------------

*/

// Elements
var Animations = (function(){

	'use strict';

	var
		timeline,		// Main Animation that hold the child animations
		variant,		// style... mpu / leaderboard etc
		elements = {}; 	// Home of all of the DOM Node Elements

	// Construct
	function Animations()
    {

    }

    // This creates all of our animation elements
    Animations.prototype.assign = function()
    {
        variant 			= document.getElementById('variant').className || 'unknown';
		elements.content	= document.getElementById('content');
		elements.first 		= document.getElementById('first');
		elements.second 	= document.getElementById('second');
		elements.third 		= document.getElementById('third');
		elements.fourth 	= document.getElementById('fourth');
		elements.fifth 		= document.getElementById('fifth');
		elements.cta 		= document.getElementById('cta');
		elements.logo 		= document.getElementById('logo');

        this.construct();
    };

    // This creates all of our animation elements
    Animations.prototype.construct = function()
    {
		// create a home for our animations
 		// timeline = new TimelineLite( {onComplete:this.onFinish, onCompleteParams:["test1", "test2"], onCompleteScope:this } );
 		timeline = new TimelineLite();

        // INTRO =============================================================================
  		// create our INTRO scene
  		var sceneIntro = new TimelineLite();

        // TRANSITION ========================================================================
		// create our TRANSITION scene
  		var sceneTransition = new TimelineLite();

        // FINALE ============================================================================
		// create our FINALE scene
  		var sceneFinale = new TimelineLite();

        // Create timeline
  		timeline.add( sceneIntro );
		timeline.add( sceneTransition );
  		timeline.add( sceneFinale );

        // wait before starting the animation!
        timeline.pause();
    };

    // This Kicks off the animation on screen
	Animations.prototype.onFinish = function( scope )
    {

    };

	//
	Animations.prototype.begin = function()
	{
        // hide loader!
        // remove loading class from #content
       	elements.content.className = '';
        timeline.play();
	};

	return Animations;

})();

var anim = new Animations();
anim.assign();

// begin animating...
// defer animation
// anim.begin();