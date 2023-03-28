import Notiflix from "notiflix";
import createLi from "./js/render";

const form = document.querySelector(".form");
const list = document.querySelector(".list");

const text = document.querySelector(".text");

console.log('text :>> ', text);

form.addEventListener("submit", onSubmit);

console.log('form :>> ', form);

function onSubmit (e) {
    e.preventDefault ();
    
    const {
        "elements": {email, password}
    } = e.currentTarget;
    
    console.log('email, password :>> ', email, password);
    const markup = createLi(email.value, password.value);

    if (email.value === "" && password.value === "") {
        Notiflix.Notify.failure("napishi");
    }

    Notiflix.Notify.success("wi u spiscu");


    list.insertAdjacentHTML("beforeend", markup);

    e.currentTarget.reset();

    const LOCAL = "markup"; 

    localStorage.setItem(LOCAL, markup);
        
}



// const id = 15;

// const LOCAL = "id"; 

// localStorage.setItem(LOCAL, id)

// console.log(localStorage.getItem(LOCAL));

// const setings = {
//     them: "black",
//     "token": "adasdaa",
//     id: "asd"
// };


// console.log(localStorage.getItem(LOCAL));
// const item = localStorage.getItem(LOCAL);

// const jksdf = JSON.parse(row);
// console.log('jksdf :>> ', jksdf);

// jksdf.id = "75";
// console.log(jksdf);

// console.log(LOCAL,  JSON.stringify(jksdf));

// localStorage.removeItem(LOCAL);

// localStorage.clear


// const refs = {
//     form: document.querySelector(".feedback-from"),
//     input: document.querySelector(".input"),
//     textArea: document.querySelector(".textArea")
// };

// const FEEDBACK = "feedback";
// const value = {};
// const item1 = localStorage.getItem(FEEDBACK);

// refs.form.addEventListener("input", throttle(reloadInput, 500));

// function reloadInput (e) {
//     console.log('e.target.name :>> ', e.target.name);
//     value[e.target.name] = e.target.value;

//     console.log('value :>> ', value);
//     localStorage.setItem(FEEDBACK, JSON.stringify(value));
// }

// saveValue();

// function saveValue () {
//     if (JSON.parse(item)) {
//         refs.input.value = JSON.parse(item);
//         refs.textArea.value;
//     }
//     return;
// }

// refs.form.addEventListener("submit", removeItem);

// function reloadInput (e) {
//     e.preventDefault ();
//     e.currenTarget.reset();
//     localStorage.removeItem(FEEDBACK);
// }

