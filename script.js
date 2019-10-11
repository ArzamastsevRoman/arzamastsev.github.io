function validateName (name) {
    if (name.validity.patternMismatch) {
        console.log('рабит');
        console.log(name.validity);
    } else {
        console.log('not working');
    }
}

const inputName = document.querySelector('#inputName');

let regexName = new RegExp('([А-Я]{1}[а-яё]+)\-?([А-Я]{1}[а-я]*)?', 'g'); // /[А-Я]{1}[а-я]+-/g; ([А-Я]{1}[а-я]+)\-?([А-Я]{1}[а-я]+)

inputName.addEventListener('input', () => {
    console.log(regexName.test(inputName.value));
    //validateName(inputName);
});

/*
popupFormEdit.addEventListener('input', () => {
    const nameErrorText = validateTextField(popupFormEditInputName);
    errorEditName.textContent = nameErrorText;
    const aboutErrorText = validateTextField(popupFormEditInputAbout);
    errorEditAbout.textContent = aboutErrorText;

    if (nameErrorText === '' && aboutErrorText === '') {
        popupEditButton.removeAttribute('disabled');
        popupEditButton.classList.add('popup__button-edit');
    }	else {
        popupEditButton.setAttribute('disabled', true);
        popupEditButton.classList.remove('popup__button-edit');
    }
});
*/