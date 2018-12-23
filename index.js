#!/usr/bin/env node
const rockPaperScissors = require('rock-paper-scissors-ml')
const { Select } = require('enquirer')

const config = {
	choices: ['rock', 'paper', 'scissors'],
	history: 3,
	lastChoices: []
}
const run = rockPaperScissors(config)

const main = async () => {
	while (true) {
		const prompt = new Select({
			message: 'Let\'s Go',
			choices: [...config.choices]
		})

		await prompt.run()
			.then(answer => {
				var result = run(answer)
				console.log(`
	RESULT : ${result.winHumane > 0 ? (result.winHumane == 1 ? 'WIN!' : 'NO ONE WON!') : 'LOST!'}
	YOU    : ${result.answerHumane}
	IA     : ${result.answerMachine}
				`)
			})
			.catch(console.error)
	}
}
main()
