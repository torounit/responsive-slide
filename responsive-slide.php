<?php
/**
 * Plugin Name:     Responsive Slide
 * Plugin URI:      https://github.com/torounit/responsive-slide
 * Description:     Responsive iframe for embed slideshow.
 * Author:          Toro_Unit
 * Author URI:      https://torounit.com
 * Text Domain:     responsive-slide
 * Domain Path:     /languages
 * Version:         0.1.7
 *
 * @package         Responsive_Slide
 */

/**
 * Class Responsive_Slide
 */
class Responsive_Slide {

	/**
	 * Responsive_Slide constructor.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );
	}

	/**
	 * Include CSS and JS.
	 */
	public function wp_enqueue_scripts() {
		wp_enqueue_script(
			'responsive-slide-js',
			plugins_url( 'assets/responsive-slide.js', __FILE__ ),
			array( 'jquery' ),
			filemtime( dirname( __FILE__ ) . '/assets/responsive-slide.js' ),
			true
		);
		wp_enqueue_style(
			'responsive-slide-css',
			plugins_url( 'assets/responsive-slide.css', __FILE__ ),
			array(),
			filemtime( dirname( __FILE__ ) . '/assets/responsive-slide.css' )
		);
	}
}

$responsive_slide = new Responsive_Slide();
