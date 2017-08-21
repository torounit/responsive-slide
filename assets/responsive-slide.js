(function ($) {


	function Slide( selector , offset ) {

		function setHeight() {
			$(selector).each(function () {
				var $this = $(this),
					ratio = $this.attr('data-ratio');

				if (!ratio) {
					var width = parseInt($this.attr('width')),
						height = parseInt($this.attr('height')) - offset;
					if (width && height) {
						ratio = width / height;
						$this.attr('data-ratio', ratio);
					}
				}
				$this.height(( $this.width() / ratio ) + offset);
			})
		}
		setHeight();

		$(window).on('resize', function () {
			setHeight();
		});
	};

	$(function () {
		var speakerDeckHeaderHeight = 26,
			speakerDeckFooterHeight = 35;
		var speakerdeck = Slide( 'iframe[src*="speakerdeck.com"]', speakerDeckHeaderHeight + speakerDeckFooterHeight);
		var slideshare = Slide( 'iframe[src*="slideshare.net"]', 38);
	});



}(jQuery));
