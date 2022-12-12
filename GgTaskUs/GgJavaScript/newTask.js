// contact manager
let searchMe = document.getElementById('searchMe');
let search = document.getElementById('search');

searchMe.addEventListener('change', () => {
    searchMe.value = searchMe.value.charAt(0).toUpperCase() + searchMe.value.slice(1).toLowerCase();
});

// improved linear search
search.addEventListener('click', () => {
    if (searchMe.value != '') {
        if (contactMap.get(searchMe.value)) {
            alert(`Contact Found \n Name: ${searchMe.value} \n Number: ${contactMap.get(searchMe.value)}`);
            searchMe.value = '';
        } else {
            alert(`${searchMe.value} Contact Not Found`);
            searchMe.value = '';
        }
    } else {
        alert('Nothing to search here');
    }
});

let time = new Date();
let contactName = document.getElementById('contactName');
let contactNumber = document.getElementById('contactNumber');
let addContact = document.getElementById('addContact');
let addedContacts = document.getElementById('addedContacts');

contactName.addEventListener('change', () => {
    contactName.value = contactName.value.charAt(0).toUpperCase() + contactName.value.slice(1).toLowerCase();
});

//let contactArr = [];

let contactMap = new Map();

addContact.addEventListener('click', () => {
    // mapping 
    contactMap.set((contactName.value), contactNumber.value);
    // maping ends

    if (contactName.value != '' && contactNumber.value != '') {
        alert('You added a new contact');
        let contactDiv = document.createElement('div');
        let nameLabel = document.createElement('label');
        nameLabel.setAttribute('class', 'name');
        nameLabel.innerText = 'Name: ';
        let numberLabel = document.createElement('label');
        numberLabel.setAttribute('class', 'number');
        numberLabel.innerText = 'Number: ';
        //contactArr.push(contactName.value.charAt(0).toUpperCase() + contactName.value.slice(1).toLowerCase());
        let nameContact = document.createElement('span');
        nameContact.contentEditable = true;
        nameContact.innerText = `${contactName.value}`;
        let numberContact = document.createElement('span');
        numberContact.contentEditable = true;
        numberContact.innerText = `${contactMap.get(contactName.value)}`
        let button = document.createElement('button');
        button.innerText = 'Block';

        //DOM
        nameLabel.appendChild(nameContact);
        numberLabel.appendChild(numberContact);
        contactDiv.appendChild(nameLabel);
        contactDiv.appendChild(numberLabel)
        contactDiv.appendChild(button);
        addedContacts.appendChild(contactDiv);
        


        button.addEventListener('click', () => {
            if (button.innerText == 'Block') {
                alert('You blocked this contact');
                button.innerText = 'Unblock';
                nameLabel.style.background = 'rgb(182, 181, 181)';
                nameLabel.style.textDecoration = 'line-through';
                numberLabel.style.background = 'rgb(182, 181, 181)';
                numberLabel.style.textDecoration = 'line-through';
                
            } else if (button.innerText == 'Unblock') {
                alert('This contact has been unbloked')
                button.innerText = 'Block';
                nameLabel.style.background = '#71a5f8';
                nameLabel.style.textDecoration = 'none';
                numberLabel.style.background = '#71a5f8';
                numberLabel.style.textDecoration = 'none';
                
            } 
        })


        contactName.value = '';
        contactNumber.value = '';

        /*object loop
        let contactObj = {};
        let count = -1
        for (let k = 0; k < contactArr.length; k++) {
            count += 1;
            contactObj[contactArr[k]] = contactNum[count];
        }
        object loop ends here*/

        /*contactArr.sort();

        addedContacts.innerHTML = contactArr.map((item) => {
            return `<span>Name: ${item}<br>Number: ${contactMap.get(item)}</span><button class = 'block'>Block</button>`;
        }).join('');

        let block = document.getElementsByClassName('block');
        for (let i = 0; i < block.length; i++) {
            block[i].addEventListener('click', () => {
                if (block[i].innerText == 'Block') {
                    block[i].innerText = 'Unblock';
                    alert('This contact has been blocked');
                    
                } else if(block[i].innerText == 'Unblock') {
                    block[i].innerText = 'Block';
                    alert('You unblocked this contact');
                }
                
            });
            
        }*/



    } else {
        alert('No Field must be Empty');

    }
});

/* bubble sort
let bubbleSort = (array) => {
    let isSorted;
    for (let i = 0; i < array.length; i++) {
        isSorted = true;
        for (let j = 1; j < array.length-i; j++) {
            if (array[j] < array[j - 1]) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
                isSorted = false;
            }
            if (isSorted) {
                return;
            }
        }
        
    }
}*/



// todo manager

let todo = document.getElementById('todo');
let addTodo = document.getElementById('addTodo');
let lists = document.getElementById('lists');

let count = document.getElementById('count');
let taskArr = [];

todo.addEventListener('change', () => {
    todo.value = todo.value.charAt(0).toUpperCase() + todo.value.slice(1).toLowerCase()
})

addTodo.addEventListener('click', () => {
    if (todo.value != '') {
        alert('New item added');
        let listDiv = document.createElement('div');
        let newTodo = document.createElement('li');
        newTodo.contentEditable = true
        let strTodo = document.createElement('input');
        strTodo.setAttribute('type', 'checkbox');
        newTodo.innerHTML = `${todo.value}`;

        //DOM
        listDiv.appendChild(newTodo);
        listDiv.appendChild(strTodo);
        lists.appendChild(listDiv);
        todo.value = '';

        taskArr.push(newTodo.innerText);
        let result = taskArr.length;
        count.innerText = result;

        strTodo.addEventListener('click', () => {
            if (strTodo.checked == true) {
                taskArr.pop();
                count.innerText = taskArr.length;
                alert('Task completed');
                /*taskArr.splice(taskArr.indexOf(newTodo), 1)
                count.innerText = taskArr.length;*/
                newTodo.style.background = 'rgb(182, 181, 181)'
                newTodo.style.textDecoration = 'line-through';
            } else if (strTodo.checked == false) {
                alert('Task Rescheduled');
                taskArr.push(newTodo.innerText);
                count.innerText = taskArr.length;
                //count.innerText = taskArr.length;
                newTodo.style.background = '#71a5f8';
                newTodo.style.textDecoration = 'none';
            }

        });

    } else {
        alert('Please Enter an Item');

    }
});

// clear todo
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    alert('You now how have no pending tasks')
    lists.replaceChildren();
    count.innerText = 0;
})