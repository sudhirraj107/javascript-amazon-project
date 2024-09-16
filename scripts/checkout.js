import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts ,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js'
// import '../data/backend-practice.js'

async function loadPage() {
    try {
        //throw 'error1';  //manually craeting error

        await loadProductsFetch();

        const value = await new Promise((resolve, reject) =>{
            // throw 'error2';  Not loading the cart
            loadCart(()=>{
                // reject ('error3');
                resolve('value3');
            });
        })   

    } 
    catch (error) {
        console.log('Unexpected error. Please try again later.')
    }
    
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) =>{
        loadCart(()=>{
            resolve();
        });
    })

]).then((values)=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
new Promise((resolve)=>{
    loadProducts(() =>{
        resolve('value1');
    })

}).then(()=>{
    return new Promise((resolve) =>{
        loadCart(()=>{
            resolve();
        });
    });

}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();    
})
*/

/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/