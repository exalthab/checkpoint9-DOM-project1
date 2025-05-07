// Wait until the DOM is fully loaded to ensure HTML Elents are available for manipulation
document.addEventListener("DOMContentLoaded", () => {
    updateTotal(); // The initial total quantity shopping cart start once the page ready
  
    /*Selecting all the products cards in the shopping cart using selectorAll method
    and storing them in a const variable called products as identifier */
    const products = document.querySelectorAll(".card-body");
  
    // loop through each product card "forEach" and add "parsenFloat" to extract the unit price
    products.forEach((product) => {
      const plusBtn = product.querySelector(".fa-plus-circle");
      const minusBtn = product.querySelector(".fa-minus-circle");
      const quantitySpan = product.querySelector(".quantity");
      const unitPrice = parseFloat(
        product.querySelector(".unit-price").textContent
      );
      const deleteBtn = product.querySelector(".fa-trash-alt");
      const heartBtn = product.querySelector(".fa-heart");
  
      // Adjust the quantity of each item decrement "-" button
      minusBtn.addEventListener("click", () => {
        let qty = parseInt(quantitySpan.textContent);
        if (qty > 0) {
          quantitySpan.textContent = --qty;
          updateTotal();
        }
      });

      // Adjust quantity of each item increment "+" button
      plusBtn.addEventListener("click", () => {
        let qty = parseInt(quantitySpan.textContent);// read the current quantity
        quantitySpan.textContent = ++qty; // increase the quantity by 1
        updateTotal(); // UPdate the total price
      });
  
      // Clean-up and deletion
      deleteBtn.addEventListener("click", () => {
        //product.parentElement.remove(); // remove the whole card-body (product card)
        //product.closest(".card-body").remove(); // remove the whole card-body (product card)
        product.closest(".card").parentElement.remove();
        updateTotal(); // Update the total price after deletion (recaluculation of the total price)
      });
    });
  
      // Clickable heart-shaped "like" button
      document.querySelectorAll(".fa-heart").forEach((heartBtn) => {
        heartBtn.style.color = "black"; // default initial color (unlikded)
        heartBtn.addEventListener("click", () => {
            heartBtn.style.color = heartBtn.style.color === "red" ? "black" : "red"; // toggle color between red and black
      });
    });
});
  // Function to update the total price of all products in the cart
  function updateTotal() {
    let total = 0;
    const products = document.querySelectorAll(".card-body");
  
    products.forEach((product) => {
      const quantity = parseInt(product.querySelector(".quantity").textContent);
      const price = parseFloat(
        product.querySelector(".unit-price").textContent
      );
      total += quantity * price;
    });
    // Update the total price in the HTML after applying formular total += quantity * unit price
    document.querySelector(".total").textContent = total + " $";
  }