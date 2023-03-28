const refs = {
    seconds: document.querySelector("#clock")
} 

const timeout = setTimeout (() => {
    console.log("реклама");
    // const markup = 
    // `<ul> 
    //     <li></li> 
    // </ul>`
}, 10000);

console.log(timeout);

clearTimeout(timeout);

let seconds = 0;

const timer = setInterval (() => {
    seconds++;
    refs.seconds.innerHTML = `Ви вже знаходитесь на нашому сайті ${seconds} секунд`;
}, 1000);

console.log(timer);

clearInterval(timer)

