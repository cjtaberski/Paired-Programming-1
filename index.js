//let input = document.querySelector('#addItem')
//console.log(input);

//input.addEventListener("Click" () =>

//event listener sees click
//executes function that creates a new <li> item in the ordered list whose value is equal to the input, then adds a break statement

//Add your JavaScript
//- Create a variable that will hold your to-do list items.
//- Add a function that takes in a string as input and adds it to the to-do list.
//- Add an event handler to populate an HTML element with your to-do list when the user clicks the appropriate button.

//let listItem = document.querySelectorAll("li");
//listItems.forEach(item =>{

//item.eventListener("Click", function(item) {
//    item.value = `<strike>${item.value}<strike>`
//}

//-----------google---------------
const todoItems = document.querySelectorAll('.todo-item');

todoItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('strikethrough');
  })
});
//----css code
// .strikethrough {
//     text-decoration: line-through;
//   }

// let button = document.querySelector('button');

let button = document.querySelector('button');

let toDoItems = document.querySelectorAll('li')

let container = document.querySelector('ol');

console.log(document.getElementById('newItem').innerHTML);

let value = 3;
// button.addEventListener("click", () => {
//     let newItem = document.getElementById('newItem');
//     let newItemText = newItem.value;
//     console.log(newItemText);
// });
// var startingValue = toDoItems.length - 1;

button.addEventListener("click", () => {
    console.log('Button has been clicked');
    let newDiv = document.createElement('div')
    container.appendChild(newDiv)
    let newLi = document.createElement('li');
    let newItem = document.getElementById('newItem');
    let newItemText = newItem.value;
    let content = document.createTextNode(newItemText);
    newLi.appendChild(content);
    newLi.setAttribute('id', `item4`);
    let newBox = document.createElement('input');
    newBox.setAttribute('type', 'checkbox')
    value++;
    newBox.setAttribute('class', 'checkbox');
    newBox.setAttribute('id', `item${value}`)
    newDiv.appendChild(newLi);
    newDiv.appendChild(newBox);
    //container.appendChild('br');
  });

let listArray = document.querySelectorAll('li');
let divItem = document.querySelector('div');
let boxArray = document.querySelectorAll('input[class="checkbox"');
console.log(boxArray);
boxArray.forEach(checkbox => {
    var checkId = checkbox.id;
    checkbox.addEventListener("click", () => {
    for (var i = 0; i < listArray.length; i++) {
        if (listArray[i].id == checkId) {
                listArray[i].style.textDecoration = "line-through";
            }
        }
    })
})

//------CHECK BOX PLUS STRIKETHROUGH CHATGPT--------------
// Create checkbox
// let newBox = document.createElement('input');
// newBox.setAttribute('type', 'checkbox');
// newBox.setAttribute('id', `checkbox${value}`);
// newBox.addEventListener('change', (event) => {
//     // Strike through text when checkbox is checked
//     if (event.target.checked) {
//         newLi.classList.add('strikethrough');
//     } else {
//         newLi.classList.remove('strikethrough');
//     }
// });



//when a list item is clicked, that list items value is set equal to the original value inclosed in a <strike> tag
//newLi.appendChild(newBox);
//newLi.appendChild(document.createTextNode(' ' + newItemText));


// //---------google--------------
// // Get the checkbox element
// const checkbox = document.getElementById("dog"); 

// // Add an event listener for the 'change' event
// checkbox.addEventListener("change", function() {
//   if (this.checked) {
//     // Checkbox is checked
//     console.log("Good job walking dog"); 
//   } else {
//     // Checkbox is unchecked
//     console.log("Checkbox is unchecked"); 
//   }
// });



// if all values = true 
//     then play music 
// else 
//     do nothing

{
    
    
    
    
    
    /* <form>
        <fieldset>
            <legend>Do thus quest for thine weekend succus</legend>
            <div>
                <input type="checkbox" id="dog">
                <label for="dog">Walk the dog</label><br>
            </div>    
            <div>
                <input type="checkbox" id="roomba">
                <label for="roomba">Start the roomba</label><br>
            </div>
            <div>
                <input type="checkbox" id="laundry">
                <labal for='laundry'>Fold the laundry</labal><br>
            </div>
            <div> 
                <input type="checkbox" id="dishes">
                <label for="dishes">Do the dishes</label><br>
            </div>   
        </fieldset> */}