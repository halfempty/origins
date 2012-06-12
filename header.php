<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php 
	wp_title( '|', true, 'right' );
	bloginfo( 'name' ); 
	$site_description = get_bloginfo( 'description', 'display' );

	if ( $site_description && ( is_home() || is_front_page() ) )
		echo ": $site_description";
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyeleven' ), max( $paged, $page ) );
	?></title>

	<script type="text/javascript" src="http://fast.fonts.com/jsapi/6e25e19c-6643-4496-b606-d165e32d9d5e.js"></script>

<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri() ?>/images/favicon.ico" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />


	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

<?php if ( !is_page() && !is_single() ) { ?>
	<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/markers.js"></script>	
	<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/map.js"></script>	
<?php } ?>
	<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/style.js"></script>	

<?php wp_head(); ?>
</head>

<body <?php if ( !is_page() && !is_single() ) { ?> onload="initialize()" <?php } ?>>
	
	<div class="header">
	
	<h1><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
	
	<p class="tagline"><?php bloginfo('description'); ?>
	
	<div class="submitbutton"><a href="/submit">Submit Content</a></div>
	<div class="aboutlink"><a href="/about">About This Site</a></div>
		
	</div>
	
	<div class="categories">
		<?php marty_nav_menu(array('menu' => 'categories')); ?>
	</div>
	
	
	<div class="content">