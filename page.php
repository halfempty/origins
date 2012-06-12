<?php get_header(); ?>

			<?php if ( have_posts() ) : ?>
				<?php while ( have_posts() ) : the_post(); ?>
					<div class="item">
					<h3><?php the_title(); ?></h3>

					<?php the_content(); ?>

					</div>
				<?php endwhile; ?>

			<?php else : ?>
				<div class="item">
				<h2>Page not found.</h2>
				<p>Apologies, but no results were found for the requested archive.</p>
				</div>
			<?php endif; ?>

<?php get_footer(); ?>