import React from "react";
import Card from "./Card";
import "./Card.css";

function BestSeller() {
  return (
    <>
      <div className="bestseller-heading">
        <p>SHOP OUR BESTSELLERS</p>
      </div>
      <div className="bestseller-body">
        <Card
          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1536,h_1536/global/521372/01/mod01/fnd/ARE/fmt/png/"
          title="Stardust Mid Impact Printed Women's Training Bra"
          price="AED179.00"
        />
        <Card
          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1536,h_1536/global/521375/01/mod01/fnd/ARE/fmt/png/"
          title="Stardust High Waist Printed 7/8 Women's Training Leggings"
          price="AED175.00"
        />
        <Card
          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1536,h_1536/global/521369/01/mod01/fnd/ARE/fmt/png/"
          title="Stardust Woven Women's Training Jacket"
          price="AED210.00"
        />
        <Card
          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1536,h_1536/global/521373/02/mod01/fnd/ARE/fmt/png/"
          title="Stardust Woven Women's Training Jacket"
          price="AED210.00"
        />
      </div>
    </>
  );
}

export default BestSeller;
