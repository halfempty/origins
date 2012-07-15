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
	<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/jquery.simplemodal.1.4.2.min.js"></script>	

<?php if ( !is_page() && !is_single() ) { ?>
	<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/map.js"></script>	
<?php } ?>
	<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/style.js"></script>	

<?php wp_head(); ?>
</head>

<body <?php if ( !is_page() && !is_single() ) : ?> onload="initialize()" <?php endif; ?>>
		
	<div class="header">
		<div class="headerwrapper">
	
		<div id="info" class="thinbutton">
			<h4><span>About</span></h4>
			<div class="modalwrap"><div class="infotick">
				<div id="infomodal">
				<?php $info_query = new WP_Query('post_type=page&name=about'); ?>

				<?php while ($info_query->have_posts()) : $info_query->the_post(); ?>
							<?php the_content(); ?>			
				<?php endwhile; ?>
				</div>		
			</div></div>
		</div>

		<div id="share" class="thinbutton">
			<h4><span>Share</span></h4>
			<div class="modalwrap"><div class="sharetick">
				<div id="sharemodal">
				<?php get_template_part('addthis'); ?>
				</div>
			</div></div>
		</div>

		<div id="contribute" <?php if ( is_page('submit') ) echo 'class="selected"'; ?> >
			<h4><a href="/submit"><span>Contribute</span></a></h4>
		</div>

		<?php if ( !is_page() && !is_single() ) : ?>

		<div id="view" class="buttonstyle">
			<h4><span>View</span></h4>
			<div class="anotherwrapper">
				<ul>
				<li id="maptoggle" class="first selected"><a>Map</a></li>
				<li id="listtoggle" class="last inactive"><a>List</a></li>
				</ul>
			</div>
		</div>

		<div id="formats" class="thinbutton">
			<h4><span>Formats</span></h4>
			<div class="modalwrap formatsmodalwrap"><div class="formatstick">
				<div id="formatsmodal" class="togglestyle">
					<ul>
						<li id="standardtoggle" class="selected"><div><span><a>Standard</a></span></div></li>
						<li id="linktoggle" class="selected"><div><span><a>Link</a></span></div></li>
						<li id="videotoggle" class="selected"><div><span><a>Video</a></span></div></li>
						<li id="imagetoggle" class="selected"><div><span><a>Image</a></span></div></li>
						<li id="audiotoggle" class="selected"><div><span><a>Audio</a></span></div></li>
					</ul>
				</div>
			</div></div>
		</div>

		<?php endif; ?>

		<h1><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
		
	</div>
	</div>	
	
	<div id="categories" class="buttonstyle">
		<div class="wrapper">
		<div class="anotherwrapper">
		<ul>
		<li class="all first <?php if ( is_home() ) echo ' selected '?>"><a href="/">All</a></li>
		<li class="featured <?php if ( is_category('chinese-american-museum') ) echo ' selected '?>"><a href="/category/chinese-american-museum/">Featured</a></li>
		<li class="arts <?php if ( is_category('art-entertainment-recreation') ) echo ' selected '?>"><a href="/category/art-entertainment-recreation/">Arts &amp; Entertainment</a></li>
		<li class="cultural <?php if ( is_category('cultural-community-centers') ) echo ' selected '?>"><a href="/category/cultural-community-centers/">Cultural &amp; Community Centers</a></li>
		<li class="family <?php if ( is_category('family-stories') ) echo ' selected '?>"><a href="/category/family-stories/">Family Stories</a></li>
		<li class="food <?php if ( is_category('food-restaurants') ) echo ' selected '?>"><a href="/category/food-restaurants/">Food</a></li>
		<li class="history <?php if ( is_category('historic-places') ) echo ' selected '?>"><a href="/category/historic-places/">History</a></li>
		<li class="civic <?php if ( is_category('politics-civic-engagement') ) echo ' selected '?>"><a href="/category/politics-civic-engagement/">Civic Engagement</a></li>
		<li class="religion <?php if ( is_category('religion') ) echo ' selected '?>"><a href="/category/religion/">Religion &amp; Spirituality</a></li>
		<li class="shops last <?php if ( is_category('shopping') ) echo ' selected '?>"><a href="/category/shopping/">Shops</a></li>
		</ul>
		</div>
		</div>
	</div>	