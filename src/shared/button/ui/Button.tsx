import React, { FC } from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
export default Button;
