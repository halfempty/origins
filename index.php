<?php get_header(); ?>



<?php if ( have_posts() ) : ?>
			<div class="contentholder">
	<?php  $i = 1; while ( have_posts() ) : the_post(); ?>

					<?php if ( get_geocode_latlng($post->ID) !== '' ) : ?>
					<div id="item<?php echo $i; ?>" class="infowindow"><?php the_content(); ?><p class="infowindowfooter"><a class="permalink" <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a> <a class="commentslink" href="<?php comments_link(); ?>"><?php comments_number(' 0 Comments',' 1 Comment',' % comments'); ?></a></p></div>
					<?php endif; ?>

				<?php $i++;	endwhile; ?>
			</div>
			<script type="text/javascript">

			var locations = [
				<?php  $i = 1; while ( have_posts() ) : the_post(); ?>
					<?php if ( get_geocode_latlng($post->ID) !== '' ) : ?>
					{
						title : '<?php the_title(); ?>', 
						latlng : new google.maps.LatLng<?php echo get_geocode_latlng($post->ID); ?>, 
						format : '<?php marty_get_post_format(); ?>', 
						info : document.getElementById('item<?php echo $i; ?>'), 
						group : '<?php echo get_post_meta($post->ID, 'marker_icon', true); ?>'
					},
					<?php endif; ?>
				<?php $i++; endwhile; ?>
				];

			</script>

			<?php else : ?>
				<div class="item">
				<h2>Page not found.</h2>
				<p>Apologies, but no results were found for the requested archive.</p>
				</div>
			<?php endif; ?>

			<?php if ( have_posts() ) : ?>

			<div id="controls">
				<ul class="view">
					<li id="listtoggle" class="inactive">List</li>
					<li id="maptoggle" class="selected">Map</li>
				</ul>
				<ul class="format">
					<li id="videotoggle" class="selected">Video</li>
					<li id="audiotoggle" class="selected">Audio</li>
					<li id="imagetoggle" class="selected">Image</li>
					<li id="standardtoggle" class="selected">Text</li>
					<li id="linktoggle" class="selected">Link</li>
				</ul>

				<div class="addthis-category"><?php get_template_part('addthis'); ?></div>

			</div>

			<div id="map"></div>

			<div class="listview">
				
				<?php while ( have_posts() ) : the_post(); ?>

					<div class="item <?php marty_get_post_format(); ?>">
					<h3><?php if ( !is_single() && !is_page() ) { ?><a href="<?php the_permalink(); ?>"><?php } ?><?php the_title(); ?><?php if ( !is_single() && !is_page() ) { ?></a><?php } ?><?php marty_post_format(' <span>(',')</span>'); ?></h3>
					
					<?php the_content(); ?>

					<?php if ( is_single() ) { ?>
						<script type="text/javascript">
						  var disqus_developer = 1;
						</script>
						<div id="comments">
						<?php comments_template(); ?>
						</div>
						<?php } ?>


					</div>
				<?php endwhile; ?>

			<?php else : ?>
				<div class="item">
				<h2>Page not found.</h2>
				<p>Apologies, but no results were found for the requested archive.</p>
				</div>
			<?php endif; ?>
			</div>




<?php get_footer(); ?>