import readlineSync from 'readline-sync'

let userName = ''

export const getName = () => {
    userName = readlineSync.question('May i have your name? ')
    console.log('Hello, ' + userName + '!')
}
export const getUserName = () => userName
