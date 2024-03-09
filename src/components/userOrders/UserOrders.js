import React from "react";
import "./style.css";
function UsersOrders({ orders }) {
  console.log("orders", orders);
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Photos</th>
            <th>Quantity</th>
            <th>Shoe Size</th>
            <th>Total Price</th>
            <th>Rviews</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{`${order.firstName} ${order.lastName}`}</td>
              <td>{`${order.address}, ${order.city}, ${order.postalCode}`}</td>
              <td>
                {order.products.map((product) => (
                  <div key={product.product._id}>
                    {product.product.productname}
                  </div>
                ))}
              </td>
              <td>
              
              {order.products.map((product) => (
                  <div key={product.product._id}>
                    {product.productcategory.name}
                  </div>
                ))}
              
              </td>
              <td className="flex flex-col justify-center gap-2">
                {order.products.map((product) => (
                  <div
                    key={product.product._id}
                    className="h-[100px]  w-[100px]"
                  >
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}product/get-featured-product-photos/${product.product._id}/photos/0`}
                      className="w-[100%] h-[100%] object-cover"
                      alt=""
                    />
                  </div>
                ))}
              </td>
              <td>
                {order.products.map((product) => (
                  <div key={product.product._id}>{product.quantity}</div>
                ))}
              </td>
              <td>
                {order.products.map((product) => (
                  <div key={product.product._id}>{product.showSize}</div>
                ))}
              </td>
              <td>{calculateTotal(order.products)}</td>
              <td>
                {order.products.map((product) => {
                  return (
                    <div key={product.product._id}>
                      {product.product.reviews.length}
                    </div>
                  );
                })}
              </td>
              <td>
                <button
                  disabled
                  className="py-[10px] px-[10px] rounded text-[#ffff] bg-[#5c5c5c]"
                >
                  {order.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function calculateTotal(products) {
  return products.reduce((total, product) => {
    return total + product.quantity * product.product.newprice;
  }, 0);
}



export default React.memo(UsersOrders);
