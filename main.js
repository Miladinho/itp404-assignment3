

function getSubreddits() {
	var subreddit = document.getElementById('subreddit').textContent;
	console.log(subreddit);
	$.ajax({
		url: 'https://www.reddit.com/r/'+subreddit+'.json',
		success: function(response) {
			var templateSource = $('#song-list-template').html();
			var template = Handlebars.compile(templateSource);

			var html = template(response); 
			console.log(response);
			$('#song-list').html(html);
		}
	});
}
