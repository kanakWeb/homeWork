function greeting(parameterVariable) {
    console.log('Hello, World!');

    return parameterVariable;
}

let text = 'Welcome to 10 Days of JavaScript!',
    Message = greeting(text)
console.log(Message)