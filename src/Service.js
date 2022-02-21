function Service() {
    
    return(
        <div>
            <h2>How to buy</h2>
            <p className="pService">The procedure for purchasing goods in our online store is very simple and consists of several steps. </p>
            <ol>
                <li className="liService">Checkout </li>
                <p className="pService">Select a product, specify the quantity and click Add to Cart, then proceed to the shopping cart to checkout or continue shopping. You can also select a product and click Buy in 1 click, after filling in the data, our manager will contact you. </p>
                <p className="pService">To place an order, go to your basket, all the products you have chosen will be listed there. </p>
                <p className="pService" >In the Quantity field, you can change the quantity of goods to purchase, you can also enter a discount code in the appropriate field, the order amount will be recalculated automatically. </p>
                <li className="liService">Placing and confirming an order </li>
                <p className="pService">After entering the necessary information about the delivery of the goods (name of the recipient, delivery address, contact details, delivery option, payment method, etc.) to place an order, you need to click the Place an order button. </p>
                <p className="pService">A copy of the order will be sent to your e-mail specified during the ordering process. </p>
                <p className="pService"><b>Attention!</b> Incorrect phone number, inaccurate or incomplete address may result in additional delay! Please carefully check your personal data when registering and placing an order. </p>
                <p className="pService">After some time (usually within an hour) after making a purchase, our manager will contact you using the contact details specified when placing the order. With the manager it will be possible to agree on the exact time and delivery time, as well as clarify the details. </p>
                <p className="pService"><b>Note:</b> For regular customers, there is a Registration on the store's website. In your account, you can view the contents of the basket, the history of your orders, as well as repeat or refuse an order, accumulate bonuses. </p>
                <li className="liService">Payment and prices </li>
                <p className="pService">The prices indicated on the site are final and do not require additional payments under standard delivery conditions. All taxes are included in the price of the item. </p>
                <p className="pService"><b>Attention!</b> Only one payment method of your choice is allowed for each individual order. It is not possible to pay for an order in parts using various methods. </p>
                <p className="pService">Possible payment methods: </p>
                <ul>
                    <li className="liService">Cash.</li>
                    <p className="pService">Payment is made in cash to the courier upon delivery. Together with the goods, a sales receipt and a cash receipt are transferred. </p>
                    <li className="liService">Cashless payments.</li>
                    <p className="pService">You can pay for the order on our website with a card of any bank without commission. </p>
                </ul>
            </ol>
        </div>
    )
}
export default Service;