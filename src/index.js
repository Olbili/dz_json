import createLi from "./js/render";

import Notiflix from "notiflix";

const form = document.querySelector(".form");
const list = document.querySelector(".list");

form.addEventListener("submit", onSubmit);

function onSubmit (e) {
    e.preventDefault ();

    const {
        "elements": {email, password}
    } = e.currentTarget;

    const markup = createLi(email.value, password.value);

    if (email.value === "" && password.value === "") {
        Notiflix.Notify.failure("napishi");
    }

    Notiflix.Notify.success("wi u spiscu");


    list.insertAdjacentHTML("beforeend", markup);

    e.currentTarget.reset();
};