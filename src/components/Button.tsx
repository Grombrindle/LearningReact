import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  const [count, setCount] = useState(-1);

  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
