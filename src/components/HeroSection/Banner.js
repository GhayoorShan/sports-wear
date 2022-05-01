import "./Banner.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner__req">
        <div className="banner__info">
          <h3>MAKE A STATEMENT IN NEW POWER SETS</h3>

          <Button onClick={() => navigate("/")} variant="outlined">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
