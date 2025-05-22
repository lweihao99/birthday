// Durations for transitions (ms)
const TRANSITION_DURATIONS = {
	fast: 300,  // 0.3s
	slow: 1000, // 1.0s (jQuery 'slow' is 0.6s)
	default: 500 // 0.5s
};

$(window).load(function(){
	// Fade out loading screen
	$('.loading').addClass('transition-fast is-hidden');
	setTimeout(function() {
		$('.loading').css('display', 'none');
	}, TRANSITION_DURATIONS.fast);

	// Fade in container
	// Assuming .container is display:none in stylesheet.css
	$('.container').css('display', 'block').addClass('hidden-initially');
	// requestAnimationFrame ensures the 'hidden-initially' styles are applied before transitioning to 'is-visible'
	requestAnimationFrame(function() {
		$('.container').removeClass('hidden-initially').addClass('transition-fast is-visible');
	});
});

$('document').ready(function(){
	// Prepare initially hidden elements for CSS transitions
	// These are set to display:none in stylesheet.css
	var initiallyHiddenSelectors = ['#play', '#bannar_coming', '#balloons_flying', 
									'#cake_fadein', '#light_candle', '#wish_message', '#story',
									'.cake', '.fuego', '.message', '.balloons h2']; 
									// Note: .balloons h2 might be many elements

	$.each(initiallyHiddenSelectors, function(idx, selector) {
		var $el = $(selector);
		if ($el.length) {
			var originalDisplay = 'block'; // Default, override if known
			if (selector.startsWith('#') || selector === '.cake' || selector === '.message' || selector === '.fuego') {
				// Keep as block
			} else if (selector === '.balloons h2') {
				originalDisplay = 'inline-block'; // Or check computed style if complex
			}
			// Set to its intended display type but keep it visually hidden for transition
			$el.css('display', originalDisplay).addClass('hidden-initially');
		}
	});


		// var vw; // Not needed in this revised version for resize
		
		function arrangeBalloons() {
			var winWidth = $(window).width();
			var targetTop = $(window).height() * 0.2; // Adjust top position to be responsive
			var balloonIds = ['#b11', '#b22', '#b33', '#b44', '#b55', '#b66', '#b77'];
			var positions = [0.10, 0.22, 0.34, 0.50, 0.66, 0.78, 0.90]; // Percentage positions

			$.each(balloonIds, function(index, id) {
				var balloonElement = $(id);
				if (balloonElement.length) { // Check if balloon exists (after wish_message)
					var balloonWidth = balloonElement.width();
					var targetLeft = winWidth * positions[index] - (balloonWidth / 2);
					balloonElement.stop().animate({top: targetTop, left: targetLeft}, 500);
				}
			});
		}

		$(window).resize(function(){
			arrangeBalloons(); 
		});

	// Initial button is #turn_on, visible by default or handled by other CSS.
	// If #turn_on also starts hidden:
	// $('#turn_on').css('display', 'inline-block').addClass('hidden-initially');
	// requestAnimationFrame(function() { $('#turn_on').removeClass('hidden-initially').addClass('transition-slow is-visible'); });

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		
		var $this = $(this);
		$this.addClass('transition-slow is-hidden');
		setTimeout(function() {
			$this.css('display', 'none'); // Actually hide after transition
			var $playButton = $('#play');
			// Ensure #play is set up for transition if it was display:none
			// $playButton.css('display', 'inline-block').addClass('hidden-initially'); // Done in initial setup loop
			requestAnimationFrame(function() {
				$playButton.removeClass('hidden-initially').addClass('transition-slow is-visible');
			});
		}, 5000 + TRANSITION_DURATIONS.slow); // jQuery delay + transition duration
	});

	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF'); // Typo: background-color
		$('body').addClass('peach-after');
		
		var $this = $(this);
		$this.addClass('transition-slow is-hidden');
		setTimeout(function() {
			$this.css('display', 'none');
			var $bannarButton = $('#bannar_coming');
			// $bannarButton.css('display', 'inline-block').addClass('hidden-initially'); // Done in initial setup
			requestAnimationFrame(function() {
				$bannarButton.removeClass('hidden-initially').addClass('transition-slow is-visible');
			});
		}, 6000 + TRANSITION_DURATIONS.slow);
	});

			});
		}, 6000 + TRANSITION_DURATIONS.slow); // Assuming bannar animation is roughly 6s
	});

	$('#balloons_flying').click(function(){
		// $('.balloon-border').animate({top:-500},8000); // Keep this jQuery animation for now (position based)
		// Or replace with CSS: add a class that triggers a transform: translateY(-500px) animation.
		// For now, keeping it to focus on fades.
		// Animating based on its own height to ensure it goes fully off-screen
		var $balloonBorder = $('.balloon-border');
		$balloonBorder.animate({top: -($balloonBorder.height() + 20) + 'px'},8000);


		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		var $this = $(this);
		$this.addClass('transition-slow is-hidden');
		setTimeout(function() {
			$this.css('display', 'none');
			var $cakeFadeinButton = $('#cake_fadein');
			// $cakeFadeinButton.css('display', 'inline-block').addClass('hidden-initially'); // Done in initial setup
			requestAnimationFrame(function() {
				$cakeFadeinButton.removeClass('hidden-initially').addClass('transition-slow is-visible');
			});
		}, 5000 + TRANSITION_DURATIONS.slow);
	});	

	$('#cake_fadein').click(function(){
		var $cakeElement = $('.cake');
		// $cakeElement.css('display', 'block').addClass('hidden-initially'); // Done in initial setup
		requestAnimationFrame(function() {
			$cakeElement.removeClass('hidden-initially').addClass('transition-slow is-visible');
		});
		
		var $this = $(this);
		$this.addClass('transition-slow is-hidden');
		setTimeout(function() {
			$this.css('display', 'none');
			var $lightCandleButton = $('#light_candle');
			// $lightCandleButton.css('display', 'inline-block').addClass('hidden-initially'); // Done in initial setup
			requestAnimationFrame(function() {
				$lightCandleButton.removeClass('hidden-initially').addClass('transition-slow is-visible');
			});
		}, 3000 + TRANSITION_DURATIONS.slow);
	});

	$('#light_candle').click(function(){
		var $fuegoElement = $('.fuego');
		// $fuegoElement.css('display', 'block').addClass('hidden-initially'); // Done in initial setup for all .fuego
		// If fuego are multiple elements, ensure this is handled. CSS is .fuego { display:none }
		// The above initial setup might need adjustment if .fuego refers to multiple items that should appear together.
		// Assuming .fuego is a container or all fuego elements should appear.
		$('.fuego').each(function() { // Ensure all fuego elements are targeted if they are multiple
			var $currentFuego = $(this);
			// $currentFuego.css('display', 'block').addClass('hidden-initially'); // This is done in the main setup loop
			requestAnimationFrame(function() { 
				$currentFuego.removeClass('hidden-initially').addClass('transition-slow is-visible'); 
			});
		});

		var $this = $(this);
		$this.addClass('transition-slow is-hidden');
		// No delay for next button, it appears as candle lights
		setTimeout(function() {
			$this.css('display', 'none');
			var $wishMessageButton = $('#wish_message');
			// $wishMessageButton.css('display', 'inline-block').addClass('hidden-initially'); // Done in initial setup
			requestAnimationFrame(function() {
				$wishMessageButton.removeClass('hidden-initially').addClass('transition-slow is-visible');
			});
		}, TRANSITION_DURATIONS.slow); // Only wait for this button to fade out
	});
		
	$('#wish_message').click(function(){
		arrangeBalloons(); 

		$('.balloons').css('opacity','0.9'); 
		// $('.balloons h2').fadeIn(3000); // This needs to be replaced
		$('.balloons h2').each(function() { // Assuming h2 are children of .balloons elements and initially hidden
			// $(this).css('display', 'inline-block').addClass('hidden-initially'); // Done in initial setup
			var $el = $(this);
			requestAnimationFrame(function() {
				// Using a longer transition for this specific text fade-in
				$el.removeClass('hidden-initially').addClass('is-visible').css('transition-duration', '3s');
			});
		});
		
		var $this = $(this);
		$this.addClass('transition-slow is-hidden');
		setTimeout(function() {
			$this.css('display', 'none');
			var $storyButton = $('#story');
			// $storyButton.css('display', 'inline-block').addClass('hidden-initially'); // Done in initial setup
			requestAnimationFrame(function() {
				$storyButton.removeClass('hidden-initially').addClass('transition-slow is-visible');
			});
		}, 3000 + TRANSITION_DURATIONS.slow);
	});
	
	$('#story').click(function(){
		var $this = $(this);
		$this.addClass('transition-slow is-hidden');
		setTimeout(function() {
			$this.css('display', 'none');
		}, TRANSITION_DURATIONS.slow);

		var $cakeElement = $('.cake');
		$cakeElement.addClass('transition-fast is-hidden'); // Use fast for cake fade out
		setTimeout(function() {
			$cakeElement.css('display', 'none');
			var $messageElement = $('.message');
			// $messageElement.css('display', 'block').addClass('hidden-initially'); // Done in initial setup
			requestAnimationFrame(function() {
				$messageElement.removeClass('hidden-initially').addClass('transition-slow is-visible');
			});
		}, TRANSITION_DURATIONS.fast); // Wait for cake to fade out
		
		var i = 0; // Start with the first p element (0-indexed for jQuery .eq())

		function msgLoop (idx) {
			var $currentP = $("p:nth-child("+(idx+1)+")", ".message"); // nth-child is 1-indexed
			var $nextP = $("p:nth-child("+(idx+2)+")", ".message");
			
			// Ensure all p tags in .message start hidden and with appropriate display
			// This should be done once before starting the loop.
			if (idx === 0) { // On first call, prepare all paragraphs.
				$('.message p').each(function(pIndex) {
					// $(this).css('display', 'block').addClass('hidden-initially'); // Already done by initial setup
					// If not, ensure they are ready.
					if (!$(this).hasClass('hidden-initially')) {
						$(this).css('display', 'block').addClass('hidden-initially');
					}
				});
			}

			// Fade in current message (or first message)
			if (idx === 0 && $currentP.length) {
				requestAnimationFrame(function() {
					$currentP.removeClass('hidden-initially').addClass('transition-slow is-visible');
				});
			}
			
			var currentMsgVisibleDuration = 1000 + TRANSITION_DURATIONS.slow; // How long current message stays visible + its fade-in time

			setTimeout(function() { // Timeout to hide current and show next
				if ($currentP.length) {
					$currentP.removeClass('is-visible').addClass('is-hidden'); 
					setTimeout(function() { 
						$currentP.css('display', 'none'); 
					}, TRANSITION_DURATIONS.slow); // Hide after fade out
				}

				if ($nextP.length) {
					requestAnimationFrame(function() {
						$nextP.removeClass('hidden-initially').addClass('transition-slow is-visible'); 
					});
					// Schedule next iteration of msgLoop
					// Original logic: .fadeOut('slow').delay(800).promise().done -> fadeIn('slow').delay(1000)
					// Delay(800) was between fadeOut completion and next action.
					// So, after current fades out (1s), wait 800ms, then start fading in next (1s), then wait 1000ms.
					// My current timeout is based on when the *next* message should start its sequence.
					// Let current message be visible for some time (e.g. 1s + 0.8s delay)
					setTimeout(function() { msgLoop(idx + 1); }, 800 + TRANSITION_DURATIONS.slow); // Delay for next message to appear after current fades out
				} else { // This was the last message
					// After the last message fades out, show the cake again
					setTimeout(function() {
						requestAnimationFrame(function() {
							// Ensure cake is not display:none
							$cakeElement.css('display', 'block').removeClass('is-hidden').addClass('transition-fast is-visible');
						});
					}, TRANSITION_DURATIONS.slow); // Wait for last p to fade out
				}
			}, currentMsgVisibleDuration); 
		}
		
		msgLoop(0); // Start the loop for messages
	});
});




