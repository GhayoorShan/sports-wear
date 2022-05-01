import React from "react";
import "./SecondBanner.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function SecondBanner() {
  const navigate = useNavigate();

  return (
    <div className="secondbanner">
      <div className="secondbanner__info">
        <h2>MOVE WITH MAGIC</h2>
        <p>STARDUST COLLECTION!</p>
        <Button onClick={() => navigate("/")} variant="outlined">
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default SecondBanner;
