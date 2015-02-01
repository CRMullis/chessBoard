/* Collin Mullis
   Ch.2 Chessboard Homework
*/

// Variables used to construct the lines of the code
var hashtag = "#"
var space = " "
// Variable to define the size of the ChessBoard
var size = 8
// Variable used to add variables "hashtag" and "space" to
var line1 = ""
var line2 = ""
for (var width = 1; width <= size; width++) {
	if (width % 2 !== 0) {
		line1 = line1 + space	
		line2 = line2 + hashtag
		}
	else if (width % 2 == 0) {       
		line1 = line1 + hashtag 
		line2 = line2 + space
		}
	}
for (var height= 1; height <=size; height++) {
	if (height % 2 !== 0)
		console.log(line1)
	else if (height % 2 == 0)
		console.log(line2)
}	

