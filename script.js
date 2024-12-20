function showForm(formId) {
    document.querySelectorAll('.form-content').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(formId + 'Form').style.display = 'block';

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector('.tab-button[onclick="showForm(\'' + formId + '\')"]').classList.add('active');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    alert(`Login con email: ${email} e password: ${password}`);
}

function register() {
    const name = document.getElementById('registerName').value;
    const surname = document.getElementById('registerSurname').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    alert(`Registrazione con nome: ${name}, cognome: ${surname}, email: ${email} e password: ${password}`);
}


showForm('login');