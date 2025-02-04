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
    newItemElement.addEventListener('click', () => {
      console.log(`Item ${item} has been clicked`);

    })
    const newItemLabel = document.createElement('label');
    newItemLabel.htmlFor = item;
    newItemLabel.innerHTML = item;
    toDoItems.appendChild(newItemElement);
    toDoItems.appendChild(newItemLabel);
    toDoItems.appendChild(document.createElement('br'));
    addItem.value = '';
  });



});

