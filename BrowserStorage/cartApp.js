
function initializeCart(){
    if(localStorage.getItem('cart') === null)
        localStorage.setItem('cart', JSON.stringify([]));
}

function addItem(i){
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(i);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(ID) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.filter(item => item.id !== ID);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

function displayCart(){
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeCart();
  
    const addItemForm = document.getElementById('addItemForm');
    addItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const itemName = document.getElementById('itemName').value;
      const itemPrice = parseFloat(document.getElementById('itemPrice').value);
      const itemId = new Date().getTime();
  
      const item = {
        id: itemId,
        name: itemName,
        price: itemPrice
      };
  
      addItem(item);
    });
  
    const displayCartButton = document.getElementById('displayCartButton');
    displayCartButton.addEventListener('click', () => {
      displayCart();
    });
});