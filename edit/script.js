
const apples = document.querySelector('#list li:nth-child(2)');
const oatMilk = document.querySelector('#list li:nth-child(4)');
const kombucha = document.createElement('li');
kombucha.textContent = 'Kombucha';
const list = document.getElementById('list');
const items = ['protein bars', 'almonds', 'peanut butter'];
const almonds = document.querySelector('#list li:nth-child(2)');


apples.textContent = 'Granny Smith Apples';
oatMilk.remove();
list.appendChild(kombucha);
list.innerHTML = '';

items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
});

almonds.classList.add('important');