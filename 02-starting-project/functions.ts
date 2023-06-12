/* Type unknown */
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string') {
  userName = userInput;
}

/* Type never */
function generateError(message: string, code: number) {
  throw {message: message, code: code};
}

generateError('An error occured!', 500)