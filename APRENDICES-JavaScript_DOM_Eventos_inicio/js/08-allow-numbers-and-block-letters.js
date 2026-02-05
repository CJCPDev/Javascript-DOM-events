// Bloquear letras y permitir números


document.querySelector('.user-phone').addEventListener('keydown', function(e){
    if(
        e.key === "Backspace" || 
        e.key === "Tab" ||  
        e.key === "Enter" ||  
        e.key === "ArrowLeft" || 
        e.key === "ArrowRight"
        ){
            return;
        };

        // Bloquear cualquier letra que no sea número

    if(e.key < '0' || e.key > '9'){
        e.preventDefault()
        console.log('Solo se permiten números')
    }
});

