const mail = document.getElementById('mail');
const pass = document.getElementById('pass');
const btn = document.getElementById('btn');

btn.addEventListener('submit', () => {
    if (mail.value != '' && pass.value != '') {
        
        
    } else {
        alert("No field must be left empty")
    }
})