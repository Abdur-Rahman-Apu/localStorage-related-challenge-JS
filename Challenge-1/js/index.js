
// clear local storage 

localStorage.clear();



// set items to local storage 

const setItemToLS = (key, value) => {
    localStorage.setItem(key, value);
}

setItemToLS('name', 'Sakib Khan');
setItemToLS('age', 40);

// get local storage value 

const getItemsFromLS = (key) => {
    const item = localStorage.getItem(key);
    if (item) {
        return item;
    }
}


const displayValue = (key) => {
    const value = getItemsFromLS(key);
    console.log(`${key} : ${value}`);
}

displayValue('name');
displayValue('age');


// remove the local storage key 

const removeFromLs = (key) => {
    localStorage.removeItem(key);
}

removeFromLs('name');

removeFromLs('age');

// set a object as local storage item 

const obj = {
    firstName: 'Abraham',
    lastName: 'Linkon'
}

const stringifiedObj = JSON.stringify(obj);

localStorage.setItem('Object', stringifiedObj);