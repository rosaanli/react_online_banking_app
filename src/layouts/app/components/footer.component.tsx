import React from "react";
import logoFooter from "/assets/logo-footer.png";
import classes from "./footer.component.module.css";


export const FooterComponent : React.FC = () => {
  return (
    <footer className={classes.footer}>
      <img src={logoFooter} alt="" className={classes["footer-logo"]} />
    </footer>
  )
};