import React from "react";
import classes from "./Button.module.css";

const Button = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={`${classes.btn} ${classes["btn-4"]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
});

Button.displayName = "Button";

export default Button;
