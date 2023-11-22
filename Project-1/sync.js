function greet(){
    return function(){
        console.log('Welcome Students');
    }
}

const result = greet();

result();