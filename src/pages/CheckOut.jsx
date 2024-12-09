import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function CheckOut() {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-4 mb-6 rounded">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {billingToggle && (
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter Phone (91+)"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
            )}
          </div>
          {/** Shipping */}

          <div className="border p-4 mb-6 rounded">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {shippingToggle && (
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="number"
                    name="zip"
                    placeholder="Enter Zip Code"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
            )}
          </div>

          {/**Payment Method */}
          {/*<div className="border p-4 mb-6 rounded">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold">Payment Information</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {paymentToggle && (
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="number"
                    name="zip"
                    placeholder="Enter Zip Code"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
            )}
          </div>*/}

          {/** Payment Option */}
          <div className="border p-4 mb-6 rounded">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {paymentToggle && (
              <div className="space-y-4 mt-4">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="block text-gray-700 ml-2">
                    Cash On Delivery
                  </label>
                </div>

                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label className="block text-gray-700 ml-2">Debit Card</label>
                </div>
                {paymentMethod === "dc" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Debit Card Information
                    </h3>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter card number"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter card holder name"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Expire Date
                        </label>
                        <input
                          type="date"
                          className="border p-2 w-full rounded"
                          placeholder="Enter Expire Date"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="border p-2 w-full rounded"
                          placeholder="Enter CVV number"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border"></div>
      </div>
    </div>
  );
}

export default CheckOut;
