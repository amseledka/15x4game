LogPanel = {
	day: 0,
	message: [],
	clear: function(){this.message = []},
	hide: $(this).on('click', function () {
		$('#main_content').toggleClass('main_content80 main_content100');
	})
}