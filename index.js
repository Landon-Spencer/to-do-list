document.addEventListener('DOMContentLoaded', () => {

  const toDoItems = document.getElementById('toDoItems');
  const completedItems = document.getElementById('listOfCompletedItems');
  const addItem = document.getElementById('addItem');
  const addButton = document.getElementById('addItemButton');

  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const item = addItem.value;
    const newItemElement = document.createElement('input');
    newItemElement.type = 'checkbox';
    newItemElement.id = item;
    const newItemLabel = document.createElement('label');
    newItemLabel.htmlFor = item;
    newItemLabel.innerHTML = item;
    const newItemButton = document.createElement('button');
    newItemButton.innerHTML = 'Move item to completed list';
    newItemButton.addEventListener('click', (event) => {
      event.preventDefault();
      const newCompletedItem = document.createElement('li');
      newCompletedItem.id = `${item}`;
      newCompletedItem.innerHTML = item;
      completedItems.appendChild(newCompletedItem);
      toDoItems.removeChild(newItemElement);
      toDoItems.removeChild(newItemLabel);
      toDoItems.removeChild(newItemButton);
      toDoItems.removeChild(document.getElementById(`${item} toDo br`));
    })
    const newBreak = document.createElement('br');
    newBreak.id = `${item} toDo br`;
    toDoItems.appendChild(newItemElement);
    toDoItems.appendChild(newItemLabel);
    toDoItems.appendChild(newItemButton);
    toDoItems.appendChild(newBreak);
    addItem.value = '';
  });
});

