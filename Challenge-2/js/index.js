const setValueToLocalStorage = (inputId, key) => {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = ``;
    localStorage.setItem(key, inputValue);
}

const removeItemFromLocalStorage = (key) => {
    const item = localStorage.removeItem(key);

}


// event handler 

// name field 
// set 
document.getElementById('send-name').addEventListener('click', function () {
    setValueToLocalStorage('name-field', 'name')
});

// delete 
document.getElementById('delete-name').addEventListener('click', function () {
    removeItemFromLocalStorage('name');
});



// email field 
// set 
document.getElementById('send-email').addEventListener('click', function () {
    setValueToLocalStorage('email-field', 'email')
});


// delete 
document.getElementById('delete-email').addEventListener('click', function () {
    removeItemFromLocalStorage('email');
});

// text area field 
// set
document.getElementById('send-text-area').addEventListener('click', function () {
    setValueToLocalStorage('textarea-field', 'text-area')
});

// delete 
document.getElementById('delete-text-area').addEventListener('click', function () {
    removeItemFromLocalStorage('text-area');
});

// reset button field 
document.getElementById('reset-btn').addEventListener('click', function () {
    localStorage.clear();
});