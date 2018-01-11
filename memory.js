$(document).ready(function(){
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;
	
	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {
	
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
	
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }
	
	  return array;
	}
	$('button').click(function(){
		var gameMode = $(this).val();
		var card = 0;
		var pictureId = 0;
		var idNums = [];
		var pictures = [];
		
		
		while (card < gameMode){
			if (idNums.length < (parseInt(gameMode))){
				idNums.push(pictureId);
				idNums.push(pictureId);
				shuffle(idNums);
				pictureId++;
			}
			else{
				var imgUrl = '<img src="../img/img-' + idNums[card] + '.png" width="100%" height="auto">'
				$('#game-container').append('<div class="container"><div class="card" id="img-' + idNums[card] + '"><div class="front"></div><div class="back">' + imgUrl + '</div></div></div>');
				card++;
			}
		}
		$('button').css('display','none');
		if(gameMode == 8){
			$('#game-container').css({'width':'15%', 'left':'43.75%'});
		} else if (gameMode == 16) {
			$('#game-container').css({'width':'25%', 'left':'37.5%'} );
		} else {
			$('#game-container').css({'width':'50%', 'left':'25%'});
		}
		$('#game-container').append('<div id="score">score: 0</div><div id="moves">moves: 0</div>');
	});
	
	var matchArray = [];
	var score = 0;
	var moves = 0;
	
	$(document).on('click', '.front', function(e){

		//console.log(e);
		if(matchArray.length >= 2){
			e.preventDefault();
		} else{
			if($('.active').length < 2){
				$(this).parent('.card').css('transform','rotateY(180deg)');
				e.target.className='front active';
				matchArray.push(e.target.parentNode);
				moves++;
				$('#moves').html('moves: ' + moves);
				
				if ($('.active').length == 2) {
					matchCheck(e, matchArray);
					
				}
			}
		}
	});
	
	function matchCheck(e, matchArray) {
		if (matchArray[0].id == matchArray[1].id){
			var disappear = setTimeout(function(){
				$(matchArray[0]).css('opacity','0');
				$(matchArray[1]).css('opacity','0');
				matchArray.pop();
				matchArray.pop();
			},800)
			score += 2;
			$('#score').html('score: ' + score);
			if($('.card').length == score) {
				$('#game-container').empty();
				$('#game-container').append('<div id="victory">you win! lol</div>')
			}
		}else{
			var resetCards = setTimeout(function(){
				$(matchArray[0]).css('transform','rotateY(0deg)');
				$(matchArray[1]).css('transform','rotateY(0deg)');
				matchArray.pop();
				matchArray.pop();
			},800);
		}
		$('.front').removeClass('active');
	};
	
	
});