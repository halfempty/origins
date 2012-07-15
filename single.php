<?php get_header(); ?>
			<?php if ( have_posts() ) : ?>
				<div id="content">
				<?php while ( have_posts() ) : the_post(); ?>
					<div class="item <?php marty_get_post_format(); ?>">
					<p class="back">&larr; Back to <a href="/">All Posts</a>, <?php the_category(', ') ?></p>

					<div class="titleblock">
						<h3><?php if ( !is_single() && !is_page() ) { ?><a href="<?php the_permalink(); ?>"><?php } ?><?php the_title(); ?><?php if ( !is_single() && !is_page() ) { ?></a><?php } ?></h3>
						<p class="address"><?php echo get_geocode_address($post->ID); ?></p>
					</div>
										
					<?php the_content(); ?>

						<script type="text/javascript">
						  var disqus_developer = 1;
						</script>

						<div id="comments">
						<?php comments_template(); ?>
						</div>

					</div>
				<?php endwhile; ?>
				</div>
			<?php else : ?>
				<div class="item">
				<h2>Page not found.</h2>
				<p>Apologies, but no results were found for the requested archive.</p>
				</div>
			<?php endif; ?>

<?php get_footer(); ?>