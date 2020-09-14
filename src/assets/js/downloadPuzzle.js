let getPuzzleDataURL = 'http://localhost:3200/api/puzzles/getPuzzleByID/';

function getPuzzleData(puzzleID)
{
	let url = getPuzzleDataURL + puzzleID;
	$.ajax({
		type: 'GET',
		url: url,
		success: function(data, status){
			piecesJSONObject = JSON.parse(data[0].puzzleObject);
			pieces = piecesJSONObject.pieces;
			generateSTLFile();
		},
		error: function(data, status){
			console.log(status);
			console.log(data);
		}
	});
}