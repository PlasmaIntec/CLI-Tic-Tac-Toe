#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const { board, findCurrentPlayer, makeMove } = require('./logic');

program
  .version('0.0.1')
  .description('Contact management system');

const questions = player => ([
{
  type : 'input',
  name : 'move',
  message : `Player ${player ? 'one: X' : 'two: O'}'s`
}
]
);

program
	.command('play')
	.alias('p')
	.action(async () => {
		var res;
		do {
			await prompt(questions(findCurrentPlayer())).then(answer => {
				res = makeMove(answer.move);
				console.log('YOU REPLIED:', answer, board(), res);
			})
		} while (!res)
		if (res === 1) {
			console.log('PLAYER 1 WON')
		} else if (res === 2) {
			console.log('PLAYER 2 WON')			
		} else {
			console.log('CATS')
		}
	})

program.parse(process.argv);