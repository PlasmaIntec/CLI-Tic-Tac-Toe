var currentPlayer = 0;

const findCurrentPlayer = () => currentPlayer;

const tiles = Array(9).fill(0).map((e, i) => i);

const board = (e = tiles) => {
	return `
${e[0]} | ${e[1]} | ${e[2]} 
----------
${e[3]} | ${e[4]} | ${e[5]} 
----------
${e[6]} | ${e[7]} | ${e[8]} 
`
};

// return 1 if player 1 won
// return 2 if player 2 won
// return 3 if cats
// else return null;
const checkBoardState = () => {
	for (let i = 0; i < tiles.length; i += 3) {
		var first = tiles[i];
		if (tiles[i + 1] === first && tiles[i + 2] === first) {
			return tiles[i] === 'X' ? 1 : 2;
		}
	}
	for (let i = 0; i < 3; i++) {
		var first = tiles[i];
		if (tiles[i + 3] === first && tiles[i + 6] === first) {
			return tiles[i] === 'X' ? 1 : 2;
		}
	}
	var first = tiles[0];
	if (tiles[4] === first && tiles[8] === first) {
			return first === 'X' ? 1 : 2;
	}
	var first = tiles[2];
	if (tiles[4] === first && tiles[6] === first) {
			return first === 'X' ? 1 : 2;
	}
	if (tiles.every(tile => Number.isInteger(tile))) {
		return 3;
	}
	return null;
}

const makeMove = (move) => {
	if (!['O', 'X'].includes(tiles[move])) {
		tiles[move] = currentPlayer ? 'X' : 'O';
	} else {
		// handle illegal move
	}
	currentPlayer = currentPlayer ? 0 : 1;
	return checkBoardState();
};

module.exports = { board, currentPlayer, makeMove, findCurrentPlayer };