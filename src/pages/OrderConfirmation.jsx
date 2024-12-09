function OrderConfirmation({ order }) {
  return (
    <div>
      <h2>Thank you for your response</h2>
      <p>
        Your Order has been placed successfully you will receive an email
        confirmation shortly
      </p>
      <div>
        <h3>order Summary</h3>
        <p>Order Number : {order.orderNumber}</p>
        <div>
          <h2>Shipping Information</h2>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div>
          <h3>Products Ordered</h3>
          {order.products.map((product) => (
            <div key={product.id}>
              <p>
                {product.name} X {product.quantity}
              </p>
              <p>{product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div>
          <span>Total Price:</span>
          <span>{order.totalPrice}</span>
        </div>
        <div>
          <button>Order tracking</button>
          <button>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}
export default OrderConfirmation;
