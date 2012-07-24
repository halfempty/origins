
<?php wp_footer(); ?>

<?php if ( is_home() ) :?>
	<script type="text/javascript">
	jQuery(document).ready(function($) {
		$('#info').showmodal();
	});
	</script>
<?php endif; ?>


</body>
</html>