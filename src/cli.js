import readlineSync from 'readline-sync'

export default () => {
const name = readlineSync.question('May i have your name? ')
console.log('Hello, ' + name + '!')
}