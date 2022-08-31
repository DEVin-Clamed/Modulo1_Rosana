import "./BemVindo.css";

export const BemVindo = ({ nome }) => {
  return (
    <h2 className="BemVindo">
      Boas Vindas ao Clamedfy <span>{nome}</span>
    </h2>
  );
};

