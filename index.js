document.addEventListener('DOMContentLoaded', () => {

  const toDoItems = document.getElementById('toDoItems');
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
    newItemButton.innerHTML = 'Remove Item';
    newItemButton.addEventListener('click', (event) => {
      event.preventDefault();
      toDoItems.removeChild(newItemElement);
      toDoItems.removeChild(newItemLabel);
      toDoItems.removeChild(newItemButton);
      toDoItems.removeChild(document.querySelector('br'));
    })
    toDoItems.appendChild(newItemElement);
    toDoItems.appendChild(newItemLabel);
    toDoItems.appendChild(newItemButton);
    toDoItems.appendChild(document.createElement('br'));
    addItem.value = '';
  });
});

