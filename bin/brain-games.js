#!/usr/bin/env node
import { getName } from '../src/cli.js';
import evenGame from '../bin/brain-even.js';
import calcGame from '../bin/brain-calc.js';
import gcdGame from '../bin/brain-gcd.js';

console.log('Welcome to the Brain Games!')
getName()
gcdGame()
calcGame()
evenGame()