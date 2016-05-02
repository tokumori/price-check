/**
 * Sends a request to the server to get Uber products based on passed in
 * latitude and longitude positions.
 * @param  {number} lat The location's latitude value
 * @param  {number} lng The location's longitude value
 * @return {[Products]]} The Uber products available at the queried location
 */
function getProductsByLocation (lat, lng) {
  var location = {
    latitude: lat,
    longitude: lng
  };
  var products = getProducts(location);
  return products;
}

var productPrices = getProductsByLocation(21.3069, -157.8583);

var display = document.getElementById('main');
var product = productPrices.responseJSON.products;

for (var i = 0; i < product.length; i++) {
  console.log(product);

  var displayName = document.createElement('h3');
  displayName.innerHTML = product[i].display_name;
  display.appendChild(displayName);

  var descrip = document.createElement('p');
  descrip.innerHTML = product[i].description;
  display.appendChild(descrip);

  var priceDetails = product[i].price_details;

  for (var prop in priceDetails){
    // console.log(prop);
    // console.log(priceDetails[prop]);
    var price = document.createElement('p');
    price.innerHTML = prop + ": " + priceDetails[prop];
    display.appendChild(price);
  }
}
/**
 * Gets the products from a certain location.
 * @param  {object} The location object to query
 * @return {[Product]]} An array of products
 */
function getProducts (location) {
  return $.ajax({
    type: "GET",
    data: location,
    url: '/products',
    async: false
  });
}

// Stretch Goal
/**
 * Returns the device's current location.
 * @return {object} The device's current location
 */
function requestProductsByCurrentPosition () {
  /* The `getCurrentPosition` takes a function as it's first argument.
   * This function is referred to as a "callback" function, because it is
   * called when the result (current location) is found.
   */
  navigator.geolocation.getCurrentPosition(/* your function name goes here */);
}
