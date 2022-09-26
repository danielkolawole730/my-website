let form = document.getElementById('addform');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e){
    e.preventDefault();

//get input value
let newItem = document.getElementById('item').value;  

//create new li element
let li = document.createElement('li');
//add class
li.className = 'list-group-item';
//add textnode with input value
li.appendChild(document.createTextNode(newItem));

//create del button element
let deleteBtn = document.createElement('button');

//add classes to del button
deleteBtn.className = 'button btn-danger btn-sm float-right delete';
//append text node
deleteBtn.appendChild(document.createTextNode('X'));

//append button to li
li.appendChild(deleteBtn);

//append li to list
itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    //get lis
    let items = itemList.getElementsByTagName('li');
    //convert to an array 
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
           item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}