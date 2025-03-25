/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 * - Клас FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
* - Назви колбеків для слухачів
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent 
*/

const formEl = document.querySelector('.js-register-form')

formEl.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget.elements

    const email = form.email.value
    const password = form.password.value
    const subscription = form.subscription.value

    console.log(email, password, subscription);

   

    event.currentTarget.reset()
}






// function onFormSubmit(event) {
//     event.preventDefault();

// // const formData = new FormData()
// // console.log(formData);

//     const formElements = event.currentTarget.elements;

//     const email = formElements.email.value;
//     const password = formElements.password.value;
//     const subscription = formElements.subscription.value;

//     const formData = {
//         email,
//         password,
//         subscription,
//     }

//     console.log(formData);
// }