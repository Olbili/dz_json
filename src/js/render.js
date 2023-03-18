export default function createLi (email, password) {
    const markup = `<li> Email: ${email.value}, Password: ${password.value} </li>`;
    return markup;
};

