// Eventos de los inputs
// Leer lo que ingresa el usuario

const UserName = document.querySelector('.user-name');
const UserPhone = document.querySelector('.user-phone');
const UserEmail = document.querySelector('.user-email');
const UserMessage = document.querySelector('.user-message');

function readText(e){
    console.log(e.target.value);
}

/* UserName.addEventListener('input', function(e){
    //Leer lo que el usuario ingresa
    console.log(e.target.value)
});

UserPhone.addEventListener('input', function(e){
    //Leer lo que el usuario ingresa
    console.log(e.target.value)
});

UserEmail.addEventListener('input', function(e){
    //Leer lo que el usuario ingresa
    console.log(e.target.value)
});

UserMessage.addEventListener('input', function(e){
    //Leer lo que el usuario ingresa
    console.log(e.target.value)
}); */

// Refactoring
UserName.addEventListener('input', readText);
UserPhone.addEventListener('input', readText);
UserEmail.addEventListener('input', readText);
UserMessage.addEventListener('input', readText);


