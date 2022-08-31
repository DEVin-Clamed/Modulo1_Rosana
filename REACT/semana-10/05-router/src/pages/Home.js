import { Link } from "react-router-dom";
import "./styles.css";
export const Home = () => {
  return (
    <div>
      <h2>Home</h2>

      <nav>
        <Link to="/pago">Pago</Link> | <Link to="/gratuito">Gratuito</Link>
      </nav>
    </div>
  );
};
