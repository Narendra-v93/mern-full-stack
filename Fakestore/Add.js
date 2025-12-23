let cart = [];
function addToCart(product) {
  cart.push(product);
  console.log("Product added to cart:", product);
  console.log("Current cart:", cart);
}       
export { addToCart };
