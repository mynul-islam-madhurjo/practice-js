//Using id is the best way to do it as it is always unique
const button = document.getElementById('myButton'); //querySelector
const messageContainer = document.getElementById('messageContainer');

array =['a', 'b', 'c', 'd', 'e', 'f', 'g'];

button.addEventListener('click', () => {
    // messageContainer.textContent = 'Button clicked!';
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        messageContainer.textContent = array[i];
    }
});


//Using dom to create html element in body
const elementNode = document.createElement('p');
const textNode = document.createTextNode('Content');
const attributeNode = document.createAttribute('class');

//Declares the class name
attributeNode.value = 'some-class';
//Putting text inside the tag
elementNode.appendChild(textNode);
//setting class name
elementNode.setAttributeNode(attributeNode);
//Pushing newly created element into our document
document.body.appendChild(elementNode);



