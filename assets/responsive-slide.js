(function ($) {

	var playerHeaderHeight = 26,
		playerFooterHeight = 35

	function setHeight() {
		$('iframe[src*="speakerdeck.com"]').each(function () {
			var $this = $(this),
				ratio = $this.attr('data-ratio');

			if (!ratio) {
				var width = parseInt($this.attr('width')),
					height = parseInt($this.attr('height')) - playerHeaderHeight - playerFooterHeight;
				if (width && height) {
					ratio = width / height;
					$this.attr('data-ratio', ratio);
				}
			}
			$this.height(( $this.width() / ratio ) + playerHeaderHeight + playerFooterHeight);
		})
	}

	$(function () {
		setHeight();
	})

	$(window).on('resize', function () {
		setHeight();
	});


}(jQuery));
