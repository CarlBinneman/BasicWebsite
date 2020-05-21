const form = document.getElementById('form');
const name = document.getElementById('name');


// SUBMIT BUTTON

form.addEventListener('submit', e => {
    e.preventDefault(); // stop form from submitting

})

function valdate() {

    const name = document.getElementById('name');

    if(name.value.trim() === '') {
        alert(name, 'fill out this field');
        return false;
    } else {
        setSuccessFor(name);
    } 

}







 