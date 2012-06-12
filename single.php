<?php get_header(); ?>
			<?php if ( have_posts() ) : ?>
				<p class="back">&larr; Back to <a href="/">All Posts</a>, <?php the_category(', ') ?></p>
				<?php while ( have_posts() ) : the_post(); ?>
					<div class="item">
					<h3><?php the_title(); ?><?php marty_post_format(' <span>(',')</span>'); ?></h3>
					
					<div class="addthis-single">
					<?php get_template_part('addthis'); ?>
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

			<?php else : ?>
				<div class="item">
				<h2>Page not found.</h2>
				<p>Apologies, but no results were found for the requested archive.</p>
				</div>
			<?php endif; ?>

<?php get_footer(); ?>