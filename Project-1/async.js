console.log('Hello Students');

function callback(){
    console.log("Hello again from callback");

}


setTimeout(callback, 200); //async

console.log("Hello from the final line");