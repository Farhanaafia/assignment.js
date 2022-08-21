//  -------------- Solution of problem 1 -----------

// Convert Radian to degree check --------
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
       return 'please enter a number';
    }
    let pi = Math.PI;
    const degree = radian * (180 / pi);
    return degree.toFixed(2);
 }
 const result = (radianToDegree(10));
 console.log(result);
 
 //  -------------- Solution of problem 2 -----------
 
 const filet = "app.js"
 // JavaScript File check -----------
 function isJavaScriptFile(filet) {
    if (typeof filet !== 'string') {
       return 'Please enter a string';
    }
    else if (filet.endsWith(".js")) {
       return true;
    }
    else {
       return false;
    }
 
 }
 console.log(isJavaScriptFile(filet));
 
 //  //  -------------- Solution of problem 3 -----------
 
 const diesel = { price: 114, quantity: 1 }
 const petrol = { price: 130, quantity: 1 }
 const octane = { price: 135, quantity: 1 }
 //  Total Oil price check ----------
 function oilPrice(diesel, petrol, octane) {
    
    if ((typeof diesel !== 'object') || ( typeof petrol !== 'object') || (typeof octane !== 'object') ) {
       return 'Please type a object';
    }
    const totalDiesel = diesel.price * diesel.quantity;
    const totalPetrol = petrol.price * petrol.quantity;
    const totalOctane = octane.price * octane.quantity;
 
    const totalPrice = totalDiesel + totalPetrol + totalOctane;
    return totalPrice
 }
 
 const totalResult = oilPrice(diesel, petrol, octane);
 console.log(totalResult);
 
 //  //  -------------- Solution of problem 4 -----------
 
 const passengers = 235;
 // Left passengers check ----------
 function publicBusFare(passengers) {
    if(typeof passengers !== 'number'){
       return "Please enter a valid number"
    }
    const bus = passengers % 50;
    const microBus = bus % 11;
 
    const publicBusCost = microBus * 250;
    return publicBusCost
 }
 
 console.log(publicBusFare(passengers));
 
 //  //  -------------- Solution of problem 5 -----------
 
 const yourName = { name: "abul", friend: "kabul"}
 const friendName = { name: "kabul", friend: "abul" }
 //   Best friend cheack ------------
 function isBestFriend(yourName, friendName) {
    if(( typeof yourName !== 'object')||( typeof friendName !== 'object')){
       return 'Data type should be an object'
    }
    else if (yourName.name === friendName.friend && yourName.friend === friendName.name) {
       return true
    }
    else {
       return false
    }
 }
 
 console.log(isBestFriend(yourName, friendName));