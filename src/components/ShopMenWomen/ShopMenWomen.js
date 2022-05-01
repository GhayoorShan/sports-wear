import React from "react";
import Button from "@mui/material/Button";
import "./ShopMenWomen.css";

function ShopMenWomen() {
  return (
    <div className="third-banner">
      <div className="third-banner__title">
        <p>STEP INTO SPRING! </p>
        <div className="third-banner__subtitle">
          <p>
            The perfect pieces to capture <br /> the feeling of an endless
            spring{" "}
          </p>
        </div>
        <div className="third-banner__buttons">
          <Button variant="outlined">Shop Men</Button>
          <Button variant="outlined">Shop Women</Button>
        </div>
      </div>
    </div>
  );
}

export default ShopMenWomen;
