// Time to get some practice working with forms and form events! index.html already has a form element that contains two < input > elements,
//     one for quantity and one for a product name.index.html also contains an empty < ul > where you will append new < li > 's.
//     Watch the gif at the bottom for an overview of how your code should work.Your task is to follow these steps:

// Listen for the form submission

// When the form is submitted, prevent the default behavior

// Grab the quantity input value and the product input value

// Create a new <li> element.  Set the text on the new <li> to include the quantity and product name from the form.

// Append the new <li> to the <ul> on the page

// Reset the inputs



const form = document.querySelector('form');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');
const groceryList = document.querySelector('#list');

form.addEventListener('submit', function(e){
        e.preventDefault();
        const newList = document.createElement('li');
        newList.innerText = `${product.value} ${quantity.value}`;
        groceryList.appendChild(newList);
        product.value = '';
        quantity.value = '';
});
