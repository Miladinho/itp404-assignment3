



function getSubreddits() {
	var subreddit = document.getElementById('subreddit').value;
	console.log(subreddit);
	var promise = $.ajax({
		url: 'https://www.reddit.com/r/'+subreddit+'.json',
		type: 'get'
	}).then(function(response) {
			var templateSource = $('#song-list-template').html();
			var template = Handlebars.compile(templateSource);

			var html = template(response.data); 
			console.log(response);
			console.log(response.data.children)
			$('#song-list').html(html);
	}, function() {
		console.log('EROROR');
		//document.getElementById('error').innerHTML = "THere was an error, nothing found!"
	});
}

$('#song-list').on('click','button',function() {
	var selftext = $(this).parent().parent().find('selftext').html();
	console.log(selftext);
	alert($(this).find('selftext').html());
});
