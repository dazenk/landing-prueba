const form = document.getElementById('form-sub');
const btn = document.querySelector('.btn-form');

const inputName = document.getElementById('name');
const inputDocType = document.getElementById('doctype');
const inputEmail = document.getElementById('email');
const inputDocNum = document.getElementById('docnum');
const inputAccept = document.getElementById('accept');

btn.addEventListener("click", (e) => {
    if (inputName.validity.valid && inputDocType.validity.valid
        && inputEmail.validity.valid && inputDocNum.validity.valid
        && inputAccept.validity.valid) {
            e.preventDefault()
            Swal.fire({                
                title: '¡Gracias!',
                text: 'Suscripción exitosa',
                icon: 'success',
                confirmButtonText: 'Cerrar'
            })
            form.reset();
    }
})