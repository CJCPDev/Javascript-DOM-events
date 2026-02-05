// Bloqueo de teclas


const KeysLocked = [
    'a', 'b', 'A', 'B'
]


document.querySelectorAll('.campo__field').forEach(field => {
    field.addEventListener('keydown', function (e){
        if(KeysLocked.includes(e.key)){
            e.preventDefault();
            console.log(`Tecla ${e.key} bloqueada`)
        };
    });
});




