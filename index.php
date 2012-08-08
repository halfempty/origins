<?php get_header(); ?>

<?php if ( have_posts() ) : ?>
			<div class="contentholder">
	<?php  $i = 1; while ( have_posts() ) : the_post(); ?>

					<?php if ( get_geocode_latlng($post->ID) !== '' ) : ?>
					<div id="item<?php echo $i; ?>" class="infowindow">
						<?php the_content(); ?>
						<p class="infowindowfooter">
							<a class="permalink" <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a><br />
							<span class="address"><?php echo get_geocode_address($post->ID); ?></span></p>
						
					</div>
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
						info : document.getElementById('item<?php echo $i; ?>')
					},
					<?php endif; ?>
				<?php $i++; endwhile; ?>
				];

			</script>

			<?php endif; ?>

			<?php if ( have_posts() ) : ?>



			<div id="map"></div>

			<div id="content" class="listview" style="display: none;">
				
				<?php while ( have_posts() ) : the_post(); ?>

					<div class="item <?php marty_get_post_format(); ?>">
						<div class="titleblock">
							<h3><?php if ( !is_single() && !is_page() ) { ?><a href="<?php the_permalink(); ?>"><?php } ?><?php the_title(); ?><?php if ( !is_single() && !is_page() ) { ?></a><?php } ?></h3>
							<p class="address"><?php echo get_geocode_address($post->ID); ?></p>
						</div>
					
					<?php if ( is_single() ) { ?>

						<?php the_content(); ?>

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
				<div id="content"><div class="notfound">
					<?php if ( is_category() ) : ?>

						<h2>No entries</h2>
						<p>No locations have been submitted for the <strong><?php single_cat_title(); ?></strong> category.<br /><a href="/submit">Please contribute!</a></p>

					<?php else: ?>

						<h2>Page not found</h2>
						<p>There is no page at this location.<br /><a href="/">Home</a></p>

					<?php endif; ?>
				</div></div>
			<?php endif; ?>
			</div>




<?php get_footer(); ?>