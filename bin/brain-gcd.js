import readlineSync from 'readline-sync'
import { getUserName } from '../src/cli.js'

// gcd taken from https://gist.github.com/ivanafanasyeu/407e46849726e9ce1e53c5b19ab0d968
const gcd = (a, b) => {
    while (a != 0 && b != 0) {
        if (a > b) {
            a = a % b
        } else {
            b = b % a
        }
    }
    return a + b
}

export default () => {
    const userName = getUserName()
    console.log('Find the greatest common divisor of given numbers.')

    let successCounter = 0
    while (successCounter < 3) {
        // get numbers and give question to the user
        const numberX = Math.abs(Math.floor(Math.random() * 100) + 1)
        const numberY = Math.abs(Math.floor(Math.random() * 100) + 1)

        console.log(`Question: ${numberX} ${numberY}`)
        const answer = readlineSync.question('Your answer: ')

        // identify correct answer and compare
        let correctAnswer = gcd(numberX, numberY)
        if (answer == correctAnswer) {
            successCounter += 1
            console.log('Correct!')
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
            console.log(`Let's try again, ${userName}!`)
            return
        }

    }
    console.log('Congratulations, ' + userName + '!')
}