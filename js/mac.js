// Variable
let totalPrice = document.getElementById('total-price');
let finalTotalPrice = document.getElementById('final-total-price');
let totalPriceText = totalPrice.innerText;
let totalPriceAmount = parseFloat(totalPriceText);
let memoryTotal = 0;
let storageTotal = 0;
let deliveryTotal = 0;

// event handler for 8 GB memory
document.getElementById('memory-8gb').addEventListener('click', function (e) {
    e.preventDefault();
    memoryTotal = 0;
    document.getElementById('memory-cost').innerText = 0;
    showOutput();
})

//event handler for 16 Gb Memory
document.getElementById('memory-16gb').addEventListener('click', function (e) {
    e.preventDefault();
    memoryTotal = 180;
    document.getElementById('memory-cost').innerText = 180;
    showOutput();
})

//event handler for 256 Gb Storage
document.getElementById('storage-256gb').addEventListener('click', function (e) {
    e.preventDefault();
    storageTotal = 0;
    document.getElementById('storage-cost').innerText = 0;
    showOutput();
})

//event handler for 512Gb Storage
document.getElementById('storage-512gb').addEventListener('click', function (e) {
    e.preventDefault();
    storageTotal = 100;
    document.getElementById('storage-cost').innerText = 100;
    showOutput();
})

//event handler for 1TB Storage
document.getElementById('storage-1tb').addEventListener('click', function (e) {
    e.preventDefault();
    storageTotal = 180;
    document.getElementById('storage-cost').innerText = 180;
    showOutput();
})

//event handler for Friday,August 25 delivery
document.getElementById('aug-25').addEventListener('click', function (e) {
    e.preventDefault();
    deliveryTotal = 0;
    document.getElementById('delivery-charge').innerText = 0;
    showOutput();
})

//event handler for Friday,August 21 delivery
document.getElementById('aug-21').addEventListener('click', function (e) {
    e.preventDefault();
    deliveryTotal = 20;
    document.getElementById('delivery-charge').innerText = 20;
    showOutput();
})


//event handler for promo code
document.getElementById('apply-promo').addEventListener('click', function (e) {
    e.preventDefault();
    const promoCode = document.getElementById('promo-code');
    if (promoCode.value == 'stevekaku') {
        finalTotalPrice.innerText = totalPriceAmount - (totalPriceAmount * 0.2);
    }
    promoCode.value = '';
})

//------Function---------
//----------------------//

//total price calculation
function totalPriceShow() {
    totalPriceAmount = 1299 + memoryTotal + storageTotal + deliveryTotal;
    return totalPriceAmount;
}

// Total output calculation
function showOutput() {
    totalPrice.innerText = totalPriceShow();
    finalTotalPrice.innerText = totalPriceShow();
}