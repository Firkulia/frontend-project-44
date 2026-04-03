import readlineSync from 'readline-sync'
import { getUserName } from '../src/cli.js'

export default () => {
    const userName = getUserName()
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    let successCounter = 0
    while (successCounter < 3) {
        // get a number and give question to the user
        const number = Math.floor(Math.random() * 199) + 1 // 1 - 199
        console.log('Question: ' + number)
        const answer = readlineSync.question('Your answer: ')

        // identify correct answer and compare
        let correctAnswer
        if (number % 2 === 0) { correctAnswer = 'yes' }
        else { correctAnswer = 'no' }

        if (answer == correctAnswer) {
            successCounter += 1
            console.log('Correct!')
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
            console.log(`Let's try again, ${userName}!`)
            return
        }
    }
// if 'while' ends player wins
    console.log('Congratulations, ' + userName + '!')
}