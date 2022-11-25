import "./Card.styles.css";
import { Card as TypeDef } from "../components";

export const Card: TypeDef = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};
