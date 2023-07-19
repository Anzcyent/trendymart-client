import React, { useState } from "react";

const CartSummary = ({ cart, StripeCheckOut, KEY }) => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  return (
    <div className="sm:w-1/3 w-full border px-4 py-2 my-5 rounded-md flex flex-col">
      <h5 className="font-bold my-3">ORDER SUMMARY</h5>

      <div className="flex flex-col justify-evenly items-start h-40">
        <div className="flex items-center justify-between w-full">
          <span>Estimated Shipping</span>
          <span className="font-bold">$-5.90</span>
        </div>

        <div className="flex items-center justify-between w-full">
          <span>Shipping Discount</span>
          <span className="font-bold">$-5.90</span>
        </div>

        <div className="flex items-center justify-between w-full text-2xl my-3">
          <span>Total</span>
          <span className="font-bold">${cart.total}</span>
        </div>

        <StripeCheckOut
          name="TrendyMart"
          image="https://media.istockphoto.com/id/157308559/tr/foto%C4%9Fraf/money-pile-100-dollar-bills.jpg?s=612x612&w=0&k=20&c=48StwAO8TerBkLxDUBn5WCSr4BHYb1ov1Sg67VIcup0="
          billingAddress
          shippingAddress
          description={`Your total is $${cart.total}`}
          amount={cart.total * 100}
          token={onToken}
          stripeKey={KEY}
        >
          <button className="text-sm border px-2 py-1 hover:bg-black hover:text-white active:scale-95 transition">
            CHECKOUT NOW
          </button>
        </StripeCheckOut>
      </div>
    </div>
  );
};

export default CartSummary;