//alert('hello');
	// Helper function to get balloon dimensions, assuming they are similar
	// It's better to get this once if sizes are static after load, or pass the element.
	function getBalloonWidth(balloonElement) {
		return balloonElement.width();
	}
	function getBalloonHeight(balloonElement) {
		return balloonElement.height();
	}

	function loopOne() {
		var balloon = $('#b1');
		var balloonWidth = getBalloonWidth(balloon);
		var balloonHeight = getBalloonHeight(balloon);
		var randleft = Math.max(0, ($(window).width() - balloonWidth) * Math.random());
		var randbottom = Math.max(0, ($(window).height() - balloonHeight) * Math.random() * 0.7); // Keep them in lower 70% of screen from bottom
		balloon.animate({left:randleft,bottom:randbottom},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var balloon = $('#b2');
		var balloonWidth = getBalloonWidth(balloon);
		var balloonHeight = getBalloonHeight(balloon);
		var randleft = Math.max(0, ($(window).width() - balloonWidth) * Math.random());
		var randbottom = Math.max(0, ($(window).height() - balloonHeight) * Math.random() * 0.7);
		balloon.animate({left:randleft,bottom:randbottom},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var balloon = $('#b3');
		var balloonWidth = getBalloonWidth(balloon);
		var balloonHeight = getBalloonHeight(balloon);
		var randleft = Math.max(0, ($(window).width() - balloonWidth) * Math.random());
		var randbottom = Math.max(0, ($(window).height() - balloonHeight) * Math.random() * 0.7);
		balloon.animate({left:randleft,bottom:randbottom},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var balloon = $('#b4');
		var balloonWidth = getBalloonWidth(balloon);
		var balloonHeight = getBalloonHeight(balloon);
		var randleft = Math.max(0, ($(window).width() - balloonWidth) * Math.random());
		var randbottom = Math.max(0, ($(window).height() - balloonHeight) * Math.random() * 0.7);
		balloon.animate({left:randleft,bottom:randbottom},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var balloon = $('#b5');
		var balloonWidth = getBalloonWidth(balloon);
		var balloonHeight = getBalloonHeight(balloon);
		var randleft = Math.max(0, ($(window).width() - balloonWidth) * Math.random());
		var randbottom = Math.max(0, ($(window).height() - balloonHeight) * Math.random() * 0.7);
		balloon.animate({left:randleft,bottom:randbottom},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var balloon = $('#b6');
		var balloonWidth = getBalloonWidth(balloon);
		var balloonHeight = getBalloonHeight(balloon);
		var randleft = Math.max(0, ($(window).width() - balloonWidth) * Math.random());
		var randbottom = Math.max(0, ($(window).height() - balloonHeight) * Math.random() * 0.7);
		balloon.animate({left:randleft,bottom:randbottom},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var balloon = $('#b7');
		var balloonWidth = getBalloonWidth(balloon);
		var balloonHeight = getBalloonHeight(balloon);
		var randleft = Math.max(0, ($(window).width() - balloonWidth) * Math.random());
		var randbottom = Math.max(0, ($(window).height() - balloonHeight) * Math.random() * 0.7);
		balloon.animate({left:randleft,bottom:randbottom},10000,function(){
			loopSeven();
		});
	}


		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		// vw is $(window).width()/2
		// Example: $('#b11').animate({top:240, left: vw-350},500);
		// This will be updated in a subsequent step. The current change focuses on loop functions.
		// For now, keeping the original logic for wish_message rearrangement part:
		// vw is $(window).width()/2 // Original vw calculation
		// The actual rearrangement will be handled by arrangeBalloons function
		arrangeBalloons();
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');