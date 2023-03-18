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

};