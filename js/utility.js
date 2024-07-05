
let total = 0;
function handleClick(target){
    // get product name 
    const productName = target.childNodes[3].childNodes[3].innerText;
    // console.log(productName);

    // select item container and put here select items 
    const itemsContainer = document.getElementById('select-items-container');
    const li = document.createElement('li');
    li.innerText = productName; 
    itemsContainer.appendChild(li);

    // get  product price 
    const productPriceString = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    const productPrice = parseFloat(productPriceString);

    // now calculate total ammount
    total = parseFloat(total) + productPrice;
    // console.log(total);

    // now assign total ammount in total section
    document.getElementById('total-amount').innerText = total.toFixed(2);

    // checking purches button
    if(total > 0){
        const puchaseId = document.getElementById('purchase-btn');
        puchaseId.removeAttribute('disabled');
    }

    if(total >= 200){
        // here coupon Apply btn is enable 
        const couponApplyId = document.getElementById('coupon-apply-btn');
        couponApplyId.removeAttribute('disabled');
    }
    
}


document.getElementById('coupon-apply-btn').addEventListener('click', function(){

    // get coupon code form hero section
    const couponCode = document.getElementById('cupon-code').innerText.split(' ')[3];

    // get coupon code form input field
    const userCouponCode = document.getElementById('user-input-coupon').value;
    // console.log(userCouponCode);

    // now checked is valid or not
    if(couponCode === userCouponCode){
        
        // if you got a discount than message is shown
        alert('Awesome!! You Got a Discount');

        // discount calculation
        const discountAmount = (20 * total) / 100;

        // after discount total price
        const totalPric = total - discountAmount;

        //get discount position and set the discount value
        const positionOfDiscount = document.getElementById('Discount-position');
        positionOfDiscount.innerText = discountAmount.toFixed(2);

        //get total position and set the total amount after discount 
        const positionOfTotal = document.getElementById('total-position');
        positionOfTotal.innerText = totalPric.toFixed(2);

    }

    // if coupon is incorrect tha show a message
    else{
        alert('Coupon Code is Incorect!! Please Write Valid Coupon Code')
    }

})


document.getElementById('go-home').addEventListener('click', function(){
    location.reload(true);
})



