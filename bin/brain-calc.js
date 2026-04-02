import { getUserName } from '../src/cli.js'
import readlineSync from 'readline-sync'

export default () => {
    const userName = getUserName()
    console.log('What is the result of the expression?')

    let successCounter = 0
    while (successCounter < 3) {
        // get numbers and give question to the user
        const numberX = Math.floor(Math.random() * 100) + 1
        const numberY = Math.floor(Math.random() * 100) + 1
        const operations = ['+', '-']
        const operation = operations[Math.floor(Math.random() * operations.length)]

        console.log(`Question: ${numberX} ${operation} ${numberY}`)
        const answer = readlineSync.question('Your answer: ')

        // identify correct answer
        let correctAnswer
        if (operation == '+') {
            correctAnswer = numberX + numberY
        } else correctAnswer = numberX - numberY
        if (answer == correctAnswer) {
            successCounter += 1
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
            console.log(`Let's try again, ${userName}!`)
            return
        }
    }

    console.log('Congratulations, ' + userName + '!')
}