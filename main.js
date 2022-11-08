console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let n1 = document.getElementById('node1');
n1.innerHTML = 'I used the getElementById(\'node1\') method to access this';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let n2 = document.getElementsByClassName('node2');
n2[0].innerHTML = 'I used the getElementsByClassName(\'node2\') method to access this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let n3 = document.getElementsByTagName('h3');
for (let ele of n3) ele.innerHTML = 'I used the getElementByTagName(\'h3\') method to access all of these'

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let p = document.createElement('p');
p.textContent = 'This node was created using the createElement() method';

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent1 = document.getElementById('parent');
parent1.appendChild(p);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let a = document.createElement('a');
a.textContent = 'I am a <a> tag'
a.setAttribute('href', 'https://en.wikipedia.org')

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent1.insertBefore(a, p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let p1 = document.getElementById('N1');
let p2 = document.createElement('p');
p2.textContent = 'New Child Node';
let parent3 = document.getElementById('exercise-container3');
parent3.replaceChild(p2,p1)

// TODO: Remove the "New Child Node"
parent3.removeChild(p2);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let ulist = document.createElement('ul');
let parent4 = document.getElementById('container');

// TODO: Iterate over the array values, and create a list item element for each

list.forEach(element => {
    let temp = document.createElement('li');
    temp.textContent = element;
    ulist.appendChild(temp);
});

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 
parent4.appendChild(ulist);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show(){
    const modalDiv = document.createElement('div');
    const modalCard = document.createElement('div');
    const closeModalBtn = document.createElement('button');


    modalDiv.id = 'modal';
    modalCard.classList.add('modal-card')
    modalCard.textContent = 'Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user';
    closeModalBtn.text = 'x';
    closeModalBtn.addEventListener('click', () => {
        modalDiv.remove();
        modalCard.remove();
    })


    modalDiv.appendChild(modalCard);
    modalCard.appendChild(closeModalBtn);
    document.querySelector('body').appendChild(modalDiv);
}